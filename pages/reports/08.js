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
const startDate = '2021-09-05';
const endDate = '2021-09-13';
const submissionDate = '2021-09-14';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Battlefront 2 PvE',
};

const competitions = [{
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
          I hope everyone has had a chance to catch a breath after Imperial
          Storm 3, because Raise the Flag looms on the horizon. Beginning
          October 1st, it is the most grueling - and most important -
          competition of the year. The ISD-II Challenge is at full strength
          this year, and I have no doubt that we will end victorious, as we
          have in Imperial Storm, TIE Corps in Battles, and numerous other
          competitions over the last year since its recommissioning. More
          details will be shared as rules are finalized. For now, keep
          yourself loose and ready for flying, writing, and drawing until you
          drop.
        </p>

        <p>
          We've seen a number of promotions over the last couple of weeks.
          Congratulations are due to LC EvilGrin, MAJ Kalve Ryder, CPT
          Graf D'Jinn, LT Drummer The Gunner Nate, and LT Hawksniper!
        </p>

        <hr />

        <p>
          LT Scarlette has announced a new competition, "Starship Designers".
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

        <p>
          Last round's winners, with a haiku about rebel ships:
          <br /><br />
          <strong>LC EvilGrin</strong>
          <br />
          Pretenders you are,
          <br />
          The Empire is all you need,
          <br />
          Die, you Rebel Scum.
          <br />
          <br />

          <strong>CPT Graf D'Jinn</strong>
          <br />
          rusty, old xwing
          <br />
          gold and blue, guide my shots true
          <br />
          please give me a TIE
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
          {' until September 26th. Winners from the last round are:'}
          <br /><br />
          JYR - J-wings? like Yoinks, Raggy by LCM Xylo Pethtel
          <br />
          OBWO -  Old Ben Was Old by LT Ryuzokin
          <br />
          PAUGE - Poor A-Wings Unavoidably Get Extinct by COL Phalk Sturm
          <br />
        </p>

        <hr />

        <p>
          ISDII Challenge: On the Offensive has ended! Pilots from the ISD-II
          {'Challenge were tasked with flying '}
          <Link href="https://tc.emperorshammer.org/download.php?id=1468&type=info">
            XWA-Free #161
          </Link>
          , a brand-new mission that I built featuring the squadrons and pilots
          of the Challenge. COL Phalk Sturm took first place, LCM Colo Deste
          second, and COL NiksaVel third. All have been awarded Iron Stars.
        </p>

        <hr />

        <p>
          <strong>Real Heroes of the Challenge: Doctor Canto Val-Har</strong>
          <br /><br />
          A newly commissiond Lieutenant and Medical Officer, Val-Har joined the
          ISD Challenge directly from completion of her medical education and
          military training. A young Pantoran female, with characteristic blue
          skin, yellow eyes and purple hair, the striking gold markings under
          her eyes signify her family's genealogy. Born on Aurora Prime to a
          pro-Imperial Pantoran family in exile from their homeworld, she has
          little connection with her native culture and has embraced the Empire
          fully.
          <br /><br />
          Short in stature but athletic, confident but quiet, she is adjusting
          quickly to her new life onboard an active ISD. Having joined the
          military to escape the cloying attentions and expectations of her
          family she is constantly looking to challenge herself and experience
          new things. A keen observer, she is working to integrate herself into
          the ISD Challenge's hierarchy while conscious that the crew is
          predominantly human and by defintion she stands out.
          <br /><br />
          Eager to prove herself as capable and trusted she will always
          volunteer when medical support is needed and has shown a particular
          affinity for cybernetics, an area in which she is now focusing her
          work. Her ability to enhance the interaction and sensitivity of
          response of enhancements has allowed a number of veterans to keep
          flying, despite significant injuries and has earned her a loyal
          following amongst the pilots of Wing X.
          <br /><br />
          <em>Written by FA Jarek La'an</em>
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
