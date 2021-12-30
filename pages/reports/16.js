/* eslint max-len: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import Intro from '../../components/intro';
import Competitions from '../../components/competitions';
import Footer from '../../components/footer';
import ActivityInfo from '../../components/shipStats';

import config from '../../config';

import { loadPilotActivitydata, loadShipData } from '../../src/fetchData';

import Link from '../../components/link';
import ComActivity from '../../components/comActivity';

const reportNumber = 16;
const startDate = '2021-12-06';
const endDate = '2021-12-11';
const submissionDate = '2021-12-12';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Squadrons PvP, COO Shootouts',
  otherActivity: '',
};

const competitions = [{
  id: '3348',
  name: 'There and Back Again: A COMPOST Tale',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3343',
  name: 'Holos for the Holidays',
  ends: '2021-12-20',
  units: 'ISDII Challenge',
}, {
  id: '3342',
  name: 'Callsigns for the Corps',
  ends: '2021-12-20',
  units: 'Entire TC',
}, {
  id: '3341',
  name: 'Armchair Admirals',
  ends: '2022-01-17',
  units: 'Entire TC',
}, {
  id: '3340',
  name: 'Legion\'s Challenging Time Trials',
  ends: '2021-12-31',
  units: 'ISDII Challenge',
}, {
  id: '3339',
  name: 'Firebird Squadron Banner Competition #2',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3324',
  name: 'Crossword Challenge',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3310',
  name: 'Trivia Grand Tour Season Seven',
  ends: '2021-12-27',
  units: 'Entire TC',
}, {
  id: '3271',
  name: 'Inferno Signal Scramble',
  ends: '2022-01-01',
  units: 'ISDII Challenge',
}, {
  id: '3274',
  name: 'The Challenge with Words',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3235',
  name: 'COO\'s Star Wars Challenge Episode VII - 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3275',
  name: 'MP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3276',
  name: 'COOP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3240',
  name: 'SP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
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
          December has many competitions ending soon. Honsou's "Holos for the
          Holidays" and "Callsigns for the Corps" end in five days, while
          LegionX's Challenging Time Trials end at the end of the month. Please
          take a look at the competitions board towards the end of this report
          and take part in anything you can before we wrap up the year! (And
          for the masochists among you, there's the COMPOST competition...)
        </p>

        <p>
          The second COO's Saturday Shootout is behind us, this time with over
          fifteen people on at once. Another half-dozen Iron Stars with Copper
          Wings have been delivered. As a reminder, the office of the Combat
          Operations Officer (FA Miles Prower) runs an event every Saturday at
          1800 EST / 2300 GMT, where we try to get as many people online at
          once as possible for PvP games.
        </p>

        <hr />

        <p>
          Congratulations to Lieutennants Yubel Cobblepot and Newt on their
          promotions, as well as Cupcake who has recently reached the rank of
          Commander.
        </p>

        <p>
          Finally, I'd like to thank LT Newt for my new report picture! We
          shall watch Newt's career with great interest.
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
