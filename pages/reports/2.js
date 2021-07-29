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

const reportNumber = 2;
const startDate = '2021-07-17';
const endDate = '2021-07-28';
const submissionDate = '2021-07-29';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Spam Conflict PvE; XWA PvE; Squadrons PvE and PvP; TIE mission for IS',
};

const competitions = [{
  id: '3299',
  name: 'Real Heroes of the challenge',
  ends: '2021-08-01',
  units: 'ISD-II Challenge',
  notes: 'Create an NPC who works on the Challenge. What do they do and how did they get there?',
  highlight: true,
}, {
  id: '3301',
  name: 'Crossword Challenge',
  ends: '2021-09-30',
  units: 'Entire TC',
  notes: 'EVery month, Solohan50 will send out a crossword puzzle. Winners determined by number of correct answers.',
}, {
  id: '3297',
  name: 'Guess the Pilot!',
  ends: '2021-08-01',
  units: 'Entire TC',
  notes: 'Guess who the pilots are by their uniform in a timed test.',
}, {
  id: '3294',
  name: 'Imperial Storm III',
  ends: '2021-07-30',
  units: 'Entire TC',
  notes: 'The entire fleet has a simulated battle. Legion farming and SP scores count.',
}, {
  id: '32389',
  name: 'Challenge Championship League',
  ends: '2021-08-08',
  units: 'ISD-II Challenge',
  notes: 'A 3v3 fleet battles league for pilots of the Challenge',
}, {
  id: '3271',
  name: 'Inferno Signal Scramble',
  ends: '2022-01-01',
  units: 'ISD-II Challenge',
  notes: 'Fill in the acronyms from random letter combinations; Google Forms link posted to the Challenge Discord channel',
}, {
  id: '3274',
  name: 'The Challenge with Words',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'COL Marenta will generate a word search and post the link.',
}, {
  id: '3235',
  name: 'COO\'s Star Wars Challenge Episode VII - 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Accumulate the most LoCs or LoSs in Squadrons.',
}, {
  id: '3275',
  name: 'MP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most LoCs earned. Squadrons games not eligible.',
}, {
  id: '3276',
  name: 'COOP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most LoSs earned.',
}, {
  id: '3240',
  name: 'SP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most singleplayer missions played.',
}, {
  id: '3154',
  name: 'The TIE Pilot Podcast',
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
          <em>
            The screen in front of Silwar lit up with hundreds of blips appearing
            out of hyperspace. "The Warrior has arrived at Bunduki, as expected,"
            he noted to LC Tygra Shadowclaw and MAJ EvilGrin.
            "However, we were not expecting a fleet this size. They outnumber
            us almost 2 to 1." Silwar stood up straight, turning to the pair
            of commanders. "It's your squadrons on the line today. We cannot
            win this battle, but we can cripple this batlegroup. Their fleet is,
            overall, smaller than ours; we can make this an even trade while we
            position ourselves for a counterattack." Shadowclaw nodded.
            "Thunder Squadron won't go down without a fight." EvilGrin
            wordlessly put on his flight helmet and left to debrief his pilots.
            It was going to be a very long, hard fight.
          </em>
        </p>

        <p>
          The Hammer sent a small raiding party to Kammia, not expecting the
          might of the Fifth Battlegroup to be waiting for them when they
          arrived. There were no survivors on the Hammer's side of the Second
          Battle of Kammia. Sadly, we lost one squadron of Y-Wings; their
          sacrifice will be celebrated in the halls of the Challenge cantina.
          After a few more turns, the Warrior showed up with a massive force
          at Bunduki. While they did take the system, their already
          much-smaller force has further diminished, while ours remains strong.
          Thanks to the heroic efforts of the Challenge pilots, we dealt more
          damage than we took, furthering our lead in fleet size. We submitted
          1,442 Legions and scored an average of 76.4% on the singleplayer
          battle across 21 pilots, showing that we won't go quietly. We
          <em>{' will '}</em> have our vengeance.
        </p>

        <p>
          <Link href="https://tc.emperorshammer.org/competitions.php?id=3299">Real Heroes of the Challenge</Link>
          {' is ending in two days! Get entries in before August 1st.'}
        </p>

        <p>
          Congratulations to Tempest Squadron, who earned TUAs for their
          TIE Corps in Battle performance, and to all 18 participating members
          of the Challenge who earned MUAs! Congratulations also go out to LC
          Genie, the "TIE Corps Battlemaster", and COL Phalk Sturm for taking
          second place overall.
        </p>

        <p>
          Tempest saw four promotions; congratulations to CPT Richlet, CM
          EchoVII, COL Phalk Sturm, and CM Morgoth. Congratulations are also
          due to CM LegionX of Thunder Squadron, who earned his promotion as
          well.
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
