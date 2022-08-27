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

import ComActivity from '../../components/comActivity';

const reportNumber = 23;
const startDate = '2022-05-29';
const endDate = '2022-06-08';
const submissionDate = '2022-06-09';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Star Wars Squadrons PvP',
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
          LegionX's Challenging Time Trials are finally over - and Thunder's
          Commander deserves a rest after spending several months running away
          from the fleet's most ruthless pilots. CPT Xylo Pethtel, LCM
          Keblaomega, and I all had a nearly impossible tie for first place and
          have taken home a coveted Iron Star with Platinum Wings! (The TCCOM
          hasn't approved my new uniform yet. Perhaps he's jealous that I've
          surpassed him in number of ribbons? :grin:) Firebird
          Commander GN Stryker has taken second place and earns an IS-GW, and
          LCM Newt of Tempest Squadron takes fourth and earns an IS-BW. Other
          Challenge pilots CM Drummer the Gunner Nate, CPT Taurus, and CPT
          Morgoth have each earned an IS-CW for participating. CPT Kalve Ryder
          has earned an IS-GW for being the top pilot on the Multiplayer Coop
          Kill Board for May 2022 with 555 Legions of Skirmish, while CPT
          TI-40026, COL Triji Boliv, nd CPT Jaxx Nassin have all placed on
          various May killboards and have each earned IS-BWs.
        </p>

        <hr />

        <p>
          The first week of the first ISDII Challenge Survey has completed,
          with 14 responses! Thanks to all who have taken the time to fill it
          out. So far we have learned that:
        </p>

        <ul>
          <li>
            All respondents play PvE games; one third of them only for
            competitions, one third monthly, and one third weekly.
            <img
              src="https://tc.emperorshammer.org/images/assets/ae75cf99.png"
              style={styles.img}
            />
          </li>
          <li>
            50% of respondents play PvP at least weekly, although at least three
            people don't particularly enjoy our PvP games.
            <img
              src="https://tc.emperorshammer.org/images/assets/1e80963c.png"
              style={styles.img}
            />
          </li>
          <li>
            At least one person plays our singleplayer custom missions daily,
            and 75% of respondents play some singleplayer. Outside of
            competition missions, pilots tend to review title and rating when
            choosing a mission.
            <img
              src="https://tc.emperorshammer.org/images/assets/36e06c5d.png"
              style={styles.img}
            />
          </li>
          <li>
            We have some avid readers: 80% of respondents read official Star
            Wars fiction at least occasionally. About 75% rate fiction created
            by TIE Corps members as enjoyable. Everyone
            reads reports from units on the Challenge, although 15% report that
            they don't read reports from other units.
          </li>
          <li>
            Several respondents asked for more non-flying competitions and
            activities, although a couple asked for more flying competitions
            {'too. Hopefully they\'re all preparing entries for '}
            <Link href="https://tc.emperorshammer.org/competitions.php?id=3393">
              Moving Day!
            </Link>
          </li>
          <li>
            When it comes to suggestions for new games, Empire at War was
            commonly mentioned, with 1/3 of respondents interested in it as an
            official platform. PodRacer, Star Citizen, Stellaris, Deep Rock
            Galactic, Warhammer 40k: Darktide, Mordhau (Star Wars mod),
            Vermintide, Freeworlds: Tides of War, Tabletop Simulator: Sabacc
            (and Pazaak), Star Wars: Galaxies, and Elite Dangerous were all
            mentioned as well. Somebody said TFTC- which is an officially
            supported multiplayer platform, and is only waiting on custom
            missions for singleplayer support, so contact your local TAC today!
          </li>
          <li>
            I asked what people love about the TIE Corps. All of the responses
            mentioned community and comraderie, having people to fly with, and
            making friends. About the Challenge specifically, people said that
            it feels like a home. I'll quote one response:

            <blockquote>
              The Challenge takes everything I enjoy about the TC as a whole
              and narrows it through a funnel for concentrated amounts of it.
              As I can always fall back to the grill to say something or enjoy
              myself, write in runons and post in the new art channel... I can
              come to the Challenge and do all those with even more excitement
              and joy. It's a pleasure seeing so many faces so active, so
              intense but so laid back, and with so much talent and energy that
              the whole Corps knows to fear us in competitions, even if we
              don’t win them all. The Challenge’s identity doesn’t rest solely
              on her winning, on her competitiveness. We’ve formed such a
              strong inter squadron bond that sometimes it feels hard to
              remember what squadron my favorite people on this ship are on,
              because I see them first and foremost, as friends.
            </blockquote>
          </li>
        </ul>

        <hr />

        <p>
          Welcome LT Rockwell, who has already earned his first Legions of
          Combat and was promoted within his first few days. We shall watch
          your career with great interest.
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
