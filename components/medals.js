import * as styles from './styles';

export const medals = {
  MOH: 'moh',
  OOR: 'oor',
  IC: 'ic',
  GOE: 'goe',
  GS: 'gs',
  SS: 'ss',
  BS: 'bs',
  PC: 'pc',
  ISM: 'ism',
  IAR: 'iar',
  COB: 'cob',
  MOI: 'moi',
  TUA: 'tua',
  MUA: 'mua',
  OV: 'ov',
  DFC: 'dfc',
  IS_PW: 'is-pw',
  IS_PR: 'is-pr',
  IS_GW: 'is-gw',
  IS_GR: 'is-gr',
  IS_SW: 'is-sw',
  IS_SR: 'is-sr',
  IS_BW: 'is-bw',
  IS_BR: 'is-br',
  IS_CR: 'is-cr',
  IS_CW: 'is-cw',
  LOC: 'loc',
  LOS: 'los',
  MOC_DOC: 'moc-doc',
  MOC_POC: 'moc-poc',
  MOC_GOC: 'moc-goc',
  MOC_SOC: 'moc-soc',
  MOC_BOC: 'moc-boc',
};

export const medalFullNames = {
  MOH: 'Medal of Honor',
  OOR: 'Order of the Renegade',
  IC: 'Imperial Cross',
  GOE: 'Grand Order of the Emperor',
  GS: 'Gold Star of the Empire',
  SS: 'Silver Star of the Empire',
  BS: 'Bronze Star of the Empire',
  PC: 'Palpatine Crescent',
  ISM: 'Imperial Security Medal',
  IAR: 'Imperial Achievement Ribbon',
  COB: 'Commendation of Bravery',
  MOI: 'Medal of Instruction',
  TUA: 'TIE Corps Commander\'s Unit Award',
  MUA: 'TIE Corps Meritorious Unit Award',
  OV: 'Order of the Vanguard',
  DFC: 'Distinguished Flying Cross',
  IS_PW: 'Iron Star with Platinum Wings',
  IS_PR: 'Iron Star with Platinum Ribbon',
  IS_GW: 'Iron Star with Gold Wings',
  IS_GR: 'Iron Star with Gold Ribbon',
  IS_SW: 'Iron Star with Silver Wings',
  IS_SR: 'Iron Star with Silver Ribbon',
  IS_BW: 'Iron Star with Bronze Wings',
  IS_BR: 'Iron Star with Bronze Ribbon',
  IS_CW: 'Iron Star with Copper Wings',
  IS_CR: 'Iron Star with Copper Ribbon',
  LOC: 'Legion of Combat',
  LOS: 'Legion of Skirmish',
  MOC_DOC: 'Medal of Communication - Diamond Oak Cluster',
  MOC_POC: 'Medal of Communication - Platinum Oak Cluster',
  MOC_GOC: 'Medal of Communication - Gold Oak Cluster',
  MOC_SOC: 'Medal of Communication - Silver Oak Cluster',
  MOC_BOC: 'Medal of Communication - Bronze Oak Cluster',
}

export const medalImages = Object.values(medals).reduce((acc, medal) => ({
  ...acc,
  [medal]: () => (
    <img
      src={`https://tc.emperorshammer.org/images/report-assets/medals/${medal}.jpg`}
      alt={`Icon for ${medal}`}
      style={styles.medal}
    />
  ),
}), {});
