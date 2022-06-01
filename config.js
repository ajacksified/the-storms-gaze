const config = {
  reportTitleFormat: (number) => `The Storm's Gaze #${number}`,
  ship: 'ISDII Challenge',
  shipId: '189',

  shipPatch: {
    url: 'https://tc.emperorshammer.org/images/reports/challenge.png',
    height: 150,
    width: 150,
  },

  shipBanner: {
    url: 'https://tc.emperorshammer.org/images/banners/64125chal.png',
    height: 1920,
    width: 480,
  },

  com: {
    intro: 'From the Desk of Silwar Naiilo',
    name: 'Silwar Naiilo',
    title: 'VA Silwar Naiilo',
    pin: 12630,
    email: 'ehsilwar@gmail.com',
    uniformThumbnail: 'https://tc.emperorshammer.org/images/report-assets/silwar_naiilo_by_newt.png',
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

  // Randomize squadron order each time
  squadrons: [156, 139, 42, 45, 40].sort(() => (Math.random() > 0.5 ? 1 : -1)),
};

export default config;
