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

const reportNumber = 14;
const startDate = '2021-11-11';
const endDate = '2021-11-19';
const submissionDate = '2021-11-20';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Squadrons PvP',
  otherActivity: '',
};

const competitions = [{
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
          Ace of the TIE Corps ends in a little over the month - a competition
          which awards a coveted Iron Star with Platinum Wings as well as a
          title to the top pilot. Second through sixth place also stands to
          earn awards, so check your status on the TC killboards! Our own GN
          Anahorn Dempsey, MAJ Hermann, and COL Phalk Sturm are in the top
          three for singleplayer for the year, while CM Morgoth is in the top
          six for PvP.
        </p>

        <p>
          I will be unavailable while traveling on Nov 30 and Dec 1, and again
          on December 11th, and with limitied communication in-between. I
          am not so unavailable as to appoint an acting COM.
        </p>

        <hr />

        <p>
          Welcome SL Aqua Valkyrie, who joins Eagle squadron. LCM Ryuzokin and
          CPT Dynamus both received promotions this week, so feel free to put
          your drinks on their tab.
        </p>

        <hr />

        <p>
          Our next Real Heroes of the Challenge entry has been broken into
          multiple parts. In Phalk's first-place entry, he describes Roolo
          {'the mechanic. This is the final part; to see the first, visit the '}
          <Link href="https://tc.emperorshammer.org/showreport.php?nr=3958">
            report #9.
          </Link>
        </p>

        <p>
          <b>VII - HANGAR BAY - ROOLO - PART IV</b>
          <br /><br />
          The old Ughnaught bowed, and remained silent. Collected the box with both hands and  bowed again.  
          <br /><br />
          "Open it, Roolo. Nothing so special. A treat from your home, I guess.", Sturm was  smiling with his usual smug and both fists on his hips.  
          <br /><br />
          Roolo opened the box. Inside, a marvel!, a jewel!, something he had not seen in  years. Several dried moldflower mushrooms. He growled joyfully. "How is you have  this, officer? Greatest gratitude. Good job, good job", he was still amazed at that  small treasure contained in the box. 
          <br /><br />
          "I grow them at home, in Akritt'ar, Roolo. My wife sent them to me. She'd be happy  for you to have them, I am sure. No genteslugs, unfortunately. At best one could  find mynocks, here in space." Sturm was happy to see the Ughnaught clenching with  both hands his rare present. A second later, the box was nowhere in sight. "You were a slave, Roolo. Where? Lothal? Geonosis?, I am curious", said Sturm as he grabbed  the datapad and started to inspect the subsystems in his fighter. 
          <br /><br />
          "Geonosis, then Bespin. Followed imperial officers after manumission. Worked Outer  Rim. Bad jobs. Signed for Opan. Now the Challenge. Good job now.", the Ughnaught was staring at something inside the cockpit.
          <br /><br />
          "Quite a journey. Rough ride, I guess, Roolo", Sturm was satisfied at the readings  on the datapad screen. "Everything seems in order, now. Do we fire her up? What do  you think, Roolo?", he was eager to test his fighter as soon as possible.  
          <br /><br />
          "Final test, I do, hmpf. Then you officer go fly it. Not before. Good job", Roolo  was cleaning his hands on his now clearly smeared, red apron", the Ughnaught was  holding the datapad in his hand and looking at the screen. 
          <br /><br />
          "I'll get ready and come back, Roolo" replied Sturm, leaving the hangar for the  second time in the day.  
          <br /><br />
          Roolo watched the officer go away, and after he was gone for sure, finally started  to bolt down the panels and rearrange all the exposed wirings. An hour later, he  stood up in the cockpit. His small stature allowed him to be fully erect and barely  reach the edge of the fuselage. He was satisfied. The cockpit was immaculate. Good  job. He descended from the gunship and operated the datapad after he inspected all  sides of the fighter. A loud boom and a pleasant humming noise was very much audible from the glowing engines of the Spectre Advanced Missile Boat gunship Tempest  3106853. A red demon head was painted on the nose of the craft, defiant. 
          <br /><br />
          The systems responded flawlessly to all commands Roolo was prompting from the  datapad in his hands. Again, he felt satisfaction inside. This was his trade. He was able to find the good job, everywhere, anywhere. Not like life before that. He could not save his sister, or his family. Bad jobs were a burden in his heart. He could  understand machines. Machines were his friends. Good jobs. They obeyed his commands  and his was able to take care of them. But his sister. His family. All dead. Bad  job. Useless Roolo, he thought. 
          <br /><br />
          Roolo recognized Sturm walking down the hangar, towards him. His blue helmet trimmed in gold, and his lightsaber, always hanging by his thigh. He was wearing a flight  suit in full gear and was still far away, but even an Ughnaught could feel the  presence of this officer. A Sith?. He had felt similar distresful emotions when  inside the old abandoned temples of Gentes. Yet, this human seemed different.  Anguish, torment, pain, but also understanding. Roolo was drowning in his deep  thoughts, when the officer addressed him. 
          <br /><br />
          "Roolo, don't be nervous. At ease. I am sure you did a good job. Look me in the  eyes, now." the officer was speaking with a clear voice, and his last word fell like a hammer deep in his brain. He felt the pain in the back of his neck. Something was  pushing him to look at the man in the eye. He resisted. The pain intensified and he  looked. He saw two dark brown eyes and then something like he had never seen before. He was terrorized. He saw total blackness. A numbing pain and the void he had  experienced before. When they killed Ygloste. Why? Who was this man? The anguish of  looking elsewhere, was like an oppressing force on his chest. He could not stop  looking into that bottomless pit that were the man's eyes in front of him. Suddenly, everything changed. He was able to look at his face. How much time had passed? Roolo was startled. Unable to speak. He just stood with his arms by his sides, helpless. 
          <br /><br />
          Sturm spoke again, but his voice seemed different. He looked Roolo straight in the 
          <br /><br />
          eyes again, and said: "I have seen inside of you, ughnaught. I saw your sister,  butchered. The people you've killed and those who died by your side. The cold nights in the tunnels on Bespin. The flaming lashes on your face. Geonosis. The punishment. Torture. Pain and sorrow. They walk by your side. I trust you.", but oddly enough  the human seemed to keep his mouth closed. Lips were not moving. "Who is this  human?", Roolo was drowning in awe and doubt.  
          <br /><br />
          "I am Sturm. Obey and we will be friends.", again he could not see if the officer  had spoke, glimpsing only a smile as he wore his helmet, closed the brackets and  secured the tubing attached to the life support unit, all in a graceful motion, just a moment before entering the fighter's cockpit. 
          <br /><br />
          The engines started with the familiar burst, and a sweet humming filled the work  station.  
          <br /><br />
          Seconds later the fighter was hovering and dove straight into the open space below  the ISD-II Challenge. 
          <br /><br />
          Roolo thought of Ygloste, and the dried moldflower mushrooms. 
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
