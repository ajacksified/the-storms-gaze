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

const reportNumber = 13;
const startDate = '2021-10-24';
const endDate = '2021-11-10';
const submissionDate = '2021-11-11';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Squadrons PvP, Squadrons PvE, TIE, XvT',
  otherActivity: '',
};

const competitions = [{
  id: '3312',
  name: 'Challenge\'s Poetic Proficiency',
  units: 'ISDII Challenge',
  ends: '2021-11-14',
  notes: 'LCM Xylo Pethtel will announce a format and subject biweekly. Write and vote on poetry.',
}, {
  id: '3271',
  name: 'Inferno Signal Scramble',
  ends: '2022-01-01',
  units: 'ISDII Challenge',
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
            Commodore Silwar Naiilo watched through the trapezoid
            transparisteel viewports of the Challenge's bridge as the distant
            lights of two ships approached. He almost jumped when the silence
            was broken by officer Junne Roberts. "Approaching Lambda-class
            shuttle, please transmit your docking codes." A moment of silence
            passed. "Docking codes confirmed, please proceed to hangar one."
            Silwar turned to meet the gaze of Captain Honsou, whose footsteps
            up the raised walkway where the only sounds in the room,
            save the whirring and beeping of computer consoles. "The
            pilots of Tempest, Firebird, Eagle, Inferno, and Thunder are
            awaiting the arrival in the hangar," he said, with a smirk just
            barely peaking through. "Let's walk together, then," replied Silwar.
            "I will escort the TCCOM and SOO personaly to their new offices aboard the
            Challenge."
          </em>
        </p>

        <p>
          Raise the Flag has ended, and for the first time in eleven years, the
          Challenge has regained her title as the TIE Corps Flagship. We held
          the title from 2006-2010, before she was decommissioned for a number
          of years; and for her first year at full strength, is is only right
          that we return to the glory days of yore. This victory was made
          possible be the absolutely incredible contributions of all of our
          pilots; nearly everyone contributed something in their own way,
          whether singleplayer missions, multiplayer victories, art, fiction,
          puzzle entries, and bonus competitions. Being the flagship means that
          we now host the TCCOM and SOO. Tempest taking first means they're the
          TCCOM's Escort Squadron, which means their mission of Deep Strike is
          on hold as they parade around. Phalk, also of Tempest, is the TCCOM's
          personal wingman. Good luck with the Chalquilla withdrawals, Phalk. I
          don't envy you.
          <br /><br />
          This report would be amiss to not mention our competition:
          the Hammer was hot on our heels the entire game, and the Warrior flew
          an impressive amount as well. The Challenge and Hammer beat all ships
          from last year, and the Warrior would have taken first place as well.
          Everyone in the TC should be more than proud of their contributions,
          and our next engagement against the Rebels will show us prepared and
          ready to destroy anything that comes our way.
        </p>

        <p><b>Ships:</b></p>
        <ol>
          <li>Challenge: 37,216</li>
          <li>Hammer: 33,473</li>
          <li>Warrior: 15,070</li>
          <li>Aggressor: 565</li>
        </ol>

        <p><b>Squadrons (out of 16):</b></p>
        <ol>
          <li value="1">Tempest: 21,558</li>
          <li value="4">Firebird: 6,737</li>
          <li value="8">Eagle: 3,946</li>
          <li value="10">Inferno: 2,153</li>
          <li value="14">Thunder: 705</li>
        </ol>

        <p><b>Top Pilots (out of 168, showing top 20):</b></p>
        <ol>
          <li value="1">COL Phalk Sturm: 6,171</li>
          <li value="4">MAJ Hermann: 4,742</li>
          <li value="7">LCM Colo Deste: 3,350</li>
          <li value="9">MAJ Kalve Ryder: 2,520</li>
          <li value="10">LCM Jaxx Nassin: 2,337</li>
          <li value="16">VA Silwar Naiilo: 1,453</li>
          <li value="17">GN Stryker: 1,360</li>
          <li value="18">GN Anahorn Dempsey: 1,286</li>
        </ol>

        <hr />

        <p>
          Let's extend a welcome to LT LQC-75-3, who joined us in the last week
          of Raise the Flag (and managed to earn a few points!) He's interested
          in XvT and XWA multiplayer, as well as our custom missions, and is
          always on the hunt for games. We shall watch his career with great
          interest. Congratulations to CM Jaxx Nassin on his promotion to
          Commander as well, and his assignment as Firebird's XO.
        </p>

        <hr />

        <p>
          LCM Xylo Pathtel is running the competition "Poetic Proficiency". He
          posts a subject and format, and you write a poem. Round five has
          {' closed, and '}
          <Link href="https://forms.gle/Lwoei4raM7jCR6VL7">
            can be voted on.
          </Link>
          {' Round 6 is free-form; no format or theme is provided. '}
          <Link href="https://forms.gle/oMUTDz8whkuwHAs69">
            Entries can be submitted here.
          </Link>
        </p>

        <hr />

        <p>
          Our next Real Heroes of the Challenge entry will be broken into
          multiple parts. In Phalk's first-place entry, he describes Roolo
          {'the mechanic. This is part four; to see the first, visit the '}
          <Link href="https://tc.emperorshammer.org/showreport.php?nr=3958">
            report #9.
          </Link>
        </p>

        <p>
          <b>VII - HANGAR BAY - ROOLO - PART IV</b>
          <br /><br />
          "PIG FACE! GET UP YOU SWINE HEADED USELESS OLD BASTARD!!!", someone shouted and  Roolo startled in fear, hitting his head against a metallic frame inside the Spectre gunship.
          <br /><br />
          Where was he? Ygloste?
          <br /><br />
          It was the Chief Machinist. Red in the face, foam from his mouth like a rabid  animal. Clearly the racist slurs were far from banned in the Empire. Abolition of  slavery was a first step towards justice, but the segregationist culture of the  sneering imperialism that pervaded everything, was far from changed.
          <br /><br />
          "WHAT IN THE NAME OF OUR LORD AND SAVIOUR PALPATINE ARE YOU DOING?". His manical  shouts could be heard from across the hangar. Some mechanics stopped working and  were now clearly staring at the scene.
          <br /><br />
          "Sleeping, master Chief Machinist. Roolo is guilty. Bad job, bad job" muttered the  Ughnaught while lowering his head.
          <br /><br />
          "Sleeping on my watch!!! NO ONE DARES TO SLEEP UNDER MY COMMAND!. I will have you  skinned, you old wretch. I don't care what is your contract. In here, you are  MINE!.", the Cief Machinist continued to yell frantically, at the now cornered and  visibly submissive Ughnaught.
          <br /><br />
          "That would suffice, Chief Machinist.", a voice from behind the fuming NCO was  clearly heard. Every mechanic on deck was now watching this otherwise, awkward  scene. The fiery Chief Machinist, the submissive Ughnaught mechanic and a quiet  officer in grey-clad duty uniform behind him.
          <br /><br />
          Chief Machinist's eyes rolled in an unnatural way in a fog of hate.
          <br /><br />
          "WHO SAID THAT? WHO WANTS TO REGRET THIS VERY DAY?" and he turned around slowly,  like if he was giving the chance to his offender to escape and hide away.
          <br /><br />
          "I did, Chief Machinist." replied Sturm, again with the same calm voice.
          <br /><br />
          "Oh!. I am sorry, Colonel. I thought for a moment one of these day slackers... And  this pigface, erm AD478 was caught in an act of misbehaviour. I will see that he  gets proper punishment. I run a tight ship, here!", the man had toned down and  seemed almost civil as he gathered composure. His clenched fists betrayed his polite and clearly shallow demeanour.
          <br /><br />
          "Chief, the Ughnaught here is my personal mechanic. He is now under my service and  classified tasks for Tempest Squadron. I can't afford any delays nor can the
          <br /><br />
          squadron or the Commodore. I'll tell you what. You close an eye today, and no one is telling of those odd looking crates of coolant, filled with Chalquila. And I am not  suggesting.", Sturm was talking very closely to the Chief Machinist, calmly and  almost whispering.
          <br /><br />
          "Yes, Sir. As you command, Colonel.", the man turned around and went back to his  post.
          <br /><br />
          Everybody around them tried to hide, burying themselves into their respective  workstations.
          <br /><br />
          Roolo was silent, standing still very close to the fighter. Still recovering from  the fright of being caught sleeping on the job. Bad job, bad job, old Roolo, he  thought.
          <br /><br />
          "Roolo, you'd better get those naps in check, or next time is the airlock for you",  the Colonel said, "I've brought you something you may like, but you can have it, if  and only if, you show what you've done so far." and he chuckled.
          <br /><br />
          "Changed all wirings and terminals. Good job. Wielding and 100% checked couplings,  good job. Diagnostics, I have to check, officer. No quick scan allowed in your ship, strange thing, maybe a bad job" replied Roolo while looking into the datapad in his  left hand.
          <br /><br />
          "I see. Full diagnosis only. That's thoughtful and responsible. No shortcuts, Roolo. Good job", and he grinned.
          <br /><br />
          "This is for you", and Sturm extended his arm, holding a small metal box.
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
