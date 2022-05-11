import * as styles from './styles';

/* we're now getting medals back as full names, so we'll need to update the mapping */

export const medalFullNames = {
  MOH: 'Medal of Honor',
  IC: 'Imperial Cross',
  OOR: 'Order of the Renegade',
  GOE: 'Grand Order of the Emperor',
  GS: 'Gold Star of the Empire',
  SS: 'Silver Star of the Empire',
  BS: 'Bronze Star of the Empire',
  PC: 'Palpatine Crescent',
  ISM: 'Imperial Security Medal',
  IAR: 'Imperial Achievement Ribbon',
  MOI: 'Medal of Instruction',
  MOC: 'Medal of Communication',
  TUA: 'TIE Corps Commander\'s Unit Award',
  MUA: 'TIE Corps Meritorious Unit Award',
  LOC: 'Legion of Combat',
  LOS: 'Legion of Skirmish',
  DFC: 'Distinguished Flying Cross',
  OV: 'Order of the Vanguard',
  COB: 'Commendation of Bravery',
  COE: 'Commendation of Excellence',
  COL: 'Commendation of Loyalty',
  COS: 'Commendation of Service',
  LOA: 'Letter of Achievement',
  IS_PR: 'Iron Star with Platinum Ribbon',
  IS_PW: 'Iron Star with Platinum Wings',
  IS_GR: 'Iron Star with Gold Ribbon',
  IS_GW: 'Iron Star with Gold Wings',
  IS_SR: 'Iron Star with Silver Ribbon',
  IS_SW: 'Iron Star with Silver Wings',
  IS_BR: 'Iron Star with Bronze Ribbon',
  IS_BW: 'Iron Star with Bronze Wings',
  IS_CR: 'Iron Star with Copper Ribbon',
  IS_CW: 'Iron Star with Copper Wings',
  MOC_DOC: 'Medal of Communication with Diamond Oak Cluster',
  MOC_POC: 'Medal of Communication with Platinum Oak Cluster',
  MOC_GOC: 'Medal of Communication with Gold Oak Cluster',
  MOC_SOC: 'Medal of Communication with Silver Oak Cluster',
  MOC_BOC: 'Medal of Communication with Bronze Oak Cluster',
};

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
  TUA: 'tua',
  MUA: 'mua',
  MOI: 'moi',
  DFC: 'dfc',
  IS_PR: 'is-pr',
  IS_PW: 'is-pw',
  IS_GR: 'is-gr',
  IS_GW: 'is-gw',
  IS_SR: 'is-sr',
  IS_SW: 'is-sw',
  IS_BR: 'is-br',
  IS_BW: 'is-bw',
  IS_CR: 'is-cr',
  IS_CW: 'is-cw',
  COB: 'cob',
  LOC: 'loc',
  LOS: 'los',
  MOC_DOC: 'moc-doc',
  MOC_POC: 'moc-poc',
  MOC_GOC: 'moc-goc',
  MOC_SOC: 'moc-soc',
  MOC_BOC: 'moc-boc',
};

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
