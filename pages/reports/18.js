/* eslint max-len: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import Intro from '../../components/intro';
import Competitions from '../../components/competitions';
import Footer from '../../components/footer';
import ActivityInfo from '../../components/shipStats';

import config from '../../config';

import { loadPilotActivitydata, loadShipData } from '../../src/fetchData';

// import Link from '../../components/link';
import ComActivity from '../../components/comActivity';

const reportNumber = 18;
const startDate = '2021-12-20';
const endDate = '2021-12-27';
const submissionDate = '2021-12-28';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Squadrons PvP, Star Conflict PvE',
  otherActivity: '',
};

const competitions = [{
  id: '3348',
  name: 'There and Back Again: A COMPOST Tale',
  ends: '2021-12-31',
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
          The year is nearly over, and with it a formative one in the TIE
          Corps's history. My last report focused on reflection over the year,
          and with this report I'd like to look forward into ABY 30 and consider
          where we can and want to go. Not physically, of course- the Grand
          Admiral has us headed deeper into the Unknown Regions- but how we can
          continue to reinforce the culture we've built together? How can we
          work together with everyone in the TIE Corps to function as a strong,
          cohesive fleet?
        </p>

        <p>
          One concrete step we've taken that most recently is to reactivate the
          COO shootouts - an event, rather than a competition, which encourages
          everyone to fly together as much as possible. Movie nights (watched
          on your preferred legal platform) are another suggestion that has
          been passed around. We have a number of people who are creating art
          and fiction that ties us together, as well as a growing number of
          pilots interested in mission creation. There are talks about
          reactivating the podcast. These are the types of things that bring us
          together. What ideas do you have?
        </p>

        <hr />

        <p>
          There are a number of competitions that end New Year's Eve. Take
          a look at the competitions listing and see if there are any you'd
          like to take part in before the year's end. In particular, I
          recommend trying Legion's Challenging Time Trials and the
          Firebird Squadron Banner competition.
        </p>

        <hr />

        <p>
          Welcome to SL Saeko Shan, who joins Inferno squadron! Congratulations
          go out to LT Jarl Torment on his first promotion, and CPT LegionX on
          his promotion as well.
        </p>

        <hr />

        <p>
          Lastly, happy New Year! May you stay healthy and may the Force serve
          you well.
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
