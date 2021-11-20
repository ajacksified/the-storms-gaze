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

const reportNumber = 12;
const startDate = '2021-10-15';
const endDate = '2021-10-23';
const submissionDate = '2021-10-24';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Squadrons PvP, Squadrons PvE, XvT PvE',
  otherActivity: '',
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
          Raise the Flag 2021 continues to press on! The Challenge remains in
          first place, although we can't rest yet - the Hammer continues to
          match our pace. Several bonus competitions have been awarded, with
          an excellent showing from the Challenge. While we didn't place well in the
          Star Conflict competition, we did in most bonus comps afterwards:
          I took first place in the fiction competition, and LCM Xylo Pethtel,
          LCM Sylas Pitt, MAJ Kalve Ryder, and COL Marenta were in the top ten with
          excellent entries. MAJ Kalve Ryder took a top-ten spot in the
          puzzle competition. In the EABF2 competition, I took third, while
          GN Stryker took fifth. In the graphics competition, MAJ Kalve Ryder
          took first place, CPT Graf D'Jinn took third, LCM Xylo Pethtel took
          fifth, and I took seventh. The SWS competition has ended, and we are
          awaiting results. Current bonus competitions include Puzzle #2, an
          XvT co-op competition and an XWA co-op competition- both created by
          LC Genie and tested by a number of folks from different ships and
          squadrons- and a SP competition.
        </p>

        <p><b>Ships:</b></p>
        <ol>
          <li>Challenge: 23,746</li>
          <li>Hammer: 19,741</li>
          <li>Warrior: 10,883</li>
          <li>Aggressor: 245</li>
        </ol>

        <p><b>Squadrons (out of 16):</b></p>
        <ol>
          <li value="1">Tempest: 1,3576</li>
          <li value="4">Firebird: 4,967</li>
          <li value="9">Eagle: 2,255</li>
          <li value="10">Inferno: 1,032</li>
          <li value="14">Thunder: 488</li>
        </ol>

        <p><b>Top Pilots (out of 168, showing top 20):</b></p>
        <ol>
          <li value="1">COL Phalk Sturm: 4,062</li>
          <li value="3">LCM Colo Deste: 2,725</li>
          <li value="5">MAJ Hermann: 2,522</li>
          <li value="8">LCM Jaxx Nassin: 1,740</li>
          <li value="12">MAJ Kalve Ryder: 1,343</li>
          <li value="13">GN Stryker: 1,247</li>
          <li value="16">VA Silwar Naiilo: 958</li>
          <li value="19">GN Anahorn Dempsey: 796</li>
          <li value="20">LCM Xylo Pethtel: 765</li>
        </ol>

        <hr />

        <p>
          Congratulations to LT jospence on his promotion to lieutenant, and
          CMs Cody Lance and Colo Delste on their promotions to
          commander! CPT TI-40026 also has an updated ID line, as he has
          volunteered as a Combat Operations Officer Assistant, a key position
          in the TC that keeps multiplayer games running smoothly by reviewing
          screenshots and organizing combat events.
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
        </p>

        <hr />

        <p>
          COL Marenta's Inferno Signal Scramble, a competition where she posts an unknown acronym
          {'and you guess what it means has finished its 13th round. You can '}
          <Link href="https://forms.gle/9MGqZFoxi9dxkrwY7">
            vote for the 15th round
          </Link>
          {' and '}
          <Link href="https://forms.gle/cqyDpVbjJJdfsdvi6">
            enter the 15th round
          </Link>
          {' until November 7th.'}
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
          <b>VII - HANGAR BAY - ROOLO - PART IV</b>
          <br /><br />
          The Clone Wars had been a distant noise away in the galaxy, but somehow General  Grievous and his henchmen had found another world to enslave. Gentes was a primitive planet, defenseless in comparison to the might of the Separatists, and what ensued  was a massacre.
          <br /><br />
          When the droids landed, they marched unopposed across the surface. The Ufflor  constables were no match. Settlement after settlement fell with almost no losses to  the CIS huge army. Within months, all populated areas in the open wasteland and the  center land mass of the planet had been subdued or destroyed. Thousands of  Ughnaughts were executed or captured and sent offworld to Grievous' command, to the  mines in Mustafar, foundries in Geonosis, and all across the galaxy.
          <br /><br />
          Roolo lost all his friends while trying to evade the initial droid attack on the  Swampways. He barely escaped after losing most of his hand in an explosion, and  although severely wounded, managed to make his way back to the remote location of  the family farm. His father, Rolgast, in the meantime, had been harbouring refugees  from all around, both his tribe kinsmen and others. However, the farm could feed  only a few of those refugees, now pouring daily into the dozens. When Rolgast saw  his first-born crossing the swamps back home, his joy was so immense, that all the  grief and resentment he had for his son, was immediately erased. He was a proud  Insorat tribesman, but alone and old, clearly no match to the scavengers flocking to his farm.
          <br /><br />
          One night, after a few weeks Roolo and his family had rejoined, they eventually had  to send most of the refugees away. Some, wearily thanked them, collected their few  possessions and left, following the Ughnaught way, but a mixed group of scavengers,  violently refused. One of them, a human, grabbed Ygloste by the neck and threatened  to kill her if they were not to be allowed forever in the farm. The human grew  bolder by seeing the Ughnaughts in shock, and demanded that his group was now in  custody of the farm, and all of the dwellers within would become their ¨indentured  servants¨, as it was a fair price for the protection his group would give to them  and the farm.
          <br /><br />
          Rolgast fell to his knees imploring this ruthless man not to kill his daughter. That all possessions he had were his now, but to spare the lives of those inside the  farm. Roolo, who had been silently watching the scene from one of the sewage tunnels he was inspecting, crawled behind the man and decapitated him instantly with a  proton axe. The rest of the group, heavily drunken, barely managed to show any  reaction. Roolo charged on the group growling and screaming. The awful shrieks  chilled the spine of those standing close to him, and he killed two more with his  tusks and the axe. The rest of the group scattered and run anywhere they could.
          <br /><br />
          Everybody in the farm, cheered and greeted Roolo, the prodigal son, the saviour. But Roolo knew better.
          <br /><br />
          Scavengers were going to claim this isolated jewel, and they will come back. When,  was the question, Roolo thought.
          <br /><br />
          But, what came later, after a two weeks of total calm, was much worse. He was in the swamps with his sister Ygloste, harvesting eggs, when huge explosions were heard in  the direction of the farm. A few flying craft crossed the skies, and then more  explosions. They ran frantically towards their home, to see flames, buildings  destroyed and dozens of droids pouring from all sides in massive armored vehicles,  so huge, like Roolo had never seen before.
          <br /><br />
          Scattered around, on the fields, several corpses could be seen. Roolo knew that he  had not to expose himself or his sister if they wanted to avoid a certain death.  They hid for days in the draining tunnels leading into the swamps. Finally, he  mustered some courage and told Ygloste to wait for him for a full day, and if he  didn't come back, to walk towards the sea, following the swamps, until reaching the  old temples by the shore.
          <br /><br />
          Although he had a maimed hand, Roolo could shoot very effectively with his other  hand, and fortunately he had brought his old CD34 Blaster Rifle, as he always did  whenever venturing in the swamps. He approached the farm from the northern side,  crawling in the mud and entering the sewage system of the farm. He emerged inside  one of the stables, where the Blurrgs were normally held. Empty. Nothing. Only loose forage here and there, but no sign of the dozen blurrgs his family had. Upon  approaching the doors, he scoped the area with his rifle's optics, but nothing  again. No droids, no corpses, no vehicles. The farm was barren. He ran across the  ruined buildings that flanked the main house. The barn, the stores, windtrap and  moisture collectors were completely destroyed. He stopped to collect his thoughts  and very much needed breath. The tension was unbearable. Knowing he might be  captured any time soon and leaving his sister, helpless, at the mercy of slavers,  scavengers or the droids, was a thought that forced him to maintain his awareness at the expense of his fears.
          <br /><br />
          Roolo finally reached his old house. Smouldering rubble, all there was left. In the  kitchen, amidst the debris, he could find some ionized meals and a drum full of  water. He filled his canteens and put everything that seemed edible inside his  backpack. He carefully made the walk back to the sewers entrance in the stables. A  few hours later he rejoined his sister. She was waiting in their makeshift hutt,
          <br /><br />
          under a thick canopy of swamp trees, gnarly branches and thick vines. They hugged  and rubbed noses and tusks. She was so happy to see him again. They both laughed.  After some time, they lit the first campfire after days of hiding, and finally had a proper meal from the ionized packages. Roolo fell in a deep slumber while his sister kept watch.
          <br /><br />
          "PIG FACE! GET UP YOU SWINE HEADED USELESS OLD BASTARD!!!", someone shouted and  Roolo startled in fear, hitting his head against a metallic frame inside the Spectre gunship.
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
