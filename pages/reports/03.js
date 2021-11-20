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

const reportNumber = 3;
const startDate = '2021-07-29';
const endDate = '2021-08-05';
const submissionDate = '2021-08-06';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Spam Conflict PvE; Squadrons PvE and PvP',
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
      />

      <Intro showUniform>
        <p>
          <em>
            The young lieutenant snapped to attention upon entering the
            commodore's office. "Message for you sir," he spoke, with only a
            hint of fear. "Reponse from the Warrior." Silwar nodded, pointing
            his finger in circles. "And?" "MAJ Hogan..." the lieutanent replied,
            hesitating, "declines your offer. He does not wish to fight you in
            single combat for Bunduki."
            <br />
            <br />
            The lights flickered in the office as Silwar's face went dark. "A
            coward, then," he announced, before regaining his composure. "No
            matter. We've beaten them on the battlefield numerous times; their
            morale must be shaken." "The Hammer's reports have come in as well.
            They have taken numerous worlds on the outskirts of the galaxy."
            "Unimpressive," Silwar responded. "Just now, our own forces are
            taking their homeworld of Mokivj. Now leave, and send for
            Commander Honsou."
          </em>
        </p>

        <p>
          The Warrior has taken Bunduki, but no matter - the next turn, we
          annihilated their fleet at Cattamascar, and soon after took the
          Panatha system. They have gained 400 points - and lost 700. The
          Hammer, meanwhile, has sent multiple, small fleets to conduct raids
          on the outlying systems; some have been repelled, and those who
          survived will be swiftly destroyed. We currently stand at 19475
          points, to the Warrior's 17825 and the Hammer's 10460. Victory is
          inevitable.
        </p>

        <p>
          The Real Heroes of the Challenge competition has ended, with many
          excellent entries. Winners are:
        </p>

        <ul>
          <li>
            #3: Jarak La'an, with a description of one of the Challenge's many
            medical officers, Dr. Canto Val-Har. Dr. Canto Val-Har is a newly
            commissioned lieutenant from Pantora with an affinity for
            cybernetics.
          </li>
          <li>
            #2: Anahorn Dempsey, with the background of Lev Gora, Chief
            Maintenance Officer of Main Engine Crew #16. Dempsey will earn
            an IS-SR.
          </li>
          <li>
            #1: Phalk Sturm, with a story about Roolo the Ughnaught mechanic,
            will earn an IS-GR.
          </li>
        </ul>

        <p>
          Runners-up include Kalve Ryder, with a story about the troublemaking
          droid C2-4T, and Honsou, with a story about Stee've the TIE Pilot.
          With their permission, I will add their stories to the Challenge wiki
          entry, and include their stories in my reports. First will be Honsou's
          entry:
        </p>

        <hr />

        <p>
          MEDICAL REPORT 3467892 ISD-II Challenge: Dr Irvine Sturgess
          <br /><br />
          TO: COM/VA Silwar Naiilo
          <br /><br />
          Sir,
          <br /><br />
          At your behest I have included my medical report for Hanger Crewman
          HC666 "Stee've"...
          <br /><br />
          "Stee've cannot remember anything prior to his current assignment.
          His superior says that he was hit in the head when the TIE pilot,
          then LT Honsou, pulled a rather brash maneuver inside the hangar deck
          of the ISD-II Challenge. The landing gear of the TIE Reaper he was
          flying had taken Stee've square in the face as he was moving to a
          safe zone for take off.
          <br /><br />
          The truth of this tale is only half the story. Stee've was born on a
          backwater and recruited to the Challenge during a supply gathering
          mission. Never one for talking, Stee've communicated in little more
          than grunts and nods, occasionally his own name. However he was
          exceptionally tall and strong for a human and seemed to understand
          technology better than he understood most human emotion.
          <br /><br />
          In a relatively short space of time he became hangar deck crew and
          technician aboard the Challenge. The blow to his head, which should
          have killed Stee've actually only seemed to have enhanced both his
          strength and technical ability... if that's even possible.
          <br /><br />
          Loyal regards,
          <br /><br />
          Dr I Sturgess.
        </p>

        <hr />

        <p>
          Congratulations to the newly promoted LCM Jaxx Nassin, and welcome
          to SL AyePeaBee! We shall watch your careers with great interest.
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
