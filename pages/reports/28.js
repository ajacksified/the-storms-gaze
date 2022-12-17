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

const reportNumber = 28;
const startDate = '2022-08-27';
const endDate = '2022-11-11';
const submissionDate = '2022-11-12';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Squadrons PvP, TIE, XWA, EABF2 PvP, SC PvE',
  otherActivity: 'Passed FAC course (100%), lots of fiction and art for RtF 2022, running BG3 competitions, promoted from COM to BGCOM',
};

const competitions = [{
  id: '3458',
  name: 'X-Wing Alliance Fast Flights',
  ends: '2022-12-31',
  units: 'Entire TC',
  notes: 'Take part in the XWA Proving Grounds - vanilla, TFTC, or XWAU.',
}, {
  id: '3477',
  name: 'All I Want For Life Day (Is My Platinum COMPOST Membership Card)',
  ends: '2022-11-30',
  units: 'Entire TC',
  notes: 'Fly Lord of the TIEs and reach the highest score!',
}, {
  id: '3452',
  name: 'The TIE Corps Needs YOU!',
  ends: '2022-11-30',
  units: 'Entire TC',
  notes: 'Design TC propaganda posters.',
}, {
  id: '3470',
  name: 'Fleetwide Maintenance',
  ends: '2022-12-02',
  units: 'Entire TC',
  notes: 'Achieve victories in Among Us to throw spies out of the airlock.',
}, {
  id: '3436',
  name: 'Design the Ship and Squadron Mascots',
  ends: '2022-11-30',
  units: 'Entire TC',
  notes: 'Create a graphic for a squadron\'s mascot.',
}, {
  id: '3444',
  name: 'Conundrums in Hyperspace: A Logic Puzzle Series',
  ends: '2022-12-31',
  units: 'Entire TC',
  notes: 'Solve puzzles presented by CM KEBLAOMEGA',
}, {
  id: '3442',
  name: 'TIE Corps in Battle Season Five',
  ends: '2022-12-15',
  units: 'Entire TC',
  notes: 'Fly an TIE, XvT, and XWA custom battle that the TCCOM posts once a month, for your ship and squadron!',
}, {
  id: '3440',
  name: 'The Challenge with Words',
  ends: '2022-12-31',
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

      <Intro showUniform={true}>
        {/*
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

        <p>
          TODO: fiction.
        </p>

        <img
          src="https://tc.emperorshammer.org/images/assets/31f4291c.png"
          alt="Stone ruins beneath a stormy blue sky"
          style={{ maxWidth: '100%', margin: 'auto' }}
        />

        <hr />

        */}
        <p>
          Raise the Flag 2022 is over! Congratulations to the ISDII Hammer,
          Lambda Squadron, and (newly promoted) General Genie on your victory!
          Thunder Squadron was third place across the fleet and first in the
          Battlegroup, led by top Battlegroup III pilot MAJ LegionX. CM Sylas
          Pitt came in second, followed by myself and CPT Jaxx Nassin. We also
          had some amazing entries across art and fiction!

          <br /><br />

          Overall the number of pilots who participated has dropped since last
          year- truly the only metric I care about- and I'm following up with
          the Battlegroup's leadership group to understand what we can to do
          encourage our pilots to take part.
        </p>

        <hr />

        <p>
          We've begun having discussions about a nickname, motto, patch, and
          colors for Battlegroup III now that the BGCOM position has been
          reinstated. Our battlegroup contains two primary capital ships: the
          ISDII Challenge and the MC-40 Roost. Some suggestions have been
          posted to #bg3-mottos, so weigh in your opinions! There are also two
          ongoing competitions for a banner and patch for the Battlegroup.
        </p>

        <hr />

        <p>
          One of the most difficult singleplayer competitions of the year has
          begun: All I Want For Life Day (Is My Platinum COMPOST Membership
          Card). Fly TIE-TC 244, Lord of the TIEs, and reach for the highest
          score you can get for an IS-GW and the title "Lord of the TIEs 2022"!
          We have a big list of competitions this month, so make sure to check
          out the competitions list for anything that interests you.
        </p>

        <hr />

        <p>
          This round of TCiB ends on November 15th, giving us just a few days left.
          The missions to complete are:
        </p>

        <ul>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=65&type=info">
              TIE-TC 67: The Siege of Maltar
            </Link>
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=1104&type=info">
              XvT-TC 94: Envoy of Peace
            </Link>
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=657&type=info">
                XWA-TC 26: Experimental Tie Evaluation
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
          Congratulations on the many promotions since my last report, listed
          below!
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
