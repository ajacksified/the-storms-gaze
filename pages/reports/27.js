/* eslint max-len: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import Intro from '../../components/intro';
import Competitions from '../../components/competitions';
import Footer from '../../components/footer';
import ActivityInfo from '../../components/shipStats';
import Link from '../../components/link';
// import * as styles from '../../components/styles';

import config from '../../config';

import { loadPilotActivitydata, loadShipData } from '../../src/fetchData';

import ComActivity from '../../components/comActivity';

const reportNumber = 27;
const startDate = '2022-08-05';
const endDate = '2022-08-26';
const submissionDate = '2022-08-27';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Squadrons PvP',
  otherActivity: '',
};

const competitions = [{
  id: '3442',
  name: 'TIE Corps in Battle Season Five',
  ends: '2022-12-15',
  units: 'Entire TC',
  notes: 'Fly an TIE, XvT, and XWA custom battle that the TCCOM posts once a month, for your ship and squadron!',
}, {
  id: '3430',
  name: 'Infiltrator Wing Day',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Fly selected missions, deal damage, draw, write fiction, or complete a puzzle in honor of the Infiltrator Wing\'s founding.',
}, {
  id: '3426',
  name: 'New Banner for Firebird',
  ends: '2022-09-14',
  units: 'Entire TC',
  notes: 'Firebird has updated its objective and ships and would like a new banner.',
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
  id: '3398',
  name: 'Squadrons Feats of Strength I',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'There are eight different Squadrons scenarios of increasing difficulty - how far can you go?',
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

      <Intro showUniform={false}>
        <p>
          Silwar Naiilo shifted uncomfortably in his seat. While he still
          spent much of his free time in the simulators, and he had a long
          career flying TIEs of all flavors- most recently his favorite,
          the TIE Defenders of Tempest Squadron- he never felt completely at
          ease in the cockpits of the so-called "Rebel" craft. He did have to
          admit, though, that the A-Wing was nearly as responsive as a TIE
          Interceptor, and did have the benefit of being able to take a few
          extra hits before it would turn into a fireball. It was also a
          little easier to fudge the paperwork involved in borrowing an
          Infiltrator Wing craft that wasn't yet assigned to a pilot, such as
          Firebird's recently acquired A-Wings. He idly wondered when he
          would have an opportunity to acquire the latest RZ-2 models,
          although that seemed pretty unlikely in this corner of the galaxy.
          <br /><br />
          The craft exited hyperspace outside of a small, insignificant
          world named Odessen. It had been mentioned in the archives that
          he was forced to study as a student in the Dark Brotherhood, but,
          despite having some historical significance, the world had become a footnote
          in the history of the galaxy. Silwar pulled up some information on
          his computer: Odessen is temperate, forested and mountainous, with a mild
          climate and a breathable atmosphere. There are no settlements of
          note. "In any other region of the galaxy," Silwar thought to
          himself, "that would be very strange - looks like a nice place for
          a colony on paper." Perhaps it was simply too uninteresting; maybe
          there were no resources that couldn't be extracted more easily
          elsewhere, this deep into Wild Space. The computer didn't have much
          more to say, and Silwar switched it back off. Lazily orbiting the
          planet, he visually scanned the surface, hesitating to reach out with
          the Force.
          <br /><br />
          On the night side of the planet, a tiny blue dot belied the
          existence of a force field on the surface. The A-Wing began to
          descend.
        </p>

        <img
          src="https://tc.emperorshammer.org/images/assets/8157872a.png"
          alt="Stone ruins underneath a stormy blue sky"
          style={{ maxWidth: '100%', margin: 'auto' }}
        />

        <hr />

        <p>
          TIE Corps in Battle: Season Five has begun! Just as we've won every TIE
          Corps in Battle since the ship re-opened, we're going to have another
          victory in our hands by the end of December. If you're unfamiliar
          with this competition, the TCCOM will post one battle each month for TIE,
          XvT, and XWA. All you have to do is fly the battle to earn points
          for your squadron and ship. You can fly with cheats on, because even
          a low score gets you points - although higher scores will earn you
          more points, and even Iron Stars. Everyone with a PC should fly and
          bring home our next victory! The battles this month are due on
          September 16th and are:
        </p>

        <ul>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=1046&type=info">
              TIE-TC 214: The Virus
            </Link>
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=1135&type=info">
              XvT-TC 102 - Wing VIII: Shadow of Time
            </Link>
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=519&type=info">
              XWA-TC 13: Hammer to Anvil Part II
            </Link>
          </li>
        </ul>

        <p>
          <strong>
            Please reach out to your CMDR or me if you need help installing
            the games or custom battles! We can win only if everyone
            participates. Keep an eye on the #chal-tcib-season-5 channel in
            Discord for more info.
          </strong>
        </p>

        <hr />

        <p>
          Congrats to CPT Ryuzokin of Thunder Squadron on his promotion! He
          has also elected to leave the position of Thunder SQXO to LT Tyris
          Sal. Good luck on your new position, LT.
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
