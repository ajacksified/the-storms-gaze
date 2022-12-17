const config = {
  reportTitleFormat: (number) => `The Storm's Gaze #${number}`,
  ship: 'ISDII Challenge',
  shipId: '189',

  shipPatch: {
    url: 'https://tc.emperorshammer.org/patch.php?id=233',
    height: 150,
    width: 150,
  },

  shipBanner: {
    url: 'https://tc.emperorshammer.org/images/banners/BattlegroupIII-1670089204-81ff21d8.jpg',
    height: 1920,
    width: 480,
  },

  com: {
    intro: 'From the Desk of Silwar Naiilo',
    name: 'Silwar Naiilo',
    title: 'AD Silwar Naiilo',
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
  squadrons: [156, 139, 45, 40, 159].sort(() => (Math.random() > 0.5 ? 1 : -1)),
};

export default config;
