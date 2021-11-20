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

const reportNumber = 10;
const startDate = '2021-09-21';
const endDate = '2021-09-30';
const submissionDate = '2021-09-30';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Squadrons PvP',
};

const competitions = [{
  id: '3325',
  name: 'Raise the Flag 2021',
  units: 'Entire TC',
  ends: '2021-10-31',
  notes: 'THE BIG ONE. Fly, write, draw. Everything counts. Bring victory to the Challenge!',
}, {
  id: '3312',
  name: 'Challenge\'s Poetic Proficiency',
  units: 'ISD-II Challenge',
  ends: '2021-11-14',
  notes: 'LCM Xylo Pethtel will announce a format and subject biweekly. Write and vote on poetry.',
}, {
  id: '3319',
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
          This is it: in about ten minutes, the biggest competition of the year
          will begin. Every pilot, every squadron, and every ship will fight
          for the top spot; not only for medals, but for the prestigious titles
          of Flagship of the TIE Corps, the TCCOM's Escort Squadron, and TCCOM's
          Wingman for the next 12 months.{' '}
          <Link href="https://tc.emperorshammer.org/competitions.php?id=3325">
            Raise the Flag 2021
          </Link>
          {' challenges everyone to take part in a variety of activities, and '}
          as many of them as possible; pilots earn points for flying, for
          writing fiction, for drawing art, and for the many bonus competitions
          that the TCCOM will announce soon. I have zero doubt that the
          Challenge will win, once again, as we won TIE Corps in Battle and as
          we won Imperial Storm 3. I expect everyone's participation as we
          reclaim the title of flagship for the first time in many years.
          Please refer to the Challenge discord for continuous discussion about
          strategy and status.
        </p>

        <hr />

        <p>
          Documentation Challenges has completed. The top three winners are:
          <ol>
            <li><Link href="https://wiki.emperorshammer.org/Dynamus">CM Dynamus: IS-GR</Link></li>
            <li><Link href="https://wiki.emperorshammer.org/Kalve_Ryder">MAJ Kalve Ryder: IS-SR</Link></li>
            <li><Link href="https://wiki.emperorshammer.org/Sylas_Pitt">LCM Sylas Pitt: IS-BR</Link></li>
          </ol>

          IS-CRs will also go out to:{' '}

          <Link href="https://wiki.emperorshammer.org/Honsou">CPT Honsou</Link>{', '}
          <Link href="https://wiki.emperorshammer.org/Honsou">LCM Colo Deste</Link>{', '}
          <Link href="https://wiki.emperorshammer.org/Xylo_Pethtel">LCM Xylo Pethtel</Link>{', '}
          <Link href="https://wiki.emperorshammer.org/LegionX">CM LegionX</Link>{', and '}
          <Link href="https://wiki.emperorshammer.org/Jaxx_Nassin">LCM Jaxx Nassin</Link>.
        </p>

        <hr />

        <p>
          Welcome SL SerenityStar13, who joins Thunder Squadron! The
          sub-lieutenant was recruited by CM LegionX, who has earned a Medal
          of Instruction.
        </p>

        <hr />

        <p>
          LT Scarlette's competition, "Starship Designers", ends in two weeks.
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
          posts a subject and format, and you write a poem. Round three voting
          {' has closed, and '}
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfjVuzeZ-xFnq2auH-3EttrOJ08mPpAeckXsYcioOFe-tY1XA/viewform?usp=sf_link">
            round four entries can be submitted.
          </Link>
          {' Round 4 will challenge you to take it to the '}
          <Link href="https://poets.org/glossary/tanka#:~:text=The%20tanka%20is%20a%20thirty,History%20of%20the%20Tanka%20Form">
            Tanka type
          </Link>
          , and write about anything to do with any of your favorite Challenge
          competitions we've had, whether that be the local missions, Imperial
          Storm, or even RtF as this round will run through it!
          <br /><br />
          COL Marenta submitted the winning entry, with a poem written using
          imabic pentameter, about Chalquilla:
          <br /><br />
          The burn, it hurts me as I take a drink
          <br />
          I cannot stop acting a fool when drunk
          <br />
          Yellow-brown hue that sticks upon every
          <br />
          Surface but cleans machines quite well indeed
        </p>

        <hr />

        <p>
          COL Marenta's Inferno Signal Scramble has completed its 12th round,
          a competition where she posts an unknown acronym - and you guess what
          {' it means. You can '}
          <Link href="https://forms.gle/BEUvnMC342LqRdLm9">
            vote for the 13th round
          </Link>
          {' and '}
          <Link href="https://forms.gle/8BRUmd7fPW3Mg7U77">
            enter the 14th round
          </Link>
          {' until October 10th.'}
        </p>

        <hr />

        <p>
          Our next Real Heroes of the Challenge entry will be broken into
          multiple parts. In Phalk's first-place entry, he describes Roolo
          {'the mechanic. This is part two; to see the first, visit the '}
          <Link href="https://tc.emperorshammer.org/showreport.php?nr=3958">
            previous report.
          </Link>
        </p>

        <p>
          <b>VII - HANGAR BAY - ROOLO - PART II</b>
          <br /><br />
          COL Phalk Sturm crossed the hangar from side to side while walking by the safety  lane, until he reached the entrance to the lower sub-level. Several fighters were  lined up into pits with scaffolds around them. A bright sign by the side of the  metal structures informed of which work station and appointed mechanic. Almost  immediately Sturm recognized his Spectre Missile Boat, as in fact it was the only  one parked amidst other TIE starfighters. He could see the Commodore's personal  Lambda-class Tyderian Shuttle being adjacent to a badly beaten TIE Advanced. Perhaps Elara's?, -he thought to himself-, and a few steps further he was standing by the  open lid of his cockpit. Inside, all panels had been dismantled, and he could not  help himself, but to release a gasp of despair. Wires, the backside of panels and  screens, accumulators, were all visible and also some scattered handheld power tools here and there. Like if a bomb had exploded and bursted the insides of his, now  dead, brand new flying death machine.
          <br /><br />
          Then a voice from inside the avionics box, growled. A guttural sound of no human  nature.
          <br /><br />
          A sturdy, aged and horribly scarred Ughnaught emerged. Surprised of having company,  he did not greet the officer staring at him. Sturm could clearly see the deep scars  on his porcine face. Burn marks, probably? Radiation? Skin plague? Electrified  lashes?. This man seemed like he had seen a lot through his life. A big number  across the chest of a red apron reported his number: AD478.
          <br /><br />
          "Good morning, AD478. Is your name Roolo?" asked Sturm to the still standing  Ughnaught, staring back at him, speechless.
          <br /><br />
          "Hmpf, yes, I am Roolo, and you are pilot. What, hmpf, is your doing here? Not  belong here, you pilot." said the Ughnaught and turned back to look for some tool  that he quickly grabbed and almost snuck back inside the cockpit's entrails.
          <br /><br />
          Sturm bowed and an awkward silent pause ensued.
          <br /><br />
          "I am Colonel Sturm, Roolo. And this is MY fighter. What is the malfunction? Maybe I can help. And I need to know what is it, before I fly this baby again", said Sturm  and squared his body, expanding his chest.
          <br /><br />
          Roolo issued a guttural sound, not a growl now, but a purr, and bowed.
          <br /><br />
          Then, he spoke: "Programming is outdated, hmpf, and there are many uncoupled  functions that were fried because of unstable molecular weilding. Hmpf, this was  poorly done, hmpf. Bad job, bad job" replied, and he started following something  with his head, inside one of the open avionic compartments, somewhere in the depths  of the fighter's nose.
          <br /><br />
          "Can I help you with those? I mean, I am not flying anywhere this morning, am I?"  asked Sturm, more interested in the odd-looking scars of the Ughnaught than the  actual malfunctions in his fighter.
          <br /><br />
          "No, hmpf. What can you know about molecular weilding? Hmpf. Work has to be done,  you go officer, you go and let Roolo do his job. Good job, good job", his reply was  dry but seemed genuinely concerned.
          <br /><br />
          "I have been to Gentes, Roolo. I have been coupling with your neutron-arches quite a few times. In fact, where are you from? Gentes? Belsus? Bespin?" inquired Sturm,  with additional intent to know more about his mechanic.
          <br /><br />
          "Neutron-arch you say? Hmpf", Roolo had popped out his head and holding a handheld  neutron-arch wielder in his hand. His left hand. His right hand was missing a few  fingers and wearing a safety glove. "Gentes I am, but sold in slavery I was. Been to many places. Now you go, officer. Good job, good job", and quickly slipped back to  the insides of the fighter.
          <br /><br />
          "Oh, sorry to hear that, Roolo. But you are here by your will, aren't you?" Sturm  asked. He was not sensing any resentment from the Ughnaught nor any physical pain  attaining an enemy. The Ughnaught just gave him a feeling of weariness. Although  genuinely concerned about Roolo's current situation of being a slave or not, he  worried more about an unwilling slave fixing his personal starfighter. But he  immediately dismissed the thought of sabotage as he felt nothing inside that could  lead him to aggression or the itching pain presenting whenever an enemy was nearby.
          <br /><br />
          "Free I am, and fond of my job. A Good job, a good job. Please, now you go officer,  let Roolo finish", the Ughnaught showed up again his scarred face lifting a  ventilation lid.
          <br /><br />
          "Alright, Roolo. But I'll be back in a few hours, to see how you're doing. And I'll  bring something. Not a genteslug, but something you may like. Good job you do and  present I will give you". Sturm almost shouted inside the open avionics compartment, since the noise of the wielder muffled his words while in a rain of sparks sourcing  from an unknown place in the depths of his fighter. He walked away.
          <br /><br />
          Roolo went back to his rumblings.
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
