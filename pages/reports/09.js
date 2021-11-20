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

const reportNumber = 9;
const startDate = '2021-09-14';
const endDate = '2021-09-21';
const submissionDate = '2021-09-22';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Squadrons PvP',
};

const competitions = [{
  name: 'Documentation Challenges',
  units: 'ISD-II Challenge',
  ends: '2021-09-30',
  notes: 'Fill out your wiki entry.',
}, {
  name: 'Challenge\'s Poetic Proficiency',
  units: 'ISD-II Challenge',
  ends: '2021-11-14',
  notes: 'LCM Xylo Pethtel will announce a format and subject biweekly. Write and vote on poetry.',
}, {
  name: 'Starship Designers',
  units: 'Entire TC',
  ends: '2021-10-18',
  notes: 'Design the exterior and interior of our very own starship. Send entires to LT Scarlette in Discord.',
}, {
  id: '3301',
  name: 'Crossword Challenge',
  ends: '2021-09-30',
  units: 'Entire TC',
  notes: 'Every month, Solohan50 will send out a crossword puzzle. Winners determined by number of correct answers.',
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
          Raise the Flag begins in just over a week, on October 1st. The most
          important competition of the year, I expect to win back the title of
          {'Flagship for the first time in a decade. Read up on the '}
          <Link href="https://wiki.emperorshammer.org/Challenge">
            ISD-II Challenge's history
          </Link>
          {' to learn more about our past awards!'}
        </p>

        <p>
          While I'm mentioning the wiki, don't forget to update your own
          personal page for "Documentation Challenges".
          <br /><br />
          It appears that someone spilled chalquilla all over the filing cabinet
          that houses personnel files. The SOO is coming by before Raise the
          Flag starts to inspect all of the ships, and I'm going to need a
          hand putting things back together.
          <br /><br />
          Visit the <Link href="https://wiki.emperorshammer.org/">Encyclopaedia Imperia</Link>,
          sign up, and create a page for yourself (or edit your existing page). It could be as
          simple as your uniform and assignments, like <Link href="https://wiki.emperorshammer.org/Plif">our TCCOM's</Link>,
          or as elaborate as our <Link href="https://wiki.emperorshammer.org/Anahorn_Dempsey">ex-COM Dempsey's</Link>.
          <br /><br />
          The articles I find most arbitrarily interesting will win an IS-GR
          through BR. Articles which contain at least two paragraphs, the
          biography template, and links to their current squadron and ship
          will earn an IS-CR.
          <br /><br />
          Ping me on Discord once you've done so. I'll review all
          entries at the end, so feel free to edit right up to the finish line.
          <br /><br />
          Quick, before <Link href="https://wiki.emperorshammer.org/John_T._Clark">John T. Clark</Link> finds out!
        </p>

        <hr />

        <p>
          We had two promotions this week: LCM Taurus of Firebird Squadron, and
          CPT Honsou of Tempest Squadron. Congratulations and bar tabs are due
          to both! LCM Xylo Pethtel is now SQXO and Flight Leader for Eagle
          Squadron, and LCM Critical Hit is now a Flight Leader in Eagle as
          well. We also welcome MAJ Hermann back to the Challenge, where he has
          rejoined as a member of Tempest Squadron.
        </p>

        <hr />

        <p>
          LT Scarlette is running a new competition, "Starship Designers".
          This competition is about designing your very own starship, which can
          be as detailed or simple as you wish. Designs must include the
          exterior (blueprint style or actual artwork) and interior of any
          rooms of your choice. The design can be of any kind of ship- fighter,
          cruiser, etc.
          <br /><br />
          Submissions will be judged on overall composition, art skill, and
          design. Submissions should be sent to LT Scarlette via direct message
          in Discord.
        </p>

        <hr />

        <p>
          LCM Xylo Pathtel is running the competition "Poetic Proficiency". He
          {' posts a subject and format, and you write a poem. '}
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdFTxh3ha6Vxk_CFHQy59qIwqgBvHozyWUIuh943AJnFqV7hA/viewform?usp=sf_link">
            Round two voting is open
          </Link>
          {', which featured an acrostic poem with the letters CHALLENGE, and '}
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdFTxh3ha6Vxk_CFHQy59qIwqgBvHozyWUIuh943AJnFqV7hA/viewform?usp=sf_link">
            round three entries can be submitted.
          </Link>
          {' Round 3 will challenge you to use iambic pentameter to write '}
          about our favorite drink and lubricant, Chalquilla.
        </p>

        <hr />

        <p>
          COL Marenta's Inferno Signal Scramble has completed its 11th round,
          a competition where she posts an unknown acronym - and you guess what
          {' it means. You can '}
          <Link href="https://forms.gle/hj8TNdjkLr1irGj19">
            vote for the 12th round
          </Link>
          {' and '}
          <Link href="https://forms.gle/9P9NjxRHr6xktjZn9">
            enter the 13th round
          </Link>
          {' until September 26th.'}
        </p>

        <hr />

        <p>
          Our next Real Heroes of the Challenge entry will be broken into
          multiple parts. In Phalk's first-place entry, he describes Roolo
          the mechanic:
        </p>

        <p>
          <b>VII - HANGAR BAY - ROOLO - PART I</b>
          <br /><br />
          The blast doors slided with a humming noise and a loud clank when they blocked,  widely open.
          <br /><br />
          The ISD-II Challenge had been refitted recently, as the catwalks above the hangar  had been reinforced and were now fully automated. The elevators were an upgraded  version with no rails and with the addition of magnetic fields that prevented  careless loss of life and materiel. Walls were of a polished metallic alloy that  gleamed dull reflections of this brightly lit area.
          <br /><br />
          COL Phalk Sturm was wearing his flight suit, life support, flight gloves and boots,  helmet on his left hand and his lightsaber swinging by the same side, an E-7 Blaster on the right hip. He strolled towards one of the Maintenance Officers, standing by  one of the control consoles. Crossing the hangar had to be a mindful walk, as tubes, wirings and all kinds of elements were present on the floor, as soon as anyone would wander outside the well-lit and clearly painted walk lanes.
          <br /><br />
          "Good morning, Chief Machinist." Sturm briefly said to the worn-looking officer  staring at him in anticipation.
          <br /><br />
          "Good morning, Colonel. Your Flight Group is being readied up for launch as we  speak, but there have been some issues with your Spectres. The software updates  messed up one of your fighters, and Tempest, erm, Tempest 3106853 is grounded. So  sorry. I am having one of our best mechanics at it, but I think a replacement  fighter is needed. Whose gunboat is that? You should inform your pilot, Sir.". The  Chief Machinist seemed worried but not particularly distressed. Just weary.
          <br /><br />
          "Wonderful. Then, I guess I AM grounded, since it's my bird you're talking about,  Chief." sourly replied Sturm with a slight grin.
          <br /><br />
          "Tell you the truth. Ever since the Spectres were transferred, we've been into  nothing but malfunctions and all kinds of crap on a daily basis. I mean, who builds  these things? You wouldn't believe the issues, Colonel. I am sorry, but we're doing  our best. I can let you have one of the reserve Missile Boats. What do you think?",  said Chief Machinist raising both his palms in an open stance of negotiation.
          <br /><br />
          "Again Chief, you are trying to convince me to fly, while I could be sipping coffee  elsewhere" answered Sturm. "In fact, show me to my ship, I'd like to talk to your  mechanics. I need to know what the malfunctions are, because honestly I don't want  to end up in flames or with a jammed cannon when the moment comes. I know my way  around a wrench. Point me the way", Sturm was standing squarely to the Chief  Machinist with both hands on his hips, a broad smile of smug on his face.
          <br /><br />
          "This is highly irregular, Colonel, Sir. I don't think it's necessary you do that,  our technicians are more than competent. It will be solved within the day. And one  wouldn't like to see an officer like yourself, in such labours, Sir. Besides, it's  dangerous. If someone sees you... It would be better if we ...", NOW the Chief
          <br /><br />
          Machinist was clearly worried. Embarrassed. Troubled about denying a senior officer a direct request. His face was blushing and contorting in an otherwise, still
          <br /><br />
          composed gesture. He could not help himself of thinking that this Colonel would  become a pool of problems, either if seen by others, or pointing out unobserved  regulations, and what's worse, blabbing whatever he saw to his CMDR, or even the  Commodore. He deflected his gaze towards the console module on his hands, in an  attempt to defuse the situation.
          <br /><br />
          "Chief, show me the way. Irregular is my middle name", and as Sturm said this,  turned around towards the working stations on the opposite side of the Hangar. "Or  I'll find out myself", he spoke again and he kept walking.
          <br /><br />
          "Station B-65, the mechanic is AD478. Ask for Roolo, Colonel", shouted the Chief  Machinist in the distance.
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
