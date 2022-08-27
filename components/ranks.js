import * as styles from './styles';

const rankMap = {
  1: 'Sub-Lieutenant',
  2: 'Lieutenant',
  3: 'Lieutenant Commander',
  4: 'Commander',
  5: 'Captain',
  6: 'Major',
  7: 'Lieutenant Colonel',
  8: 'Colonel',
  9: 'General',
};

export function getPreviousRank(rank) {
  const index = Object.values(rankMap).indexOf(rank);
  return rankMap[index];
}

export const ranks = {
  Admiral: 'ad',
  'Vice Admiral': 'va',
  General: 'gn',
  Colonel: 'col',
  'Lieutenant Colonel': 'lc',
  Major: 'maj',
  Captain: 'cpt',
  Commander: 'cm',
  'Lieutenant Commander': 'lcm',
  Lieutenant: 'lt',
  'Sub-Lieutenant': 'sl',
};

export const rankImages = Object.keys(ranks).reduce((acc, rank) => ({
  ...acc,
  [rank]: () => (
    <img
      src={`https://tc.emperorshammer.org/images/ranks/${ranks[rank]}.png`}
      alt={`Badge icon for ${rank}`}
      style={styles.rankBadge}
    />
  ),
}), {});
