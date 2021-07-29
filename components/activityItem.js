import React from 'react';
import Link from './link';
import * as styles from './styles';

const activity = {
  BATTLE_COMPLETED: (battles) => (
    <React.Fragment key="BATTLE_COMPLETED">
      <dt style={styles.dt}>Completed Battles:</dt>
      <dd style={styles.dd}>
        {battles.map(({ battleType, battleId }) => (
          `${battleType} ${battleId}`
        )).join(', ')}
      </dd>
    </React.Fragment>
  ), // (?<battleType>\S+) (?<battleId>\d+)/

  SUBMITTED_BATTLE_REVIEW: (reviews) => (
    <React.Fragment key="SUBMITTED_BATTLE_REVIEW">
      <dt style={styles.dt}>Submitted Reviews:</dt>
      <dd style={styles.dd}>
        {reviews.map(({ battleType, battleId }) => (
          `${battleType} ${battleId}`
        )).join(', ')}
      </dd>
    </React.Fragment>
  ), // /^Submitted review for battle (?<battleType>\S+) (?<battleId>\d+)/,

  IU_COMPLETED: (courses) => (
    <React.Fragment key="IU_COMPLETED">
      <dt style={styles.dt}>IU Courses Completed:</dt>
      <dd style={styles.dd}>
        {courses.map(({ iuCourse }) => (
          iuCourse
        )).join(', ')}
      </dd>
    </React.Fragment>
  ), // (/^IU Course added to Academic Record by the SOO : \[(?<iuCourse>[^\(]+)]/,

  NEW_COMBAT_RATING: (newRatings) => (
    <React.Fragment key="NEW_COMBAT_RATING">
      <dt style={styles.dt}>New Combat Rating:</dt>
      <dd style={styles.dd}>
        {newRatings.map(({ combatRating }) => (
          combatRating
        )).join(', ')}
      </dd>
    </React.Fragment>
  ), // /^New Combat Rating achieved : (?<combatRating>.*)/,

  NEW_FCHG: (fchgRatings) => (
    <React.Fragment key="NEW_FCHG">
      <dt style={styles.dt}>New FCHG Rating:</dt>
      <dd style={styles.dd}>
        {fchgRatings.map(({ fchg }) => (
          fchg
        )).join(', ')}
      </dd>
    </React.Fragment>
  ), // /^New Fleet Commander's Honor Guard rank achieved : (?<fchg>\S+)/,

  NEW_COOP_RATING: (coopRatings) => (
    <React.Fragment key="NEW_COOP_RATING">
      <dt style={styles.dt}>New PvE Rating:</dt>
      <dd style={styles.dd}>
        {coopRatings.map(({ rating }) => (
          rating
        )).join(', ')}
      </dd>
    </React.Fragment>
  ), // (co/New COOP\/PVE Rating achieved : (?<rating>\S+)/,

  NEW_COMPETITION: (competitions) => (
    <React.Fragment key="NEW_COMPETITION">
      <dt style={styles.dt}>Submitted Approved Competitions:</dt>
      <dd style={styles.dd}>
        {competitions.map(({ competitionId, activityString }) => (
          <>
            <Link href={`https://tc.emperorshammer.org/competitions.php?id=${competitionId}`} key={competitionId}>
              {activityString}
            </Link>
            {' '}
          </>
        ))}
      </dd>
    </React.Fragment>
  ), // /^Submitted competition approved : ID# (?<competitionId>\d+)/,

  NEW_PROMOTION: (promotions) => (
    <React.Fragment key="NEW_PROMOTION">
      <dt style={styles.dt}>Promotion:</dt>
      <dd style={styles.dd}>
        {promotions.map(({ rankShorthand }) => (
          rankShorthand
        )).join(', ')}
      </dd>
    </React.Fragment>
  ), // /^New promotion : .* \((?<rankShorthand>\S+)\)/,

  CREATED_BATTLE: (battles) => (
    <React.Fragment key="CREATED_BATTLE">
      <dt style={styles.dt}>Created Battle:</dt>
      <dd style={styles.dd}>
        {battles.map(({ battleType, battleId }) => (
          `${battleType} ${battleId}`
        )).join(', ')}
      </dd>
    </React.Fragment>
  ), // (/^Battle created by this pilot added to TC database : (?<battleType>\S+) (?<battleId>\d+)/,

  SUBMITTED_FICTION: (fictions) => (
    <React.Fragment key="SUBMITTED_FICTION">
      <dt style={styles.dt}>Submitted Fiction:</dt>
      <dd style={styles.dd}>
        {fictions.map(({ title }) => (
          `${title}`
        )).join(', ')}
      </dd>
    </React.Fragment>
  ), // /^New FICTION added by WARD \((?<title>.+)\)/,

  SUBMITTED_PATCH_BUG_REPORT: (reports) => (
    <React.Fragment key="SUBMITTED_PATCH_BUG_REPORT">
      <dt style={styles.dt}>Submitted Patch Bug Report:</dt>
      <dd style={styles.dd}>
        {reports.map(({ activityString }) => (
          activityString
        )).join(', ')}
      </dd>
    </React.Fragment>
  ), // /^Submitted bug report for patch (?<patchType>\S+): (?<patchDetails>.+)/,

  SUBMITTED_BATTLE_BUG_REPORT: (reports) => (
    <React.Fragment key="SUBMITTED_BATTLE_BUG_REPORT">
      <dt style={styles.dt}>Submitted Battle Bug Report:</dt>
      <dd style={styles.dd}>
        {reports.map(({ activityString }) => (
          activityString
        )).join(', ')}
      </dd>
    </React.Fragment>
  ), // /^Submitted bug report for battle (?<battleType>\S+) (?<battleId>\d+)/,

  NEW_UNIFORM_APPROVED: () => (
    <React.Fragment key="NEW_UNIFORM_APPROVED">
      <dt style={styles.dt}>Updated Uniform</dt>
      <dd style={styles.dd}>&nbsp;</dd>
    </React.Fragment>
  ), // /^New uniform upload approved/,

  UPDATED_INPR: () => (
    <>
      <dt style={styles.dt}>Updated INPR</dt>
      <dd style={styles.dd}>&nbsp;</dd>
    </>
  ),
};

export default activity;
