import { Heading, UnorderedList, Bold } from 'jsx-md';

import {
  getCombatRatingChangesFromActivityData,
} from '../../../../src/fetchData';

export default function ShipStats({ activityData }) {
  const combatRatings = getCombatRatingChangesFromActivityData(activityData.activityData);

  const fchg = [];
  if (combatRatings.NEW_FCHG.length > 0) {
    combatRatings.NEW_FCHG.forEach((advancement) => (
      fchg.push([
        <Bold>{`${advancement.name}`}</Bold>,
        `: ${advancement.ratings.join(', ')}`,
      ])
    ));
  }

  const pvp = [];
  if (combatRatings.NEW_COMBAT_RATING.length > 0) {
    combatRatings.NEW_COMBAT_RATING.forEach((advancement) => (
      pvp.push([
        <Bold>{`${advancement.name}`}</Bold>,
        `: ${advancement.ratings.join(', ')}`,
      ])
    ));
  }

  const pve = [];
  if (combatRatings.NEW_COOP_RATING.length > 0) {
    combatRatings.NEW_COOP_RATING.forEach((advancement) => (
      pve.push([
        <Bold>{`${advancement.name}`}</Bold>,
        `: ${advancement.ratings.join(', ')}`,
      ])
    ));
  }

  return [
    <Heading level={5} key="title">Combat Rating Advancements</Heading>,

    (fchg.length ? [
      '\n',
      <Heading level={6} key="fchg-title">FCHG Advancements</Heading>,
      <UnorderedList key="fchg">
        {fchg}
      </UnorderedList>,
    ] : null),

    (pvp.length ? [
      '\n',
      <Heading level={6} key="fchg-title">PVP Rating Advancements</Heading>,
      <UnorderedList key="fchg">
        {pvp}
      </UnorderedList>,
    ] : null),

    (pve.length ? [
      '\n',
      <Heading level={6} key="fchg-title">PVE Rating Advancements</Heading>,
      <UnorderedList key="fchg">
        {pve}
      </UnorderedList>,
    ] : null),
  ];
}
