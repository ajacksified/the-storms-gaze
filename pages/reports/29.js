/* eslint max-len: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import Intro from '../../components/intro';
import Competitions from '../../components/competitions';
import Footer from '../../components/footer';
import ActivityInfo from '../../components/shipStats';
import Link from '../../components/link';
// import * as styles from '../../components/styles';

import config from '../../config';

import { loadPilotActivitydata, loadShipData } from '../../src/fetchData';

import ComActivity from '../../components/comActivity';

const reportNumber = 2;
const startDate = '2022-11-12';
const endDate = '2022-12-09';
const submissionDate = '2022-12-10';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Squadrons PvP, SC PvE',
  otherActivity: 'Running a few competitions, working on some big ones.',
};

const competitions = [{
  id: '3481',
  name: 'Laugh it Up, Fuzzball',
  ends: '2022-12-14',
  units: 'Battlegroup III',
  notes: 'Submit up to three of your favorite Star Wars related jokes to AD Silwar Naiilo!',
}, {
  id: '3490',
  name: 'Operation Christmas Seal',
  ends: '2022-12-31',
  units: 'Entire TC',
  notes: 'Assist new Squadrons players and submit screenshots to MAJ Vapen Vanman',
}, {
  id: '3480',
  name: 'Holos for the Holidays: TIE Corps Edition',
  ends: '2022-12-31',
  units: 'Entire TC',
  notes: 'Use some downtime to record holos for friends and family. Send to MAJ Westric Davalorn',
}, {
  id: '3458',
  name: 'X-Wing Alliance Fast Flights',
  ends: '2022-12-31',
  units: 'Entire TC',
  notes: 'Take part in the XWA Proving Grounds - vanilla, TFTC, or XWAU.',
}, {
  id: '3444',
  name: 'Conundrums in Hyperspace: A Logic Puzzle Series',
  ends: '2022-12-31',
  units: 'Entire TC',
  notes: 'Solve puzzles presented by CM KEBLAOMEGA',
}, {
  id: '3442',
  name: 'TIE Corps in Battle Season Five',
  ends: '2022-12-15',
  units: 'Entire TC',
  notes: 'Fly an TIE, XvT, and XWA custom battle that the TCCOM posts once a month, for your ship and squadron!',
}, {
  id: '3440',
  name: 'The Challenge with Words',
  ends: '2022-12-31',
  units: 'Entire TC',
  notes: 'Finish the word search as fast as possible.',
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
          I am pleased to announce the Battlegroup's new nickname and motto:
          we shall be known as Battlegroup III "Cataclysm" - "Strength to rise;
          power to fly". Thank you to all who took part in the discussion, and
          may this serve us well in our pursuit of the enemy.
        </p>

        <hr />

        <p>
          A new competition has begun: Laugh it Up, Fuzzball! Send up to three
          {' of your best Star Wars jokes to me using '}
          <Link href="https://forms.gle/gxXAS5TQPtyxKmuv8">
            this google form
          </Link>
          {', and I will judge them. Any that make me laugh will earn the '}
          participant an ORA (max of one per participant), and the funniest
          will earn Iron Stars. I'll publish some of the best in the next
          report!
        </p>

        <hr />

        <p>
          <em>From BGCOM/AD Silwar Naiilo:</em>

          <br /><br />

          During his tenure as Tempest Squadron's commander, the squadron was
          one of the highest-performing squadrons in the fleet as the squadron
          took first place in multiple TIE Corps in Battle and achieved a
          first place victory in Raise the Flag 2021. Honsou's tireless work
          to rally the squadron, provide encouragement, and host training
          sessions was a key factor in the squadron's and ship's performance,
          as he would spend long hours throughout the night with pilots from
          across the fleet flying and teaching. Later, he would go on to
          develop a new ship for the fleet- the Tempest-class TIE Punisher,
          at the forefront of the Challenge's bomber capabilities. With
          sixteen unprecedented months of success, it is my great pleasure
          to recommend the Gold Star of the Empire for Honsou's excellent
          tour of duty as Tempest Commander.
        </p>

        <hr />

        <p>
          After four months as Firebird's commander, Captain Cade "Taurus" Tezo
          has decided to take up a Flight Member role once again. The Squadron's
          current Executive Officer, Colonel Triji Boliv will take command and
          soon after set out to appoint a new XO.
          <br /><br />
          We thank you for your service, CPT Tezo, and wish you luck, COL Boliv!
        </p>

        <hr />

        <p>
          The LAST round of TCiB ends on December 15th- in five days! The
          missions to complete are:
        </p>

        <ul>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=458&type=info">
              TIE-TC 163 - Project: Athena
            </Link>
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=941&type=info">
              XvT-TC 62 - Wing XXI: Stelek Squadron
            </Link>
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=520&type=info">
              XWA-TC 14: The History of the ISD Immortal
            </Link>
          </li>
        </ul>

        <p>
          <strong>
            Please reach out to your CMDR or me if you need help installing
            the games or custom battles! We can win only if everyone
            participates. Keep an eye on the #chal-tcib-season-5 channel in
            Discord for more info.
          </strong>
        </p>

        <hr />

        <p>
          Congratulations to LT Scottrick, LT AvengerOne, and LT ZedexJ7
          on their promotions to Lieutenant! LCM Dathka Graush and LCM
          Grendel were also promoted to Lieutenant Commander, a sign of their
          rising success within the fleet. For the Empire!
        </p>

        <hr />

        <p>
          And now for the big announcement.
          <br /><br />
          No, it's not that I'm wearing my new Christmas slippers, although they
          are quite comfortable. All officers onboard should expect a pair
          soon, color-coordinated to match your Squadrons.
          <br /><br />
          I've spent two years and five months aboard the ISDII Challenge, ever
          since she re-opened in the second half of ABY 28. I had the pleasure
          to serve in Tempest Squadron under High Admiral Anahorn Dempsey, one
          of the most highly decorated officers in the history of the TIE
          Corps. Then, after ten wildly successful months in Tempest Squadron,
          I was given the opportunity to lead the best ship in the fleet, and
          have had the privilege of partnering with all of you for the
          last year and a half. We've had highs and lows, victory and defeat,
          inherited a new Cruiser, upgraded to a Battlegroup, lost friends,
          gained new ones, closed squadrons, opened squadrons, and through it
          all, we maintained our focus on each other.
          <br /><br />
          That is a legacy that I am proud to leave behind to the next
          Battlegroup Commander as I accept the position of Combat Operations
          Officer, where I will expend all possible effort towards the
          maintenance and improvement of all of our battle systems. Those
          plans will be for my next report, though.
          <br /><br />
          I want to thank all of you for the phenomenal time I've had, and I
          have absolute faith that with your next BGCOM you'll ride to even
          higher heights. Continue to raise each other up, work together, teach
          and learn from each other, and our bonds will transcend all space and
          time.
          <br /><br />
          Signing out,
          <br />
          BGCOM-IOA/AD Silwar Naiilo/Battlegroup III
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
