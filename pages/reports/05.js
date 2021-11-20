import T from 'prop-types';

import Heading from '../../components/heading';
import Intro from '../../components/intro';
import Competitions from '../../components/competitions';
import Footer from '../../components/footer';
import ActivityInfo from '../../components/shipStats';

import config from '../../config';

import { loadPilotActivitydata, loadShipData } from '../../src/fetchData';

// import Link from '../../components/link';
import ComActivity from '../../components/comActivity';

const reportNumber = 5;
const startDate = '2021-08-13';
const endDate = '2021-08-20';
const submissionDate = '2021-08-21';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Spam Conflict PvE; Squadrons PvE and PvP; Starcross Fighter League; Challenge Cup',
};

const competitions = [{
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
        reportType="Acting Commodore's"
      />

      <Intro
        showUniform
        repoter="Phalk Sturm"
        reporterPin="6874"
        heading="From somewhere in a Galaxy far, far away..."
        uniformThumbnail="https://tc.emperorshammer.org/images/report-assets/arbitrary-report-images/silwar-vacation-uniform.png"
      >
        <p>
          <em>
            VA Silwar Naiilo abruptly landed over the instrument panel of his
            Tyderian Lambda-class T4a Shuttle "The Conmute".
            <br /><br />
            He had forgotten to fasten the 4-point seat belt, and his already
            bruised forehead ached as the impact on the panel made another
            visible cut.
            <br /><br />
            "I should wear a helmet", sorely thought Naiilo, instinctively
            feeling the burning wound with his left hand.
            <br /><br />
            It had been merely a few days since he left the FRG Swift Fury
            for a relaxing vacation on a forest moon, and he was cruising
            back to his ship, the ISD-II Challenge.
            <br /><br />
            "Sitrep, why in the name of Palpatine, are we stopping?" he asked to
            the navigational computer.
            <br /><br />
            "All systems functional, Vice-Admiral. The engines were shut down on
            manual operation." replied a robotical voice from somewhere inside
            the cockpit.
            <br /><br />
            Then, he noticed. 4 bottles of Chalquilla were empty and one was
            visibly dripping. Luckily, a polished cedar wood box of TaHabanya
            Cohiba Esplendidos, next to the bottles was miraculously intact.
            He sighed in relief and imagined the face of COL Sturm, his smoking
            companion, grinning of approval.
            <br /><br />
            Then, a flash of memory exploded inside his head, still painful
            from the hit but also from a monstrous feeling of hangover.
            He realized he had fallen asleep while drinking in advance to the
            celebration for winning Imperial Storm III. Not that it had been
            officially announced, but with the news arriving of the how the
            Hammer Task Force had retreated from all planets his fleet had
            attacked simultaneously, it seemed like a sound reason to celebrate
            while on route to the Challenge. His ship. The math was simple
            enough. With all squadrons in the Hammer practically laying down
            their weapons, and the Warrior in some remote unknown location,
            barely 3 turns from the end bell, there was no chance the Challenge
            was not winning, yet again, another fleet-wide award.
            <br /><br />
            And he felt proud.
          </em>
        </p>

        <p>
          Imperial Storm III is unofficially another Challenge victory.
        </p>

        <p>
          With the Hammer retreating and surrendering Bunduki, the Drunken
          Admiral seizes B’Knos and Timora left unguarded, only a handful of
          worlds remain in enemy hands:  Kammia for the Hammerers, Houche and
          Rattatak for the Warriors.
        </p>

        <p>
          The lead our fleet has consolidated can not be reversed in the
          following few turns left.
        </p>

        <p>
          Heroes of the Challenge entries will continue in the next report,
          as soon as the Commodore is back aboard, in the meantime we can
          deplete all Chalquilla storages, smoke some cigars in the lounge and
          wave our less-capable brothers with an embracing smile of,
          brothership?
        </p>

        <p>
          Paternity sounds more fitting.
        </p>

        <p>
          A-COM COL Phalk Sturm
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
