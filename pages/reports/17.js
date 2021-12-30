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

const reportNumber = 17;
const startDate = '2021-12-12';
const endDate = '2021-12-19';
const submissionDate = '2021-12-20';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Squadrons PvP, COO Shootouts, Legions Challenging Time Trials',
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

      <Intro showUniform={false}>
        <Link
          href="https://tc.emperorshammer.org/images/report-assets/challenge-by-newt.jpeg"
          target="_blank"
        >
          <img
            src="https://tc.emperorshammer.org/images/report-assets/challenge-by-newt-resized.jpeg"
            style={{ width: '1600px', maxWidth: '100%' }}
          />
        </Link>

        <p style={{ textAlign: 'center' }}>
          <em>
            Some of the pilots of the ISDII Challenge, pictured for their
            annual Life Day photo by LT Newt.
            Pictured, top to bottom and left to right:
            <br /><br />
            Honsou
            <br />
            TI-40026, Colo Delste, Xylo Pethtel, Dynamus, Artificial,
            Joespence, LQC-75-3, Akreseus, BadKid, Sylas, LegionX, Shiro
            <br />
            Cody Lance, Newt, EvilGrin, Silwar Naiilo, Drummer Nate, Marenta
            <br /><br />
            Click on the image for the full size.
          </em>
        </p>

        <p>
          It's nearly Life Day again, and that means a time of reflection upon
          our last year: and, what a year it's been. Last year, the ISDII
          Challenge was reactivated under HA Dempsey, and by this time we had
          just finished our first Raise the Flag in many years. Soon after, we
          would win TIE Corps in Battle as the smallest ship.
          The new year saw us take victory in <em>every</em> fleet-wide
          competition, from Firebird's win in the Challquilla cup, Tempest's and
          Firebird's high placements in Squadron ReMob, another TIE Corps in Battle
          victory, a resounding win in Imperial Storm 3, and a win in Raise the
          Flag 2021 to cap off the year. It was not an easy fight, and we
          cannot afford to be complacent, but what it shows is that we are a
          strong ship, victorious not because of a few but because of
          contributions from every officer on this ship.
        </p>

        <p>
          When I was offered the opportunity to become the Challenge's
          commodore last July, I was shocked, excited, and nervous. The
          Challenge was my first ship, 14 years ago, and to be given command
          over such a highly decorated ship, one full of individuals who had
          put their heart into building the Challenge into what it is today, was
          humbling. You've all shown me what it means to be an officer of the
          TIE Corps, from brand-new Lieutenants who spend hours creating art,
          to the LCMs who run complex competitions, the squadron commanders who
          dedicate hours upon hours to building their squadrons, and even the
          occasional Colonel who writes tittilating fiction entries. We have
          pilots who are carrying the torch of XvT and XWA PvP, we have pilots
          who have flown nearly every mission in the Battle Compendium. We have
          poets, we have artists, and we have some of the best Squadrons pilots
          in the fleet. We have musicians, chefs, and theorycrafters. Our
          diversity is what makes us strong, and if there's one thing I want to
          carry on and to build upon in the new year, it is that strength.
        </p>

        <p>
          Thank you all for making this an amazing place to spend my TIE Corps
          career. Everybody here has an impact, far beyond what you can
          possibly imagine.
        </p>

        <p>
          Yeah, yeah, drinks are on me for the Life Day party.
        </p>

        <hr />

        <p>
          The third COO's Saturday Shootout is behind us, and another
          ten Iron Stars with Copper Wings have been recommended. The office
          of the Combat Operations Officer (FA Miles Prower) runs an event
          every Saturday at 1800 EST / 2300 GMT, where we try to get as many
          people online at once as possible for PvP games.
        </p>

        <hr />

        <p>
          Welcome SL Stralen, who joins Eagle, as well as SL Jarl Torment, who
          joins Firebird squadron. Congratulations to LT Artificial of Thunder
          squadron and CPT Morgoth of Tempest squadron on their promotions!
          As the most senior ranking officer, drinks are on CPT Morgoth this
          week. It's not like the LTs have much salary to speak of anyways.
          Drummer the Gunner Nate and Sylas Pitt have each received a Medal of
          Instruction for their recruiting efforts.
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
