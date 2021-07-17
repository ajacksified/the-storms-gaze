import axios from 'axios';

export async function loadSquadronActivityData(
  squadronId,
  startDate,
  endDate,
  extraPins = [],
) {
  const { data: squadronData } = await axios.get(`https://api.emperorshammer.org/squadron/${squadronId}`);

  const pins = [...squadronData.pilots.map(({ PIN }) => PIN), ...extraPins];

  const pilotData = await Promise.all(pins.map(async (pin) => {
    const {
      data: activityInfo,
    } = await axios.get(`http://gonk.vercel.app/api/activity?pilotId=${pin}&startDate=${startDate}&endDate=${endDate}`);

    return activityInfo;
  }));

  return pilotData.map((data, i) => ({
    ...squadronData.pilots[i],
    ...data,
  }));
}

/* eslint comma-dangle: 0 */
export async function loadShipData(squadronIds, startDate, endDate) {
  const data = await Promise.all(squadronIds.map(
    (id) => loadSquadronActivityData(id, startDate, endDate)
  ));

  // Flatten out the array, we don't need to break it up by squadron.
  return data.flat();
}

// get count of battles completed, high scores earned, locs earned, loss earned, number of reviews
// posted, number of IU courses completed
//
// promotions
//
// medals awarded
//
// transfers (assignments)

export function getStatsFromActivityData(activityData) {
  // get count of battles completed, high scores earned, locs earned, loss earned, number of reviews
  // posted, number of IU courses completed

  const missions = activityData.reduce((total, pilot) => {
    if (!pilot.activity.BATTLE_COMPLETED) {
      return total;
    }

    return total + (pilot.activity.BATTLE_COMPLETED?.reduce((battleTotal, { numMissions }) => (
      battleTotal + numMissions * 1
    ), 0)) || 0
  }, 0);

  const locs = activityData.reduce((total, pilot) => (
    total + (pilot.activity.MEDALS_AWARDED?.LoC || 0)
  ), 0);

  const loss = activityData.reduce((total, pilot) => (
    total + (pilot.activity.MEDALS_AWARDED?.LoS || 0)
  ), 0);

  const reviews = activityData.reduce((total, pilot) => (
    total + (pilot.activity.SUBMITTED_BATTLE_REVIEW?.length || 0)
  ), 0);

  const iuCourses = activityData.reduce((total, pilot) => (
    total + (pilot.activity.IU_COMPLETED?.length || 0)
  ), 0);

  return {
    missions,
    locs,
    loss,
    reviews,
    iuCourses,
  };
}

export function getPromotionsFromActivityData(activityData) {
  return activityData.filter((pilot) => (
    pilot.activity.NEW_PROMOTION || pilot.activity.RANK_SET_BY_TCCOM
  )).map((pilot) => ({
    pin: pilot.PIN,
    name: pilot.label,
    rank: pilot.rank,
    rankAbbr: pilot.rankAbbr,
    date: (pilot.activity.NEW_PROMOTION || pilot.activity.RANK_SET_BY_TCCOM)[0].date,
  }));
}

export function getMedalsFromActivityData(activityData) {
  return activityData.filter((pilot) => (
    pilot.activity.MEDALS_AWARDED
  )).reduce((medals, pilot) => {
    Object.keys(pilot.activity.MEDALS_AWARDED).forEach((medal) => {
      if (!medals[medal]) {
        medals[medal] = [];
      }

      medals[medal].push(pilot.label);
    });

    return medals;
  }, {});
}

export function getCombatRatingChangesFromActivityData(activityData) {
  const ratings = {
    NEW_COMBAT_RATING: [],
    NEW_COOP_RATING: [],
    NEW_FCHG: [],
    /// TODO figure out wings later
    // FLIGHT_CERTIICATION_WINGS: []
  };

  Object.keys(ratings).forEach((rating) => {
    activityData.filter((pilot) => (
      pilot.activity[rating]
    )).forEach((pilot) => (
      ratings[rating].push({
        name: pilot.label,
        ratings: pilot.activity[rating].map((r) => r.rating || r.combatRating || r.fchg)
      })
    ));
  });

  return ratings;
}

export function getAssignmentsFromActivityData(activityData) {
  return activityData.filter((pilot) => (
    pilot.activity.NEW_ASSIGNMENT
  )).map((pilot) => ({
    pin: pilot.PIN,
    name: pilot.label,
    assignment: pilot.activity.NEW_ASSIGNMENT.map((assignment) => (
      assignment.assignment
    )).filter((assignment) => (
      assignment.indexOf('/') > -1
    ))
  }));
}
