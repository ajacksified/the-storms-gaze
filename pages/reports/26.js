/* eslint max-len: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import Intro from '../../components/intro';
import Competitions from '../../components/competitions';
import Footer from '../../components/footer';
import ActivityInfo from '../../components/shipStats';
// import Link from '../../components/link';
// import * as styles from '../../components/styles';

import config from '../../config';

import { loadPilotActivitydata, loadShipData } from '../../src/fetchData';

import ComActivity from '../../components/comActivity';

const reportNumber = 26;
const startDate = '2022-07-08';
const endDate = '2022-08-24';
const submissionDate = '2022-08-05';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: '',
  otherActivity: 'London Meetup',
};

// TODO update - new banner / patch comps and stuff

const competitions = [{
  id: '3430',
  name: 'Infiltrator Wing Day',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Fly selected missions, deal damage, draw, write fiction, or complete a puzzle in honor of the Infiltrator Wing\'s founding.',
}, {
  id: '3429',
  name: 'Gamma Banner',
  ends: '2022-08-13',
  units: 'Entire TC',
  notes: 'Gamma Squadron is the newest addition to the fleet and needs a new banner.',
}, {
  id: '3428',
  name: 'Gamma Patch',
  ends: '2022-08-13',
  units: 'Entire TC',
  notes: 'Gamma Squadron is the newest addition to the fleet and needs a new patch.',
}, {
  id: '3426',
  name: 'New Banner for Firebird',
  ends: '2022-09-14',
  units: 'Entire TC',
  notes: 'Firebird has updated its objective and ships and would like a new banner.',
}, {
  id: '3425',
  name: 'New Nickname for Firebird',
  ends: '2022-08-19',
  units: 'ISDII Challenge',
  notes: 'With its new objective, Firebird would like some suggestions for a new nickname.',
}, {
  id: '3424',
  name: 'Beta Squadron Patch Competition',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Beta Squadron has updated its ships and objective and needs an updated patch.',
}, {
  id: '3422',
  name: 'Rho Squadron Banner',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Rho Squadron has updated its ships and needs an updated patch.',
}, {
  id: '3418',
  name: 'TIE Fighter Mineracing!',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Pilots of the Emperor\'s Hammer are always seeking to improve their skills and prove their worth in battle. To demonstrate marksmanship and flying prowess, pilots will fly an unshielded TIE Interceptor on a short exercise to eliminate mines and containers in the fastest time possible.',
}, {
  id: '3417',
  name: 'Deal Me In!',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'VA Marenta is hosting a Pazaak tournamnent. Send in your best scores, up to fifteen, from https://pazaak.parsely.io/game.',
}, {
  id: '3416',
  name: 'Emperor\'s Hammer at War!',
  ends: '2022-09-30',
  units: 'Entire TC',
  notes: 'You are challenged to partner up and complete the fastest PvE match of Empire at War.',
}, {
  id: '3412',
  name: 'Raven Squadron Patch Competition',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Raven Squadron needs a patch! Be creative, go nuts, but remember it has to fit on the sleeve of a uniform!',
}, {
  id: '3408',
  name: 'The Great Bounty Hunting Race',
  ends: '2022-08-15',
  units: 'Entire TC',
  notes: 'You are a bounty hunter - skilled in piloting, blasters, and lightsaber combat - whatever is needed to get the job done. For one month, you will be racing with other bounty hunters to see who can collect the most bounties.',
}, {
  id: '3398',
  name: 'Squadrons Feats of Strength I',
  ends: '2022-08-31',
  units: 'Entire TC',
  noteS: 'There are eight different Squadrons scenarios of increasing difficulty - how far can you go?',
}, {
  id: '3389',
  name: 'The Challenge with Words',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Finish the word search as fast as possible.',
}, {
  id: '3275',
  name: 'MP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
}, {
  id: '3276',
  name: 'COOP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
}, {
  id: '3240',
  name: 'SP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
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

      <Intro>
        <p>
          <em>
            Vice Admiral Silwar Naiilo wiped a stream of sweat from his brow with
            a grease-stained rag. He didn't have much space to work from within
            the sweltering, tight confines of the sub-deck crawlspace. The snoozing
            pair of Ugnaught mechanics that he had to carefully crawl around
            didn't improve the situation, as small as they were. With a large
            durasteel wrench he had pilfered from their toolbelts, he carefully
            tightened one valve and opened another. A nearby steel pipe creaked
            as its temperature suddenly changed from cold to hot, while a
            smaller, thinner copper pipe- welded haphaardly to the side of a
            gigantic metal tank, shuddered. The Fleet Commander was coming for
            an inspection, and the Challenge's engine emissions must be
            completely accounted for; as per Imperial regulations, all ships
            must operate at maximum efficiency. Secretly, Silwar knew, the Fleet
            Commander- an ex-Challenge commodore- knew exactly where any extra
            engine coolant was going. Officially, there was no Chalquila on the
            Challenge.
          </em>
        </p>

        <hr />

        <p>
          While it feels like a galactic standard year since it ended, it is
          my first report since Squadron ReMobilization finished. All of our
          squadrons participated, focusing on their strengths, and with that
          some squadrons took the opportunity to make updates to their squadrons.
          Tempest Squadron flights 2 and 3 are flying
          the brand-new Tempest-class TIE/ca "Punisher", a modified version of
          the standard TIE/ca which includes a hypderdrive and extra armnament,
          not to mention its blue and gold coloration. Firebird Squadron has
          elected to change its goal from infilatration to reconnaissance, and
          flights 2 and 3 are now flying A-Wings. This complements the new
          Heavy Support role supplied by Raven Squadron's Shadow-Class Y-Wings.
        </p>

        <img
          src="https://tc.emperorshammer.org/images/craft/249.png"
          style={{ display: 'inline-block', width: '33%' }}
        />

        <img
          src="https://tc.emperorshammer.org/images/craft/42.png"
          style={{ display: 'inline-block', width: '33%' }}
        />

        <img
          src="https://tc.emperorshammer.org/images/craft/47.png"
          style={{ display: 'inline-block', width: '33%' }}
        />

        <p>
          A new survey went out for all TIE Corps members and received 52
          responses, meaning nearly a third of active pilots responded. This survey
          asked questions about competitions and combat events, with a large
          section focused specifically on ReMob. The COMs and TCCS plan to
          discuss results and publish a formal report about what we found.
        </p>

        <hr />

        <p>
          There are a lot of new competitions this month. There are many requests for
          new squadron patches and banners, Infiltrator Wing day, and several
          combat and puzzle competitions such as The Great Bounty Hunting Race,
          Squadrons Feats of Strength I, Deal Me In!, Emperor's Hammer at War,
          and more. Make sure to look at the updated competitions list below or
          the competitions page on the website for more details. Many of these
          competitions end at the end of August, so get your pencils, drawing
          tablets, and joysticks ready!
        </p>

        <hr />

        <p>
          Congratulations to CPT Cody Lance and LT Saeko Shan of
          Inferno, and LT Tyris Sal, LT Danvil Hawks, and LT Grendel of Thunder,
          on your promotions. CM LQC-75-3 has also been promoted upon his
          appointment to Inferno Comander.
        </p>

        <p>
          We've had lots of transfers with the opening of Raven Squadron.
          GN Stryker has moved from Firebird CMDR to Raven
          CMDR to open the squadron, with CPT Taurus taking up the mantle as
          Firebird CMDR. With that, COL Triji Boliv now has the position of
          Firebird XO and flight leader of Flight 2. Raven Squadron already has
          nine of twelve positions filled, with veteran COL Astin joining the
          brand new squadron as well as new members LT Dathka Graush,
          LT Von Barricello, SL Vil Dance, SL ThunderSpawn, and SL Chase
          tomato. LCM Atashi Rain has transferred from Firebird to become
          Raven's XO, and CPT Richlet has transferred from Tempest to help
          round out the new squadron. The ISDII Challenge now sits at 69 of a
          possible 72 members. Nice!
          <br /><br />
          CM LQC-75-3 has been chosen to lead Inferno Squadron as its new
          commander as CPT Xylo Pethtel steps down to spend time in the
          Imperial Univeristy. We with CPT Xylo well, and have great confidence
          in CM LQC-75-3's abilities to lead the squadron.
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
