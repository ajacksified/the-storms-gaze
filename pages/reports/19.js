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

const reportNumber = 19;
const startDate = '2022-01-01';
const endDate = '2022-01-14';
const submissionDate = '2022-01-15';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Squadrons PvP',
  otherActivity: '',
};

const competitions = [{
  id: '3361',
  name: 'The Chalquilla Cup II',
  ends: '2022-04-01',
  units: 'Entire TC',
}, {
  id: '3341',
  name: 'Armchair Admirals',
  ends: '2022-01-17',
  units: 'Entire TC',
}, {
  id: '3340',
  name: 'Legion\'s Challenging Time Trials Season 2',
  ends: '2022-01-30',
  units: 'ISDII Challenge',
}, {
  id: '3324',
  name: '2022 Crossword Challenge',
  ends: '2022-04-30',
  units: 'Entire TC',
}, {
  id: '3352',
  name: 'TIE Corps Jigsaw Puzzle Extravaganza 2022',
  ends: '2022-04-30',
  units: 'Entire TC',
}, {
  id: '3271',
  name: 'Inferno Signal Scramble',
  ends: '2022-03-31',
  units: 'ISDII Challenge',
}, {
  id: '3274',
  name: 'The Challenge with Words',
  ends: '2022-03-31',
  units: 'Entire TC',
}, {
  id: '',
  name: 'TIE Corps in Battle Season Four',
  ends: '2022-08-05',
  units: 'Entire TC',
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
          As noted in Discord, we are experimenting with switching to a monthly
          newsletter format for both ship and squadron reports. However, until
          that is fully developed, I will submit biweekly updates.
        </p>

        <hr />

        <p>
          The TCCOM has announced the opening of TIE Corps in Battle Season 4! The ISDII Challenge has won the last two in a row (2020 and Season 3), and we're going to win this one too - with everyone's help.
          <br /><br />
          The TCCOM will post three battles- one each from TIE, XvT, and XWA. Your goal is to complete these battles.
          <br /><br />
          The higher you rank in score, the more points you earn - but even playing as invulnerable will still net you points!
          <br /><br />
          <Link href="https://wiki.emperorshammer.org/TIE_Corps_New_Member_Guide#Custom_Missions">The New Member Guide in the wiki</Link> will walk you through it, but feel free to ask here, chal-hangar, or hangar-chat for help.
          <br /><br />
          The game is frequently on sale on GoG and Steam. I have a few extra copies, so feel free to ping me if you need a copy - I want everyone possible playing!
          <br /><br />
          The games are PC-only, although some people have reported success playing on Mac. You can play certain versions with mouse + keyboard; ask in the hangar chat channels for setup help. These games were made decades ago, so you can play on a potato computer.
          <br /><br />
          IS-PW/GW/SW/BW for the top four overall individual point totals for the season
          <br />
          IS-GW/SW/BW for the top three individual point totals in each platform for the season
          <br />
          IS-GW/SW/BW for the top three overall individual point totals each month
          <br />
          IS-SW/BW for the top two individual point totals in each platform each month
          <br />
          TUA/MUA/MUA for all participants from the top three squadrons for the season
          <br />
          MUA for all participants from the top ship for the season
          <br /><br />
          You have one month to complete the battles, from the 8th when battles are posted until the 8th of the following month. Details will be posted here and in #chal-tcib.
          <br /><br />
          I will post what is required for bonus points and try to record and post my playthroughs (although warning, I suck at XWA.) Others may chime in as well. 
          <br /><br />
        </p>

        <h5 style={{ ...styles.h5, marginBottom: '1em' }}>
          TCIB Assignments for January 8 - February 8
        </h5>

        <ul>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=471&type=info">
              TIE-TC 165: The Hunt for Zsinj
            </Link>
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=920&type=info">
              XvT-TC 59: Cosmetic Wars!
            </Link>
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=347&type=info">
              XWA-TC 4: Privateer
            </Link>
          </li>
        </ul>

        <hr />

        <p>
          Another exciting announcement is the reopening of the Chalquilla
          Cup, a 3v3 fleet battles event with tons of medals available.
          The teams will be primarily comprised of individual squadrons (with
          admirals and some others as wildcards who can join an existing team.)
          See #chalquilla-cup in Discord for full rules and details, or view
          the <Link href="https://tc.emperorshammer.org/competitions.php?id=3361">competitions page for more information</Link>!
          Team signups end on January 20.
        </p>

        <hr />

        <p>
          In addition, many other competitions were either created or renewed,
          so make sure to take a look at the active competitions section at the
          bottom of this report.
        </p>

        <hr />

        <p>
          Welcome SL Parzival, who joins Inferno Squadron, and to LT Silver Ajax
          on his promotion.  MSE spreadsheets have
          been filled out and commented, and as such more medals and promotions
          will be going out over the coming weeks.
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
