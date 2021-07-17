import T from 'prop-types';

import Heading from '../../components/heading';
import Intro from '../../components/intro';
import Competitions from '../../components/competitions';
import Footer from '../../components/footer';
import ActivityInfo from '../../components/shipStats';

import config from '../../config';

import { loadShipData } from '../../src/fetchData';

// import Link from '../../components/link';

const reportNumber = 1;
const startDate = '2021-07-01';
const endDate = '2021-07-16';
const submissionDate = '2021-07-17';

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
  id: '3293',
  name: 'Sigma Sigil',
  ends: '2021-07-25',
  units: 'Entire TC',
  notes: 'Design a new patch for a new squadron, Sigma. Send entries to acetiepilot.',
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
  id: '3266',
  name: 'Trivia Grand Tour: Season Six',
  ends: '2021-07-26',
  units: 'Entire TC',
}, {
  id: '3262',
  name: 'Trivia for the Challenged 2021 - Season 3',
  ends: '2021-07-31',
  units: 'ISD-II Challenge',
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

export default function Report({ activityData }) {
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
            Vice Admiral Silwar Naiilo paced the bridge, tense. Less than a week after being
            trusted with command of one of the most highly-decorated ships in the history of the
            TIE Corps- a ship with decades of awards, brilliant pilots and leaders- Silwar was
            facing his first battle. The fact that the battle was only a simulation didn't matter;
            pride was on the line, and it would be a test of his abilities to command as well as the
            Challenge's readiness to wage war. His mind drifted to chalquilla to calm his nerves,
            but he thought better of it and motioned to one of the new faces on the deck. "Coffee,
            hot, black."
          </em>
        </p>

        <p>
          <em>
            Reports came in that the Challenge's Infiltrator battlegroup was nearly in position
            over Kammia.  It would be the very first battle of Imperial Storm, pitting a large,
            well-prepared fleet against unknown forces led by the Hammer. Silwar had ribbed
            Stryker and Horus in the past- and when feeling confident, even Dempsey- about their
            love for rebel craft, but now was the time to prove whether they could hold it
            together. An announcement crisply spoke over his comms device: "Battlegroup dropping
            out of hyperspace in 3... 2... 1..."
          </em>
        </p>

        <p>
          <em>
            The celebration that night was a sight to behold.
          </em>
        </p>

        <p>
          While we can't give out many details yet, the victory at Kammia was only possible due
          to the dozens of pilots who took part in the singleplayer and multiplayer games for
          the Challenge. So far, in each of our battles, we have had almost double the number of
          active pilots - and as you will see later in this report, our prodigious amount of medals
          is proof. In Imperial Storm, we now own five systems (to the Hammer's two and the
          Warrior's three), and estimate that we have the largest fleet by a wide margin. Hold
          fast, and we shall prove that the Challenge is, indeed, up to the challenge. COL Marenta
          is documenting our exploits, and once Imperial Storm is over, I expect to both write and
          read plenty of fiction about what actually happened in each battle - from each ship's
          perspective.
        </p>

        <p>
          I have launched my first ship-wide competition as COM: Real Heroes of the Challenge.
          This competition ends in about two weeks; review the Competitions section below for more
          details.
        </p>

        <p>
          Please let me know if any issues with my reports; I am working on a new template, and I
          expect that over the next few weeks the template I use may change quite a bit. If there
          is any information that you'd like to see (or like to see less of), feel free to email
          or ping me in Discord.
        </p>

        <p>
          Last, but certainly not least, I would like to lay praise upon HA Dempsey as much as
          possible for her excellent leadership for the past year, and thank CM Honsou for
          stepping up to lead Tempest Squadron. I cannot overstate how much I look forward to
          working with each of you to continue to push the Challenge to its potential.
        </p>
      </Intro>

      <ActivityInfo activityData={activityData} />

      <Competitions competitions={competitions} />

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

  return {
    props: { activityData }, // will be passed to the page component as props
  };
}
