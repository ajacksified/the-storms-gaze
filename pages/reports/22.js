/* eslint max-len: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import Intro from '../../components/intro';
import Competitions from '../../components/competitions';
import Footer from '../../components/footer';
import ActivityInfo from '../../components/shipStats';
// import Link from '../../components/link';
// import * as styles from '../../components/styles';

import config from '../../config';

import { loadPilotActivitydata, loadShipData } from '../../src/fetchData';

// import Link from '../../components/link';
import ComActivity from '../../components/comActivity';

const reportNumber = 22;
const startDate = '2022-05-21';
const endDate = '2022-05-28';
const submissionDate = '2022-05-29';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: '',
  otherActivity: 'Running two competitions: "Moving Day" and "ISDII Challenge: On the Offensive II"',
};

const competitions = [{
  id: '3393',
  name: 'Moving Day',
  ends: '2022-07-01',
  units: 'ISDII Challenge',
  notes: 'Relating to the MC-40, Eagle, and/or Firebird, write a fiction piece, create a work of art, or create a storyline for a battle including plot lines and ships involved by July 1.',
}, {
  id: '3391',
  name: 'ISDII Challenge: On the Offensive II',
  ends: '2022-06-11',
  units: 'ISDII Challenge',
  notes: 'Your mission: play XvT-TC 147: Jeequai Encounter and submit a review with at least 20 words within a month.',
}, {
  id: '3361',
  name: 'The Chalquilla Cup II',
  ends: 'Someday',
  units: 'Entire TC',
  notes: 'A 3v3 fleet battle tournament between squadrons, hosted by Genie and Silwar Naiilo.',
}, {
  id: '3368',
  name: 'Legion\'s Challenging Time Trials Season 3',
  ends: '2022-06-01',
  units: 'Entire TC',
  notes: 'Kill LegionX three times as quickly as possible in Star Wars Squadrons.',
}, {
  id: '3389',
  name: 'The Challenge with Words',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Finish the word search as fast as possible.',
}, {
  id: '3377',
  name: 'TIE Fighter Total Conversion - Reimagined',
  ends: '2022-06-30',
  units: 'Entire TC',
  notes: 'Fly as much of the TFTC campaign as possible - with additional medals for art and fiction.',
}, {
  id: '3275',
  name: 'MP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
}, {
  id: '3276',
  name: 'COOP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
}, {
  id: '3240',
  name: 'SP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
}];

export default function Report({ activityData, comActivity }) {
  return (
    <>
      <Heading
        reportNumber={reportNumber}
        startDate={startDate}
        endDate={endDate}
        submissionDate={submissionDate}
      />

      <Intro showUniform>
        <p>
          <em>
            The bulbous shape of the Mon Calamari cruiser, the Challenge
            battlegroup's MC-40, was swarmed with tiny ships and exo-troopers
            like a boiled egg that fell discarded on the ground during a
            picnic. It would have to undergo hundreds of readiness checks
            before it would be allowed to carry the elite pilots of the
            Infiltrator Wing, but that was the least of Commodore Silwar
            Naiilo's worries; its hangar was also only large enough to hold one
            dozen standard starfighters. Significant interior work would have
            to take place in order to hold both Eagle and Firebird on their
            missions. Major Kalve Ryder of Tempest Squadron had put forth one
            idea- using standard Imperial claws and scaffolding to hold the
            fighters, which was an intruiging idea. The fleet's best engineers
            were put on the task of deciding whether this was a reasonable
            approach...
          </em>
        </p>

        <hr />

        <p>
          It's now summer up here in the northern hemisphere, and that means
          that our teachers and students are either going to suddenly have a
          lot of free time or a lot of work to do as they prepare for the next
          year. Yours truly is spending an awful lot of time tending to the
          gardens on the ISDII Challenge which keep our troops active and
          healthy, although the next person who picks an unripe green tomato
          is going to see what the gardens look from the outside of the ship.
        </p>

        <p>
          LegionX's Challenging Time Trials ends in just a couple of days on
          June 1st. There's an incredible three-way tie between Captain Xylo
          Pethtel of Eagle Squadron, Lieutenant Commander Keblaomega of Beta
          Squadron, and Vice Admiral Silwar Naiilo, the legend himself. Could
          one of these three take the top spot in a last-minute attempt; or
          will a new challenger appear to take the Platinum Wings from all
          three?
        </p>

        <hr />

        <p>
          Congratulations to LT Gangsta of Thunder Squadron on his first
          promotion, and CPT Taurus of Firebird Squadron on his promotion
          to Captain! CPT Xylo Pethtel, MAJ Kalve Ryder, and GN Anahorn
          Dempsey also each earned an Iron Star with Gold Wings for taking
          first place in each of Imperial Storm 4's personal statistics-
          meaning the Challenge took all first place spots.
        </p>
      </Intro>

      <ActivityInfo activityData={activityData} />

      <Competitions competitions={competitions} />

      <ComActivity {...comActivity} {...manualComActivity} />

      <Footer />
    </>
  );
}

/* eslint react/forbid-prop-types: 0 */
Report.propTypes = {
  activityData: T.any,
};

Report.defaultProps = {
  activityData: null,
};

export async function getStaticProps() {
  const activityData = await loadShipData(config.squadrons, startDate, endDate);
  const comActivity = await loadPilotActivitydata(config.com.pin, startDate, endDate);

  return {
    props: {
      activityData,
      comActivity,
    }, // will be passed to the page component as props
  };
}
