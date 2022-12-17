export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://tc.emperorshammer.org/css/bulmatc.css" />
        <link rel="stylesheet" href="https://tc.emperorshammer.org/css/bulmacustom.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
