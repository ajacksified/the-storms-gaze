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

const reportNumber = 7;
const startDate = '2021-08-28';
const endDate = '2021-09-04';
const submissionDate = '2021-09-05';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Squadrons PvP',
};

const competitions = [{
  id: '3316',
  name: 'ISDII Challenge: On the Offensive',
  ends: '2021-09-05',
  units: 'ISD-II Challenge',
  notes: 'Play XWA-free 161 for the highest score possible.',
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
          After a few weeks as acting commander, CM Graf D'Jinn has taken the
          position of commander of Eagle Squadron. I have no doubt he will lead
          his sqaudron to great things! Also,
          welcome to SL Drummer The Gunner Nate, newly assigned to Eagle Squadron,
          and SL Hawksniper, who joins Tempest Squadron. Also in Tempest, CPT
          Kalve Ryder has stepped up to lead flight 2, to replace CPT Richlet
          who has chosen to move into a flight member role. Thank you for your
          excellent service as Flight Leader, Richlet!
        </p>

        <p>
          <Link href="https://tc.emperorshammer.org/competitions.php?id=3316">
            ISDII Challenge: On the Offensive
          </Link>
          ends today, so get some flying in! Most scores seem to be
          coming in on medium so far. The highest scores earn an IS-GW, SW,
          or BW, and anyone with at least 50% of the high score will win a CW.
          To be valid, pilots must write a 20-word review.
        </p>

        <p>
          Next is another Real Heroes of the Challenge entry- CPT Kalve Ryder's
          tale of a rogue droid.
        </p>

        <hr />

        <p>
          <strong>Lord of the Restraining Bolt</strong>
          <br /><br />
          A Droids tale by C2-4T
          <br /><br />
          In a supply closet aboard the ISD-II Challenge there charged a droid. Unlike other supply closets, this was no den of discarded odds and ends. No place for dirt and filth left out of sight and out of mind.
          <br /><br />
          The closet door cracked open just wide enough to allow overwhelming light to flood in, the sounds of life and laughter coming from beyond, followed by a wet up turned mop sailing through the air hitting the far wall with an audible slopping sound.
          <br /><br />
          Quickly the closet returned to darkness, fought back only by the smouldering blue illumination of a droid's fully charged initial power cycle. C2-4T silently fed the wet mop into a trash compactor chute, overloaded the door controls with a zap from an extended appendage and went back to sleep.
          <br /><br />
          <strong>Chapter 1 - The Heist</strong>
          <br /><br />
          The Challenge cantina exploded into roarus laughter and a salute of metallic mugs hitting tables like gun shots,
          <br /><br />
          "... and then the Hammer lost their entire fleet at Kammia!!!", a well timed punchline sent the cantina into a hysterical riot as cups, bottles and the very tables themselves were knocked to the floor.
          <br /><br />
          The full force of the celebrations flooded into the little closet as the door was pried open, tonights Bartender stood in the doorway, "Damn fritzy circuits! ... Fourty, get out there! Save as many of the Chaquilla bottles as you can!"
          <br /><br />
          Fourty an old reassigned astromech leant backwards enough to extend their third leg as they shot forwards towards the door, the bartender dropping a trolley-like apparatus onto the droid as they sped past acknowledging their order with a series of pleasant bleeps and bloops.
          <br /><br />
          "Bleeee-bleeee, blooo, bleee, blzzzz! blebleblzz!"
          <br /><br />
          * * * C2 translation matrix: Out of my way you whoremongers son! * * * The bartender gave a prideful salute as the cheerful little droid set off to do noble work. ---
          <br /><br />
          Whilst appraising the room, Officers and crew began tossing their empty Chalquilla bottles into the trolley Forty dragged behind them. More often than not missing as the little droid ignore them to instead focus on a more important mission.
          <br /><br />
          An open bottle of Chaquilla rolled across the cantina floor, sloshing its contents on to the waxy coated hard wearing plasteel surface, as it was kicked to and fro before Fourty.
          <br /><br />
          * * * C2 translation matrix: Nope. Not that one. * * *
          <br /><br />
          Another bottle rolled from the edge of a knocked table before smashing almost silently among a chorus of drinking song and exuberant shouting.
          <br /><br />
          * * * C2 translation matrix: Not that one. * * *
          <br /><br />
          Towards the edge of the large open room under an unoccupied table rolled to a stop a pristine bottle of Chalquilla, a large slow drunken form on hands and knees following after it. Fourty unleashed another burst of speed and crossed the room (mostly) avoiding legs, broken glass and pilots trying to order replacements for the drinks they’d already wasted. Arriving just as the large bulk-in-a-dress uniform picked up the bottle, Forty zapped the overdressed Officer forcing them to smack their head into the table, allowing the droid to collect the Chalquilla bottle from beside the Officers now slumbering coldcocked form.
          <br /><br />
          "Blee, Beeeeeeeeeeee!"
          <br /><br />
          * * * C2 translation matrix: Yes, most excellent! * * *
          <br /><br />
          Compartmenting the pristine bottle internally, Forty scanned the room for an exit finding one between several pairs of legs and shot forward like a bullet, finally breaking the din of the cantina as cries broke out with being Pilots up ended and sent flying, the little droid plowing through them like a bowling ball, losing it’s bottle filled trolley in the process.
          <br /><br />
          Through the thick of the cantina Fourty made a break for the door as the Bartender shouted, incredulously watching as the little droid passed the cantina droid sensor unhampered. Attempting to give chase he instantly stumbled into 4 pilots attempting to loot the cleaning closet for alcohol, "Put the bleach down you rancorous halfwits!", the Bartender sighed, "... and grab a mop whilst you’re up to your arse in cleaning supplies."
          <br /><br />
          After a brief period of rummaging and knocking supplies off shelves, one of the pilots shouted from the back of the closet, "What mop?"
          <br /><br />
          <strong>Chapter 2 - The Deal</strong>
          <br /><br />
          Fourty scooted along corridors and rode turbolifts until finally arriving at their destination in the crew quarters. Approaching a door they bumped back and forth into it akin to knocking before settling back to wait.
          <br /><br />
          A moment later a bleary eyed Captain stood in the doorway, looking over the droid and checking left and right, "Did you get it?"
          <br /><br />
          "Bleeeee, blee-blooo bleeeezttt, blzzzzz!", Fourty proudly produced the Chalquilla from their internal compartment and shook it in the air.
          <br /><br />
          "Is it sealed this time?"
          <br /><br />
          "Blzzzz, bleeee, bleeet!", Forty shook the Chalquilla violently.
          <br /><br />
          "Geeze, okay! Give it here," the captain knelt down and took the bottle, briefly inspecting it against the light, "You really need to watch your language..."
          <br /><br />
          "Bloo bllzz."
          <br /><br />
          "It’s fine ... just if anyone else understands that ... undroidlike language, it could cause problems."
          <br /><br />
          "Blzzzzzzzzzzzzzt bleee-bleeeeeeeeeee bllllzzzzzt!!!"
          <br /><br />
          "It’s fine! You bring Chalquilla and my contacts in droid processing will keep that faulty restraining bolt in place. But if you attract the attention of some enterprising individual that might try fixing it themselves and that won’t end well will it."
          <br /><br />
          "Bleee...", Forty looked up at the Captain, "Blee-bleee, bleeet blee?"
          <br /><br />
          The Captain sighed, "Yes, I’II get you that reassignment to active astromech duty eventually, you’ll probably your own Corvette or something!"
          <br /><br />
          "Blee!", Forty rocked back and forth on two legs before falling silent for a second, "Bloo, blee blzt blee?"
          <br /><br />
          "Why would I have a spare mop?"
          <br /><br />
          "Bleeeee blzzzzz bleet?"
          <br /><br />
          "Sure you can laylow here for a little while.", the Captain stepped to one side allowing the little Droid to roll into his quarters, "What would you do with a mop anyway?"
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
