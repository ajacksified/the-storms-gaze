const config = {
  reportTitleFormat: (number) => `The Storm's Gaze #${number}`,
  ship: 'ISD-II Challenge',
  shipId: '3',

  shipPatch: {
    url: 'https://tc.emperorshammer.org/images/reports/challenge.png',
    height: 150,
    width: 150,
  },

  shipBanner: {
    url: 'https://tc.emperorshammer.org/images/banners/Challenge2.jpg',
    height: 722,
    width: 89,
  },

  com: {
    intro: 'From the Desk of Silwar Naiilo',
    name: 'Silwar Naiilo',
    title: 'VA Silwar Naiilo',
    pin: 12630,
    email: 'ehsilwar@gmail.com',
    uniformThumbnail: 'https://tc.emperorshammer.org/images/thumbs/99829SilwarNaiilo_Dress.png',
  },

  tccom: {
    name: 'Plif',
    title: 'HA Plif',
    pin: 346,
  },

  soo: {
    name: 'John T. Clark',
    title: 'AD John T. Clark',
    pin: 11690,
  },

  coo: {
    name: 'Miles Prower',
    title: 'FA Miles Prower',
    pin: 12464,
  },

  squadrons: [156, 139, 42, 45, 40],
};

export default config;
