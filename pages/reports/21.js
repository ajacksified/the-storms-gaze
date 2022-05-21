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

const reportNumber = 21;
const startDate = '2022-05-11';
const endDate = '2022-05-20';
const submissionDate = '2022-05-21';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: '',
  otherActivity: 'Submitted two new competitions: Moving Day and ISDII Challenge: On the Offensive II',
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
            Vice Admiral Silwar Naiilo instinctively asked for a lock-on when
            the elongated, blistered capital ship drifted into view from the deck
            of the Imperial Star Destroyer Challenge. "Ready turbolasers and
            torpedoes." Lieutenant Colonel Denys Elara scanned the room with
            hazel eyes, keenly observing the practiced actions of the officers
            on the bridge as they entered commands into their terminals in a
            pit below her walkway. She noticed the amber light blinking a split
            second before the comms officer himself did, and nudged the
            commodore. "We're being hailed, sir," announced Lieutenant Billam
            from behind his screen. Silwar nodded. "Put it through."
          </em>
        </p>

        <hr />

        <p>
          Battlegroup III, the ISDII Challenge's Battlegroup, has a new ship-
          an MC-40. Sure, it's a little outdated, but it blends in well with
          the New Republic's aging fleet - perfect for the Infiltrator Wing
          squadrons of Eagle and Firebird. Both squadrons remain assigned to
          Battlegroup III and Wing X, but we now have additional bait for our
          traps. To that end, I have started a new competition: "Moving Day."
          In this competition, pilots of the ISDII Challenge are asked to
          create fiction, art, or a battle synopsis relating to the MC-40,
          Eagle, and/or Firebird. We also have the opportunity to name our new
          ship, and any names put forth in these entries will be used when
          discussing what her final designation shall be. Entries are due by
          July 1, giving you about six weeks from now.
        </p>

        <p>
          Another new competition is "ISDII Challenge: On the Offensive II".
          In this competition, you're asked to play ex-COM GN Anahorn Dempsey's
          new mission, XvT-TC 147: Jeequai Encounter and submit a review with
          at least 20 words within a month. (The first "On the Offensive" was
          when a Challenge pilot last had a new mission approved, so we've got
          a theme here.) There is an IS-GW for first place, SW/BW for second
          and third, and a CW for anyone who can score at least 50,000 - which
          Demps claims is "fairly easy." We'll see about that.
        </p>

        <hr />

        <p>
          The ISDII Challenge once again takes home the win for TIE Corps in
          Battle, now three times in a row. All participating members of the
          Chal earn an MUA, while members of the top-ranking Squadron - our
          own Tempest Squadron - also earn a TUA. Firebird took third place and
          has earned a second MUA for their efforts- meaning two of our
          squadrons have earned the very first device upgrade to an MUA in the
          history of the TIE Corps, the Bronze Wings. Congratulations to both!
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
