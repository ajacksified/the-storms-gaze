/* eslint max-len: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import Intro from '../../components/intro';
import Competitions from '../../components/competitions';
import Footer from '../../components/footer';
import ActivityInfo from '../../components/shipStats';
import Link from '../../components/link';
import * as styles from '../../components/styles';

import config from '../../config';

import { loadPilotActivitydata, loadShipData } from '../../src/fetchData';

// import Link from '../../components/link';
import ComActivity from '../../components/comActivity';

const reportNumber = 20;
const startDate = '2022-02-01';
const endDate = '2022-05-10';
const submissionDate = '2022-05-11';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Squadrons PvP and PvE, Star Conflict PvP and PvE, XvT PvP',
  otherActivity: 'Imperial Storm 4',
};

const competitions = [{
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
          Hold on to your seats, pilots, because this report is a doozy. After
          the success of our first newsletter, the amount of time and work it
          took to put together means it's going to be an occasional surprise,
          rather than a direct replacement for ship reports. We can focus on
          producing a high-quality publication that way, rather than scrambling
          to put something together last-minute. To that end, there was a lot
          of catching-up to do - as you'll see with the long list of medals,
          combat rating advancements, and promotions below!
        </p>

        <hr />

        <p>
          Imperial Storm 4 has ended. Congratulations to the ISDII Warrior on
          their first-place win! VA Phoenix Berkana is tallying up the awards,
          and dozens of pilots on the ISDII Challenge should expect to receive
          Iron Stars of every type, Imperial Achievement Ribbons, and more as
          the award ceremony brings the yearly competition to a close.
        </p>

        <p>
          We are also awaiting the announcement of the close of TIE Corps in
          Battle Season Four, where we currently lead by over one hundred
          points, with the final round to be tallied by HA Plif soon. Tempest
          squadron holds first place, with Firebird in third and points on the
          board by Inferno, Thunder, and Eagle.
        </p>

        <hr />

        <p>
          The Legion's Challenging Time Trials competition continues to be a
          nail-biter! With only 20 days left, the top three are within a
          milisecond of each other. VA Silwar Naiilo is in first place with a
          time of 19.95, while LCM KeblaOmega and CPT Xylo Pethtel are at
          19.96! Schedule some time with MAJ LegionX and try to win the ultimate
          prize: an IS-PW.
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
