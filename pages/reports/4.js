import T from 'prop-types';

import Heading from '../../components/heading';
import Intro from '../../components/intro';
import Competitions from '../../components/competitions';
import Footer from '../../components/footer';
import ActivityInfo from '../../components/shipStats';

import config from '../../config';

import { loadPilotActivitydata, loadShipData } from '../../src/fetchData';

// import Link from '../../components/link';
import ComActivity from '../../components/comActivity';

const reportNumber = 4;
const startDate = '2021-08-05';
const endDate = '2021-08-12';
const submissionDate = '2021-08-13';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Spam Conflict PvE; Squadrons PvE and PvP; Starcross Fighter League; Challenge Cup',
};

const competitions = [{
  id: '3301',
  name: 'Crossword Challenge',
  ends: '2021-09-30',
  units: 'Entire TC',
  notes: 'Every month, Solohan50 will send out a crossword puzzle. Winners determined by number of correct answers.',
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
            From within the bowels of the Nebulon-B Class Frigate "Swift Fury"
            came a roar of rage. "How did this happen," shouted Silwar Naiilo,
            still dressed in the ceremonial robes of a Sith Battlemaster. "We
            had Imperial Storm won - and now, the Hammer is in posession of
            nearly every system on the map?" The thought of festivities, once
            planned to celebrate his rise to Consul of Clan Drakonan, were
            thoroughly wiped away as he started into the holoterminal, lit in
            green hexagons. "And where is the Warrior? We can't afford to lose
            anything else." He closed his eyes, and took a deep breath. Anger
            came naturally to Sith, and a fierce ally the emotion was -
            but he needed focus in this moment. He was directing fleets, not
            facing the treacherous LC Genie in single combat. He punched the
            number "40026" into the communicator, and directed: "Send our forces
            to retake Rodis, Cattamascar, and Panatha. We merely need to hold
            on to our lead. Do not fail me this close to our victory."
          </em>
        </p>

        <p>
          Imperial Storm III hs taken an interesting turn, as the Hammer has
          sent its fleets to each and every system on the map, and won most of
          them over. As of last night, we are in battle in three systems
          simultaneously, as well as taking a fourth without resistance.
          Imperial Storm is nearly at an end, and victory is within our grasp.
        </p>

        <p>
          Next is another Heroes of the Challenge entry, a description of
          Colonel Harlon Reiss, batallion commander in the Hammer's Fist. This
          was one of two entries submitted by GN Jarek La’an:
        </p>

        <hr />

        <p>
          <strong>Colonel Harlon Reiss</strong>
          <br /><br />
          Presently serving as Commander of a battalion of Hammer's Fist Stormtroopers embarked on the ISD-II
          Challenge, Colonel Reiss is best characterised as a difficult man to like, although he is adored by those
          under his command. Noted for his ascerbic personality and as a stickler for high standards, he believes
          firmly in setting the example for the men and women under his command to follow. A human male, lean
          in build and tall, his features are sharp. His dark eyes betray little emotion, while his closely cropped grey
          hair is broken by multiple scars as a clear reminder of his frontline combat experience.
          Aged 47 but able to outrun and outfight the majority of his command, he drills his troops relentlessly to
          ensure they are always ready to fight and win at the command of the Emperor's Hammer. Having
          enlisted as a Stormtrooper in the aftermath of the Battle of Yavin, he rose quickly through the ranks
          earning a reputation as a loyal and highly effective soldier, reaching the rank of Lieutenant within 5
          years.
          <br /><br />
          Following the Empire's disintegration into splintered remnants after the Battle of Jakku and the signing of
          the Galactic Concordance, Reiss found himself serving a succession of self-proclaimed warlords as
          interneccine struggles led to bitter infighting. Rising to the rank of Major 10 years after Jakku and
          growing increasingly disillusioned with those commanding him and their desire to spend his troop's lives
          in the name of petty politicking, Reiss and a full company of Stormtroopers loyal to him seized control of
          an Arquitens-class cruiser, the Revelation, before using it to reach the territory of the Emperor's
          Hammer.
          <br /><br />
          He has served his new masters faithfully, initially on Aurora Prime before commanding battalions on the
          ISD Immortal and ISD Relentless, prior to joining the ISD Challenge. Rejecting further promotion he
          seeks to avoid being removed from his troops or combat. Far from an Imperial fanatic or xenophobe, he
          is motivated by a desire to return order to the galaxy and put an end to the constant state of conflict that
          has prevailed since Yavin, recognising that only the Empire can offer stability and the firm hand
          needed.
        </p>

        <hr />

        <p>
          Congratulations to LT AyePeaBee, who joined Eagle Squadron and was
          promoted after earning some Legions of Skirmish.
        </p>

        <p>
          COL Horus Blackheart has been transferred from Commander to Flight
          Member of Eagle Squadron. CM Graf D‘Jinn, as XO, is acting
          commander until a new commander is chosen, which will be within the
          coming days. I have several well-qualified applicants.
        </p>

        <p>
          Lastly, I am going on leave this week, and will be fairly unavailable
          from August 14 through 21. I will check in as often as possible, but
          in the meantime, LC Phalk Sturm is acting commodore. CPT Travis
          "TI-40026" Cook will be the point person for Imperial Storm. I trust
          to find this ship in perfect condition upon my return.
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
