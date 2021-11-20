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

const reportNumber = 11;
const startDate = '2021-10-01';
const endDate = '2021-10-14';
const submissionDate = '2021-10-15';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Squadrons PvP, Squadrons PvE, Star Conflict PvP',
  otherActivity: 'Fiction for RtF, Art for RtF',
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
  units: 'ISDII Challenge',
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
  units: 'ISDII Challenge',
  notes: 'A 3v3 fleet battles league for pilots of the Challenge',
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
          We are halfway through Raise the Flag 2021, and the Challenge and her
          pilots are performing exactly as expected. The current standings are:
        </p>

        <p><b>Ships:</b></p>
        <ol>
          <li>Challenge: 14,992</li>
          <li>Hammer: 10,405</li>
          <li>Warrior: 7,580</li>
          <li>Aggressor: 82</li>
        </ol>

        <p><b>Squadrons (out of 16):</b></p>
        <ol>
          <li value="1">Tempest: 8,180</li>
          <li value="3">Firebird: 3,452</li>
          <li value="9">Eagle: 1,148</li>
          <li value="10">Inferno: 833</li>
          <li value="14">Thunder: 360</li>
        </ol>

        <p><b>Top Pilots (out of 168, showing top 20):</b></p>
        <ol>
          <li value="1">COL Phalk Sturm: 2,465</li>
          <li value="2">LCM Colo Deste: 2,149</li>
          <li value="6">MAJ Hermann: 1,270</li>
          <li value="8">LCM Jaxx Nassin: 1,136</li>
          <li value="13">VA Silwar Naiilo: 719</li>
          <li value="15">MAJ Kalve Ryder: 627</li>
          <li value="16">GN Stryker: 686</li>
          <li value="17">LCM Xylo Pethtel: 540</li>
          <li value="18">CPT Honsou: 537</li>
        </ol>

        <hr />

        <p>
          Congratulations on LCM SirCaleb and LT SerenityStar13 on their
          promotions! Also, welcome to LT Badkid312 who joins Firebird after a
          few monts in Kappa, and welcome back to CM Turel who rejoins Firebird
          after some time in the reserves.
        </p>

        <hr />

        <p>
          "Starship Designers" ends on October 18.
          This competition is about designing your very own starship, which can
          be as detailed or simple as you wish. Designs must include the
          exterior (blueprint style or actual artwork) and interior of any
          rooms of your choice. The design can be of any kind of ship- fighter,
          cruiser, etc.
          <br /><br />
          Submissions will be judged on overall composition, art skill, and
          design. Submissions should be sent to Plif via email.
        </p>

        <hr />

        <p>
          LCM Xylo Pathtel is running the competition "Poetic Proficiency". He
          posts a subject and format, and you write a poem. Round four
          {' has closed, and '}
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfdzgmepj1Yt1BnoUpoNF_TkLFlQgaYpC3SwwR9ZirexHq-BQ/viewform?usp=sf_link">
            round five entries can be submitted.
          </Link>
          {' Round 5 will challenge you to use a Limerick poem in a funny '}
          story about one of your fellow squadronmates. It can be absolutely
          anything about them, but it must be a pilot from your squadron, who
          I'm hoping you'll get to know better. It should go without saying
          but please refrain from overly negative entries, this prompt is
          meant to be funny and wholesome, not a chance to put down your
          shipmates, so have fun, talk about it, and share a laugh!
          <br /><br />
          COL Marenta submitted the winning entry for round four:
          <br /><br />
          The sweat rolls off me,
          <br />
          As I lean into the sim,
          <br />
          Pressing buttons fast,
          <br />
          Hoping I win these matches,
          <br />
          For Imperial Storm three.
        </p>

        <hr />

        <p>
          COL Marenta's Inferno Signal Scramble, a competition where she posts an unknown acronym
          {'and you guess what it means has finished its 13th round. You can '}
          <Link href="https://forms.gle/kmL8xD2wdYQfrLG19">
            vote for the 14th round
          </Link>
          {' and '}
          <Link href="https://forms.gle/TmTn7WEuB3AUzcFM7">
            enter the 15th round
          </Link>
          {' until October 24th.'}
        </p>

        <hr />

        <p>
          Our next Real Heroes of the Challenge entry will be broken into
          multiple parts. In Phalk's first-place entry, he describes Roolo
          {'the mechanic. This is part three; to see the first, visit the '}
          <Link href="https://tc.emperorshammer.org/showreport.php?nr=3958">
            report #9.
          </Link>
        </p>

        <p>
          <b>VII - HANGAR BAY - ROOLO - PART II</b>
          <br /><br />
          Red wire or blue wire? The quantum field tester showed another loss of quarks in the end of the blue coupling. The wielding had been clearly done in a rush and no one  had tested a repeated overload as a precaution. Another thing to do, another thing  to fix, bad job, bad job. After rerouting power several times, none of the couplings had melted, and he felt satisfied. The list on his datapad showed 72 couplings had been upgraded and 3 full cable branches of quantic fibre had been replaced.  Additionally, standard chromium input terminals in three of the cockpit panels were  removed and enhanced with orichalcum-alloy to sustain higher temperatures and  voltages. With everything connected, he accessed the diagnose port. Spectre-class  Advanced Missile Boat? Check. Serial number 3106853, frameware version 2.0, Terminal Name: Tempest 3-1. All was in order. A self-dignose check. No errors. He was about  to check the systems that had been compromised, when a doubt aroused. A stern gaze  crossed his mind. It was the inquisitive eyes of the officer, that had stuck in the  back of his brain. A custom-made message, not from the original firmware was showing on the datapad. "Property of P.S.". Everything halted. No options were available in  the previous long menu of systems and subsystems. The only working function was  "Perform FULL SCAN - ALL SYSTEMS AND SUBSYSTEMS".
          <br /><br />
          "Hmpf, it would take hours. And who had messed with the software? Who was P.S.? Bad  job, he thought, and reluctantly initiated the procedure.
          <br /><br />
          Roolo stepped away from the Spectre gunship. The shape was menacing and reminded him of a Velker with broken wings. He had seen those fiercesome beasts while living in  the lower levels of Bespin. Their gigantic wings flapping in the clouds and the  immediate danger which compelled to find shelter inside the dank, dark tunnels in  the sublevels of the massive floating city. Reminiscing the mushrooms he daily ate  with his other slave inmates. The genteslug-egg casseroles! What a delight!. The  nights of sorrow and grief but also of the relief and nostalgia when he and his kin  rememebered the days in freedom on Gentes, Belsuna, before the enslavers came.  Enslavers. And Ygloste. A few tears dropped from his eyes and rolled down the deep  scars on his nose and cheek. Ygloste. If it wasn't for her, he would not be alive.
          <br /><br />
          Ygloste was Roolo's sister. Never such joy and energy impersonated an Uglett as  Ygloste. On Gentes, Ygloste, Roolo and their parents lived as a normal family in the settlments around the swamps. His tribe was one of the lesser families of the  Insorat tribe. Their tribal profession was farming and the family had been running  that establishment for countless generations. But Roolo, was not an ordinary  Ughnaught.
          <br /><br />
          He was no skilled craftman of any kind. Much less of his blood profession. Since a  young age, however, he had a strong interest for weapons and longed to be a strong  warrior. One of those legendary Sith warlocks that where told in whispered stories  by the bonfires. Roolo was never around when the crops came, or when someone had to
          <br /><br />
          harvest the eggs of genteslugs in the swamps.
          <br /><br />
          Growing up, he connected with the wrong people. Many young Ughnaughts, who were also rebellious to the stern structure of their society, just started to group around  isolated campfires in the swamps, at night, to tell stories, brag about their  improvised weapons, and yes, fight for the thrill of being the strongest in the  gang. Roolo was no exception. In fact, he was good at it, and quickly he found  himself expelled from his family's farm and scorned from his father and the tribe.  It mattered not to him. Only seeing his sister, from time to time, was a burden, but very much a price he gladly paid for having endless nights of brawls, inebriation  and the thrill of escaping the occasional tribal watchmen, when stealing their  cattle, jewelry or anything they could lay hands on.
          <br /><br />
          In fact, at the age of 20, Roolo rejected his blood profession. He claimed in front  of a full-gathered tribe that he would kill anyone who wanted to test his skill, and no one dared to cross tusks with him. He walked away laughing and it brought his  relation with his family to a clear end.
          <br /><br />
          He settled however, close to the swamps. He was an avid learner, and races became  another of his passions. His gang, -he found himself leading, after all-, assumed a  given nickname. The Warthogs. Along with them and some skilled pilots, the gang was  now in the illegal swamp racing business. An elder Ughnaught, a former slave that  escaped Lothal, was his mentor and friend now. This older Ughnaught never spoke his  name to Roolo, even if they spent day after day, night after night, building up  pod-racers, for years, until he finally passed away, with only a "Hmpf" for an  answer.
          <br /><br />
          His life was always full of adrenaline. The races, the money, the duels.  One day, the planet was invaded.
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
