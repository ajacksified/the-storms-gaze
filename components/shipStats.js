import {
  getStatsFromActivityData,
  getPromotionsFromActivityData,
  getMedalsFromActivityData,
  getCombatRatingChangesFromActivityData,
  // getAssignmentsFromActivityData,
} from '../src/fetchData';

import {
  medalImages,
  medalFullNames,
} from './medals';

import {
  getPreviousRank,
  rankImages,
  ranks,
} from './ranks';

import Card from './card';
import * as styles from './styles';

export const ShipStats = ({ shipStats }) => (
  <Card>
    <h5 style={{ ...styles.h5, marginBottom: '1em' }}>
      Ship Stats
    </h5>

    <ul>
      {shipStats.missions > 0 && (
        <li>
          {`Missions completed: ${shipStats.missions}`}
        </li>
      )}

      {shipStats.reviews > 0 && (
        <li>
          {`Reviews submitted: ${shipStats.reviews}`}
        </li>
      )}

      {shipStats.iuCourses > 0 && (
        <li>
          {`IU courses completed: ${shipStats.iuCourses}`}
        </li>
      )}

      {shipStats.locs > 0 && (
        <li>
          {`LoCs earned: ${shipStats.locs}`}
        </li>
      )}

      {shipStats.loss > 0 && (
        <li>
          {`LoSs earned: ${shipStats.loss}`}
        </li>
      )}
    </ul>
  </Card>
);

export const Promotions = ({ promotions }) => {
  if (!promotions.length) {
    return null;
  }

  return (
    <Card>
      <h5 style={{ ...styles.h5, marginBottom: '1em' }}>
        Promotions
      </h5>

      <ul style={styles.unbulletedList}>
        {promotions.map(({ pin, rank, name }) => {
          const previousRank = getPreviousRank(rank);

          return (
            <li key={pin} style={styles.unbulletedListItem}>
              {rankImages[rank]()}
              {ranks[previousRank]?.toUpperCase() || 'CT'}
              {' -> '}
              {name}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export const Medals = ({ medals }) => {
  const formattedMedals = Object.keys(medals).reduce((list, current) => ({
    ...list,
    [current.toLowerCase()]: medals[current],
  }), {});

  return (
    <Card>
      <h5 style={{ ...styles.h5, marginBottom: '1em' }}>
        Medals
      </h5>

      {Object.keys(medalImages).map((medal) => {
        if (!formattedMedals[medal]) {
          return null;
        }

        return (
          <div key={medal} style={{ textAlign: 'center' }}>
            <h6 style={{
              ...styles.h6,
              marginBottom: '0',
              marginTop: '1em',
            }}
            >
              {medalImages[medal]()}
              {`${medalFullNames[medal.toUpperCase().replace('-', '_')]}`}
              {medalImages[medal]()}
            </h6>
            {formattedMedals[medal].join(', ')}
          </div>
        );
      })}
    </Card>
  );
};

export const CombatRatings = ({ combatRatings }) => (
  <Card>
    <h5 style={{ ...styles.h5, marginBottom: '1em' }}>
      Combat Ratings Advancements
    </h5>

    {combatRatings.NEW_FCHG.length > 0 && (
      <>
        <h6 style={{ ...styles.h6, marginBottom: '1em', textAlign: 'center' }}>
          FCHG Advancements
        </h6>

        <ul style={styles.unbulletedList}>
          {combatRatings.NEW_FCHG.map((advancement) => (
            <li key={advancement.name} style={styles.unbulletedListItem}>
              <strong>{`${advancement.name}: `}</strong>
              {advancement.ratings.join(', ')}
            </li>
          ))}
        </ul>
      </>
    )}

    {combatRatings.NEW_COMBAT_RATING.length > 0 && (
      <>
        <h6 style={{ ...styles.h6, marginBottom: '1em', textAlign: 'center' }}>
          PvP Rating Advancements
        </h6>

        <ul style={styles.unbulletedList}>
          {combatRatings.NEW_COMBAT_RATING.map((advancement) => (
            <li key={advancement.name} style={styles.unbulletedListItem}>
              <strong>{`${advancement.name}: `}</strong>
              {advancement.ratings.join(', ')}
            </li>
          ))}
        </ul>
      </>
    )}

    {combatRatings.NEW_COOP_RATING.length > 0 && (
      <>
        <h6 style={{ ...styles.h6, marginBottom: '1em', textAlign: 'center' }}>
          Co-Op Rating Advancements
        </h6>

        <ul style={styles.unbulletedList}>
          {combatRatings.NEW_COOP_RATING.map((advancement) => (
            <li key={advancement.name} style={styles.unbulletedListItem}>
              <strong>{`${advancement.name}: `}</strong>
              {advancement.ratings.join(', ')}
            </li>
          ))}
        </ul>
      </>
    )}
  </Card>
);

export const Transfers = ({ transfers }) => {
  return (
    <Card>
      <h5 style={{ ...styles.h5, marginBottom: '1em' }}>
        Transfers
      </h5>

      <ul style={styles.unbulletedList}>
        {transfers.map(({ name, assignment }) => (
          <li key={name} style={styles.unbulletedListItem}>
            {`${name} to ${assignment.join(', ')}`}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default function ActivityInfo({ activityData }) {
  const shipStats = getStatsFromActivityData(activityData);
  const promotions = getPromotionsFromActivityData(activityData);
  const medals = getMedalsFromActivityData(activityData);
  const combatRatings = getCombatRatingChangesFromActivityData(activityData);

  // const transfers = getAssignmentsFromActivityData(activityData);
  // console.log(transfers);

  return (
    <>
      <ShipStats shipStats={shipStats} />
      <Promotions promotions={promotions} />
      <Medals medals={medals} />
      <CombatRatings combatRatings={combatRatings} />

      {/* temporarily disabling while ATRs don't show trasnfers */}
      {/* <Transfers transfers={transfers} /> */}
    </>
  );
}
