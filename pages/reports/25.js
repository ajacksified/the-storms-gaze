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

const reportNumber = 25;
const startDate = '2022-06-22';
const endDate = '2022-07-07';
const submissionDate = '2022-07-08';

const manualComActivity = {
  communication: 'Email, Discord',
  flightActivity: 'Squadrons PvP, Battlefront II PvE, ReMob fights',
  otherActivity: 'Graded "Moving Day" and "Challenge COMeversary: Bartending Duty" submissions',
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

      <Intro>
        <p>
          Hard to believe it's already been an entire year, but here we are:
          it's my anniversary as COM, days after the anniversary of the
          Challenge being recommissioned on June 28, two years ago, under High
          Admiral Dempsey. When I first came out of retirement - a few months
          before that - I said that I wasn't interested in a leadership position
          whatsoever. I had reactivated upon hearing that Star Wars Squadrons was
          to be released, and wanted to fly with like-minded individuals
          and see whether the TIE Corps was what I remembered from
          fifteen years ago. It wasn't long before my own kids (and the
          reason I went into retirement in the first place - I left when my
          oldest was born, and now she's a <em>teenager</em>) were interested in
          joining, and it made sense to lead their flight; so when Tempest
          Squadron reopened and there was enough room, we all migrated back to
          my first ship, the <em>Challenge</em>. GN Dunta Polo decided to step
          back from the commander
          position, and I, a little more confident, took the spot in what would
          become one of the most highly decorated squadrons in the fleet. A year
          later, when HA Dempsey said that it was time to step back as commodore,
          the position I'd always dreamed of opened up - and I jumped at the
          opportunity to lead the finest ship in the Emperor's Hammer TIE Corps.
          <br /><br />
          Since then, the ISDII Challenge has retaken its historic role as the
          Flagship of the TIE Corps. She and all of her squadrons have
          performed excellently in
          every competition from Imperial Storm to ReMob and Raise the Flag.
          This is due to the incredible pilots, flight leaders, and commanders
          that use their free time to create an environment in which everyone
          can flourish - making the fleet strong and securing our place in the
          galaxy. The Challenge has always been a peerless ship, and this last
          year was proof that her history was not just a legacy or a
          memory of what-had-been, but built into the very nature of what we
          are. We push hard into every situation, no matter the odds, and we
          are victorious.
          <br /><br />
          Thank you all for making this experience what it should be. On
          Challenge day and every other day, I salute you.
        </p>

        <hr />

        <p>
          We had seven entries for Moving Day, which has completed as of
          yesterday. Pilots submitted about 45 pages of fiction, and each one
          was enjoyable in their own way - and I hope the authors choose to
          share their work! I am pleased to announce the winners:
        </p>

        <ol>
          <li>
            CM Jack Wynand with the entry "Long Reach", a screenplay about
            using the MC-40 <em>Cougar</em> to make an attack on a rebel base.
            For this entry, he will receive an IS-GR.
          </li>
          <li>
            LT Atashi Rain with the entry "Moving Day", a story about a pilot's
            first days on the MC-40 <em>Veiled Flight</em>, and her thoughts
            about the future of the battlegroup. For this entry, she will receive
            an IS-SR.
          </li>
          <li value="2">
            It's a tie! LC Honsou with the entry "Something Fowl", a pun-filled
            story about retrofitting the MC-40 <em>Bawkwurst</em> to fit the
            starfighters of Firebird and Eagle. For this entry, he will also
            receive an IS-SR.
          </li>
          <li>
            COL Triji Boliv, with the entry "Moving Day - Battle Plot", a
            descriptive and clear recipe for creating a battle in TIE, XvT, or
            XWA. In this battle, Firebird and Eagle squadrons capture their
            prize, an MC-40 later named <em>Roost</em>. For this entry, he
            will receive an IS-BR.
          </li>
        </ol>

        <p>
          Additional entries were submitted by CM Cupcake and GN Stryker, who
          will receive IS-CRs for their excellent entries.
        </p>

        <p>
          A new survey will go out soon which will include a vote for
          the new ship name. While this isn't a democracy (we are Imperials,
          after all), my decision will be influenced by a clear winner.
        </p>

        <hr />

        <p>
          Challenge COMeversary: Bartending Duty has also ended, a competition
          to create a drink to be served at VA Silwar Naiilo's anniversary party.
          Pilots were asked to submit a recipe, picture, or drawing. All entrants
          received VIP tickets into the party, and breakfast the next morning.
          We had 13 entries ranging from single-line comments to fully written
          backstories and descriptions. The winners are:
        </p>

        <ol>
          <li>
            {'CPT Xylo Pethtel, with the '}
            <Link href="https://wiki.emperorshammer.org/Hosnian_Highball">Prime Hosnian Highball</Link>
          </li>
          <li>
            {'CM Drummer "the Gunner" Nate, with '}
            <Link href="https://wiki.emperorshammer.org/The_Infiltrator">The Infiltrator</Link>
          </li>
          <li>
            {'CPT TheBlackxRanger, with '}
            <Link href="https://wiki.emperorshammer.org/Like_a_Bantha">Like A Bantha</Link>
          </li>
        </ol>

        <p>
          Other entries will be added to the Challenge Bartending Manual
          category on the wiki after I nurse this hangover. Notably, VA Marenta
          had the only negative score, with a drink entirely composed of
          Peppermint Schnapps, Fireball Whiskey, and regret.
        </p>

        <hr />

        <p>
          Squadron ReMobilization marches on, and we're now at the halfway
          mark. Tempest has about 50% completion overall, and all five Challenge
          squadrons have made progress towards their goals. The prize at the
          end includes the ability to change the squadron goals
          and ship types for each flights - including the newly introduced TIE
          Punisher.
        </p>

        <hr />

        <p>
          A trio of Lieutenants were promoted this week: LT Constellation
          Hoshiteru of Thunder Squadron, who was recruited by CPR Richlet,
          and Lieutenants Kertron Seven and CapukkiOne of Tempest Squadron,
          both recruited by LC Honsou.

          LC Graf D'Jinn has chosen to step back as Commander of Eagle Squadron
          and into a Flight Member position. CM Drummer "The Gunner" Nate has
          taken his mantle as Commander of Eagle Squadron, and has chosen two
          Flight Leaders: CM SirCaleb and CM Cupcake. Congratulations to all,
          and best wishes to Graf as he gives all of his paperwork to Drummer
          to complete and gets a rest.
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
