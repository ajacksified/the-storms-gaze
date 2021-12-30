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

const reportNumber = 15;
const startDate = '2021-11-20';
const endDate = '2021-12-05';
const submissionDate = '2021-12-06';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Squadrons PvP',
  otherActivity: '',
};

const competitions = [{
  id: '3348',
  name: 'There and Back Again: A COMPOST Tale',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3343',
  name: 'Holos for the Holidays',
  ends: '2021-12-20',
  units: 'ISDII Challenge',
}, {
  id: '3342',
  name: 'Callsigns for the Corps',
  ends: '2021-12-20',
  units: 'Entire TC',
}, {
  id: '3341',
  name: 'Armchair Admirals',
  ends: '2022-01-17',
  units: 'Entire TC',
}, {
  id: '3340',
  name: 'Legion\'s Challenging Time Trials',
  ends: '2021-12-31',
  units: 'ISDII Challenge',
}, {
  id: '3339',
  name: 'Firebird Squadron Banner Competition #2',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3324',
  name: 'Crossword Challenge',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3310',
  name: 'Trivia Grand Tour Season Seven',
  ends: '2021-12-27',
  units: 'Entire TC',
}, {
  id: '3271',
  name: 'Inferno Signal Scramble',
  ends: '2022-01-01',
  units: 'ISDII Challenge',
}, {
  id: '3274',
  name: 'The Challenge with Words',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3235',
  name: 'COO\'s Star Wars Challenge Episode VII - 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3275',
  name: 'MP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3276',
  name: 'COOP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3240',
  name: 'SP Ace of the TIE Corps 2021',
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
            "How many?" asked Commodore Silwar Naiilo to an officer wheeling
            a crate down the ramp of a Lambda-class shuttle. The shuttle from
            Monsoon Squadron had arrived a few moments earlier, and an alert
            woke Silwar up from a dream about drinking Chalquilla in the
            hanger-level cantina.
            <br /><br />
            The officer stopped the crate heavily on the floor. "List shows...
            two hundred and ninety-four, including 226 medals of communication,
            nearly every type of merit medal- including two Gold Stars- a dozen Iron
            Stars, a pair of Medals of Instruction..." he trailed off. "Sir,
            just need your signature here."
          </em>
        </p>

        <p>
          294 is the actual number of medals in this report, because I finally
          got to recommending all of the MoCs since June, on top of tons of
          competition medals. The COO also submitted recommendations for medals
          for PvE and PvP combat ratings advancements - no doubt filling many
          of your uniforms. COL Phalk Sturm earned not one, but two Gold
          Stars of the Empire, for both his RtF performance and for reaching
          the FCHG rank of Imperator - meaning he has completed 4000 unique
          custom missions. Drinks are on him for a while... but I know you'll
          all put it on my tab anyways.
        </p>

        <p>
          Ace of the TIE Corps ends at the end the month - a competition
          which awards a coveted Iron Star with Platinum Wings as well as a
          title to the top pilot. Second through sixth place also stands to
          earn awards, so check your status on the TC killboards! Our own GN
          Anahorn Dempsey, MAJ Hermann, and COL Phalk Sturm are in the top
          three for singleplayer for the year, while GN Stryker is in third
          place for PvP. Multiplayer games exclude SWS, which is covered by the
          COO's Star Wars Squadrons challenge.
        </p>

        <hr />

        <p>
          CM LegionX has taken the position of commander of Thunder Squadron
          while LC Tygra Shadowclaw is on medical leave. We hope his recovery
          is speedy and that he returns soon!
          In Tempest, CM Colo Deste has taken the position of Flight Leader of
          flight 2.
          I'd like to welcome LT Yubel
          Cobblepot, a new member of Eagle Squadron, and LT TwinJedi and SL
          Newt who both join Tempest Squadron. SL Silver Ajax joins Inferno,
          giving us a total of four new members in the last couple of weeks! MAJ
          Hermann, having earned another Gold Star of the Empire for RtF
          performance, has decided to retire to a nice beach on Tusorix.
          Congratulations are due to LT TwinJedi, LT Aqua Valkyrie, CM Xylo
          Pethtel, MAJ Honsou, and MAJ Graf D'Jinn on their promotions.
        </p>

        <p>
          {'Newsletter entries are due December 7th. please email '}
          <Link href="mailto:plif346@gmail.com">plif346@gmail.com</Link>
          {' up to three graphic or fiction pieces for publication. These can'}
          be pieces that were submitted for a competition, they just can't be
          pieces that have appeared in a newsletter before. Fiction pieces
          longer than about 1200 words should be submitted to the WARDs
          so that it can be linked to from the newsletter. Each submission
          that gets published in the newsletter will earn its creator a Letter
          of Achievement (LoA).
        </p>

        <p>
          In fleet-wide news,
          MAJ Wreckage has decided to step down from command of Sin Squadron
          due to personal committments. He will remain as a flight leader.
          CPT SkyShadow is now commander of Sin Squadron and has chosen MAJ
          Robert Hogan as XO.
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
