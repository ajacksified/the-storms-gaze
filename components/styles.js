const lightBlue = '#004c83';
const blue = '#0095ff';
const grey50 = '#666666';
const yellow = '#f49553';

const primary = blue;
const secondary = lightBlue;
const highlight = yellow;

const textFont = 'inherit';
const headingFont = 'inherit';
const linkColor = primary;
const borderColor = grey50;

const cardWidth = '650px';

export const h1 = {
  fontSize: 36,
  marginTop: 0,
  textDecoration: 'underline',
  fontFamily: headingFont,
};

export const h2 = {
  textAlign: 'center',
  fontSize: 32,
  marginTop: 0,
  fontFamily: headingFont,
};

export const h3 = {
  textAlign: 'center',
  fontSize: 28,
  marginTop: 0,
  fontFamily: headingFont,
};

export const h4 = {
  textAlign: 'center',
  fontSize: 26,
  marginTop: 0,
  fontFamily: headingFont,
};

export const h5 = {
  textAlign: 'center',
  fontSize: 24,
  marginTop: 0,
  fontWeight: 'normal',
  fontFamily: headingFont,
};

export const h6 = {
  fontSize: 20,
  marginTop: 0,
  fontFamily: headingFont,
};

export const body = {
  fontFamily: textFont,
  fontSize: 18,
};

export const p = {
  marginTop: 0,
};

export const a = {
  color: linkColor,
};

export const dt = {
  display: 'inline',
  fontWeight: 'bold',
  marginRight: '0.5em',
  float: 'left',
};

export const dd = {
  margin: '0 0 0.5em 0',
};

export const card = {
  padding: '1em 0.5em',
  borderBottom: `solid 1px ${borderColor}`,
  maxWidth: cardWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
};

export const highlighted = {
  backgroundColor: secondary,
  padding: '0.5em',
};

export const highlightedLink = {
  color: highlight,
};

export const rankBadge = {
  height: '27px',
  width: undefined,
  display: 'inline-block',
  paddingRight: '0.5em',
  verticalAlign: 'middle',
};

export const medal = {
  height: '27px',
  paddingLeft: '0.5em',
  display: 'inline-block',
  paddingRight: '0.5em',
  verticalAlign: 'middle',
};

export const unbulletedList = {
  listStyle: 'none',
  paddingLeft: '0',
};

export const unbulletedListItem = {
  marginBottom: '0.5em',
};

export const img = {
  maxWidth: '100%',
};
