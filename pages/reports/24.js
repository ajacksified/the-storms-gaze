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

const reportNumber = 24;
const startDate = '2022-06-09';
const endDate = '2022-06-21';
const submissionDate = '2022-06-22';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Working through the battle center, 3PO matches, ReMob battles, SWS PvP, SWS PvE, XWA PvP, XWA PvE',
  otherActivity: 'Running a competition: "Moving Day"',
};

const competitions = [{
  id: '3406',
  name: 'Squadron (Re)Mobilization 4',
  ends: '2022-07-15',
  units: 'Entire TC',
  notes: 'One of the big yearly competitions - achieve the goals for medals and to update your squadron information.',
}, {
  id: '3393',
  name: 'Moving Day',
  ends: '2022-07-01',
  units: 'ISDII Challenge',
  notes: 'Relating to the MC-40, Eagle, and/or Firebird, write a fiction piece, create a work of art, or create a storyline for a battle including plot lines and ships involved by July 1.',
}, {
  id: '3403',
  name: 'Logo for the Bastion',
  ends: '2022-06-30',
  units: 'Entire TC',
  notes: 'Create a logo for the Bastion, the Hammer\'s cantina.',
}, {
  id: '3389',
  name: 'The Challenge with Words',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Finish the word search as fast as possible.',
}, {
  id: '3377',
  name: 'TIE Fighter Total Conversion - Reimagined',
  ends: '2022-06-30',
  units: 'Entire TC',
  notes: 'Fly as much of the TFTC campaign as possible - with additional medals for art and fiction.',
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
          CM DrummerTheGunnerNate, LCM Newt, and the Challenge CMDRs have
          created an amazing comic about Father's Day on the Challenge! Here's
          {' a sneak preview, and you can '}

          <Link
            href="https://wiki.emperorshammer.org/wiki/images/c/c5/Fathers_Day_Special.pdf"
            target="_blank"
            rel="nofollow"
          >
            download and read it on the Wiki in PDF.
          </Link>

          {' This was a truly kind and incredible gift, and a reminder of how we '}
          are all a family on the Challenge.
        </p>

        <p>
          <Link
            href="https://wiki.emperorshammer.org/wiki/images/c/c5/Fathers_Day_Special.pdf"
            target="_blank"
            rel="nofollow"
          >
            <img
              alt="Page 4 of the 'Father's Day Special' comic, available on the EH Wiki."
              src="https://tc.emperorshammer.org/images/assets/1deba76c.jpeg"
              width="100%"
            />
          </Link>
        </p>

        <hr />

        <p>
          <img
            alt="The TIE Punisher."
            src="https://tc.emperorshammer.org/images/craft/248.png"
            style={{float: "right"}}
          />

          TIE Corps Exercise: Squadron (Re)Mobilization 4 has begun. Each
          squadron is tasked with completing a number of goals, from fiction-
          writing through singleplayer, PvE, and PvP games. Most goals require
          squadron members flying together, so group up when you can! The
          rewards at the end are unique to this competition - a chance for each
          squadron to change its craft and objective. This year, after a
          proposal from LC Honsou was accepted by Fleet Commander Rapier, a new
          {'TIE model is available: the '}
          <Link
            href="https://starwars.fandom.com/wiki/TIE/ca_%22Punisher%22_Starfighter"
            target="_blank"
            rel="nofollow"
          >
            TIE/ca "Punisher"!
          </Link>
          {' This craft is a heavy bomber with a wide array of heavy '}
          weaponry, an extremely strong hull, and a strong deflector shield
          generator. Its primary target is capital ships and heavily defended
          battlestations, both orbital and planetside. As they don't have
          hyperdrives, I expect our Arquintens cruisers to see a lot of
          activity, should any squadron achieve the ReMob goals to switch to
          these heavy bombers.
        </p>

        <p>
          ISDII Challenge: On the Offensive has ended. COL Phalk Sturm took
          first place with a score of 200,262 and a new battle high score,
          and has earned an IS-GW. CPT Colo Delste took second with a score
          of 149,522 and a high score on mission #5, and has earned an IS-SW.
          GN Anahorn Dempsey is in third with 121,775, and has earned an IS-BW.
          COL Triji Boliv has also earned an IS-CW for scoring above 50,000.
          Congratulations to all who took part!
        </p>

        <p>
          The Moving Day competition comes to a close on July 1st. Write
          fiction, create a custom battle storyline, draw a picture, or do
          anything else creative relating to the Challenge Battlegroup's new
          MC-40 - home of Eagle and Firebird squadrons. This is also a rare
          chance to impact the name of the ship itself, which we get to
          select - a name which will last forever!
        </p>

        <hr />

        <p>
          Welcome LT Tiberius Duck, who joined Thunder Squadron and earned his
          promotion almost instantly. We shall watch your career with great
          interest. SL CapukkiOne has also earned their first Legions, and I
          expect to announce a promotion in my next report.
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
