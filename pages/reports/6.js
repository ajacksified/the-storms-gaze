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

const reportNumber = 6;
const startDate = '2021-08-20';
const endDate = '2021-08-27';
const submissionDate = '2021-08-28';

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
            Vice Admiral Silwar Naiilo, dress uniorm heavy with medals,
            ribbons, and the dense presence of his lightsaber, mulled over the
            concept of hiring a speech writer. "After an excellent
            performance, the Imperial Star Destroyer - II Challenge"... no, too
            dry. "Another victory in the bag-" no, that downplayed their hard-
            earned victory, months spent in simulators and debating strategy
            to defeat the two other ships in the fleet, the ISD-II Hammer and
            ISD-II Warrior, in Imperial Storm 3. He looked into the chalquilla
            glass in his hand and found his answer.
            <br /><br />
            Seated in the hall of ceremonies aboard the SSD Avenger were many
            of the TIE Corps' most elite pilots, the commodores of all three
            ships, and most of the command staff. (FA Turtle Jerrar was notably
            missing, most likely working overtime on the new TIE Corps IT
            infrastructure.) Each person seated had a gold-rimmed shot glass
            filled with a harsh alcohol, a faint shimmer of what appeared to be
            some kind of thin oil on top.
            <br /><br />
            "Officers of the Emperor's Hammer TIE Corps," he began, "this marks
            the end of Imperial Storm 3. It may be the hardest-fought
            competition we've had all year, and through it, the entire fleet
            has found new ways to work together. At times the competition got
            heated, but I also saw dozens of pilots flying together,
            collaborating and finding new comraderie on their ship and others.
            This was a victory for the TIE Corps, so please, all of you, raise
            a glass, celebrate your own dedication, skill, and competitive
            drive. For the glory of the Empire!"
          </em>
        </p>

        <p>
          The Challenge scored over 30,000 points in Imperial storm, coasting
          to victory in the last few turns. 70% of our pilots will be earning a
          Meritorious Unit Award for taking first place, while the other 30% who
          aren't on leave will be on latrine duty, which after the celebrations,
          won't be pleasant.
          The last two turns saw the Drunken Admiral return home to B'Knos,
          where he found the system abandoned; the Hammer had taken the system
          and withdrew at some point later. Presumably, the Sector Admiral
          found his way to the station cantina to make himself some greasy
          hangover food.
        </p>

        <p>
          TODO: new Eagle CMDR?
        </p>

        <p>
          {'I have released a new mission, '}
          <Link href="https://tc.emperorshammer.org/download.php?id=1468&type=info">
            XWA-free battle 161: "Tempest: Deep Strike"
          </Link>
          {', and along with it, a competition: '}
          <Link href="https://tc.emperorshammer.org/competitions.php?id=3316">
            ISDII Challenge: On the Offensive
          </Link>
          . You have one more week (ending September 5) to complete the battle.
          The highest scores earn an IS-GW, SW, or BW, and anyone with at least
          50% of the high score will win a CW. To be valid, pilots must write
          a 20-word review.
        </p>

        <p>
          Next is another Real Heroes of the Challenge entry, this time a story
          about Chief Maintenance Officer Lev Gora, written by GN Anahorn
          Dempsey.
        </p>

        <hr />

        <p>
          My name is Lev Gora.
          <br /><br />
          No one has heard of me. Not much of a surprise, as I am not a famous TIE
          Fighter Ace. I wouldn't know what to do in the cockpit of a TIE Fighter if you put
          me there. Nor do I have any desire to. People you have heard of.... they're
          usually dead. And I prefer to live. And so, I do my duty, keep a low progile, and
          make sure I don't get on the wrong side of one or another of the higherups.
          But - let's start at the beginning. For some reason, I was asked to write down
          who I am. Not sure why, but part of keeping a low profile is doing ad you're
          told, even if you don't know why. Maybe it's because a new Commodore was
          appointed. I'm not sure who it is, some guy that got promoted from a TIE
          squadron. Naiser I think it is. Not sure about that.
          <br /><br />
          Anyway, I digress. For me, the beginning was Pereta City on Abednedo. My
          parents, both from Corellia, for some weird reason decided to move to
          Abednedo. Don't ask me why, it still doesn't make sense to me why anyone
          would willingly live on that backwater piece of crap. Still, I learned some skills
          there. Enough to get hired as a technician. And so, I got off that rock as soon as
          I could.
          <br /><br />
          My first job was Chief Maintenance Officer aboard a Baleen-class Heavy
          Freighter, the Dark Sky. Don't get too excited though, I was Chief Maintenance
          Officer there, and in that capacity I supervised exactly one crew members
          aboard: me. It was easy work, as the Captain wasn't taking many risks. We
          weren't getting chased around, we weren't getting shot at, and so life was easy.
          <br /><br />
          Well, until we ran into a group of Pikes. At least, I think they were Pikes. Or
          maybe it was someone whose name is Pike. No one ever told me much of
          anything there, so your guess there is as good as mine. Although from what I
          know of the Pikes, it was probably someone named Pike who wasn't an actual
          Pike. I'm still not entirely sure how or why, but that encounter ended with the
          crew either dead or taken prisoner, the cargo stolen, and me all by myself
          adrift on the Dark Sky. Now don't get me wrong, I knew that ship inside out,
          knew where every bolt should be. But when I woke up after the attack, the
          engine was no longer in a state that I could fix. No more escape pods, main and
          backup generators were ransacked. It was pretty much over and done with.
          <br /><br />
          Heck, I couldn't even send a distress signal anymore as the comm array had
          been destroyed. And the ship's main computer too.
          <br /><br />
          So what do you do in such a situation? I'm not sure, there were no protocols.
          No guides. No one ever told me what to do when you find yourseklf alone,
          stranded on a derelicht spaceship somewhere in deep space, light years from
          the nearest star system. Maybe I should write that guide one day. Who knows
          when someone might need it.
          <br /><br />
          Probably never. But you never know.
          <br /><br />
          Anyways, I'm not sure how long I'd been adrift, but suddenly I heard a loud
          bang. No sensors of course, but I'd know that bang anywhere. Someone had
          locked onto our docking ring. Which gave me two options: meet them with
          open arms, or hide until they left. The latter seemed the safe option at the
          time, but of course that did have the downside of me still being adrift and
          possibly even worse off that I was now. And so I went for door number 1. I
          hurried towards the docking ring, and just as I entered the corridor, I saw three
          guys in white armor walking towards me. I stopped, and waved at them.
          <br /><br />
          They must have panicked or something. I remember I saw one of them raise
          their rifle at me. And the next thing I know, I'm sitting in a dark room tied to a
          chair. Well, at least I wasn't on the Dark Sky anymore, that was for sure. After
          that, I did some talkiing to this guy in a neat grey uniform. Never di catch his
          name. But he did give me a choice. He needed mechanics, and as I claimed to
          be one, he would see if I was good enough to be useful. Of course I wanted to
          know what the pay was, I'm not accepting just any job, you know. But
          apparantly he expected me to take the job. Without pay. Something about an
          airlock, space and explosive decompression. Not my favorite way to die, and so
          I took the job.
          <br /><br />
          That was 5 years ago. All this time, I've been a mechanic on the maintenance
          team aboard an Imperial II-class Star Destroyer. I'd heard of these ships of
          course - everyone had. But I'd never thought I'd actually get to see one. Well,
          to be fair, I haven't seen this one yet either, I've been cooped up on the lower
          decks for all this time, but that suits me fine. Don't draw attention to yourself,
          do your job right, and you get food on a daily basis, and a place to bunk for the
          night. And I'm acually a Chief Maintenance Officer now with people who
          actually have to do what I say. Only 5 of them, but that's 5 more than in my last
          job. And not too many. If I get promoted again, I'll have to supervise 20 of
          these 6 man units like the one I'm in now. That means people start noticing
          you. And you don't really want that, do you?
          <br /><br />
          I think that pretty much sums it up for me. I'm not all that interesting. I don't
          have a high profile job, I'm not a hero of the Empire, and I'm...
          Well, I say Empire, but I'm not actually sure how much of an Empire we are. I've
          been doing a little reading on Galactic history, and it seems the actual Emperor
          of the Empire died about a year after I was born. So can we be an Empire if
          there is no Emperor? Who knows, people do crazy things. Except me. Crazy
          things get you noticed, getting noticed is what gets you killed. And I intend to
          die of old age. Of very, very old age. Preferably on some world where it's
          always sunny, plenty of food. And plenty of Twi'lek dancing girls for all. I've got
          a few years to figure out how to do that. Maybe I'll write another tidbit once I
          get that far. Assuming someone then wants to know of course.
          <br /><br />
          Lev Gora, MC-11543
          <br /><br />
          Chief Maintenance Officer, Main Engine Crew #16, ISD-II Challenge
        </p>

        <hr />

        <p>
          Congratulations to Xylo Pethtel on his promotion to Lieutenant
          Commander!
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
