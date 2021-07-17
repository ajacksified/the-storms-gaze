import T from 'prop-types';
import Card from './card';
import Link from './link';
import * as styles from './styles';
import config from '../config';

const links = [{
  href: 'https://discord.gg/MSxYV8a',
  title: 'TC Discord',
}, {
  href: `https://tc.emperorshammer.org/roster.php?type=ship&id=${config.shipId}`,
  title: 'Ship Roster',
}, {
  href: `mailto:${config.com.email}`,
  title: 'Email the COM',
}, {
  href: 'https://tc.emperorshammer.org/admin.php',
  title: 'TC Personnel Administration',
}, {
  href: 'https://tc.emperorshammer.org/battlecenter.php',
  title: 'Battle Center',
}, {
  href: 'https://tc.emperorshammer.org/competitions.php',
  title: 'Competition Center',
}, {
  href: `https://tc.emperorshammer.org/showreport.php?id=3&nid=${config.shipId}`,
  title: 'Report Archive',
}];

export default function Footer({ children }) {
  return (
    <Card style={{ borderBottom: 0 }}>
      <h5 style={{ ...styles.h5, marginBottom: '1em' }}>
        Resources
      </h5>

      <img
        style={{ width: '182px', float: 'right' }}
        src="https://tempest-blown-with-the-wind.vercel.app/tc.png"
        alt="The TIE Corps logo"
      />

      <ul>
        {links.map(({ href, title }) => (
          <li key={href}>
            <Link
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      {children}
    </Card>
  );
}

Footer.propTypes = {
  children: T.node,
};

Footer.defaultProps = {
  children: null,
};
