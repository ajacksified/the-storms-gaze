import T from 'prop-types';
import Card from './card';
import Link from './link';
import * as styles from './styles';
import config from '../config';

export default function Intro({
  children,
  showUniform,
  heading = config.com.intro,
  uniformThumbnail = config.com.uniformThumbnail,
  reporter = config.com.name,
  reporterPin = config.com.pin,
}) {
  return (
    <Card>
      <h5 style={{ ...styles.h5, marginBottom: '1em' }}>
        {heading}
      </h5>

      { showUniform && (
        <Link
          href={`https://tc.emperorshammer.org/record.php?pin=${config.com.pin}&type=profile`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{
              width: '100%',
              maxWidth: '50%',
              float: 'right',
              height: 'auto',
            }}
            src={uniformThumbnail}
            alt={`The uniform of ${reporter}, #${reporterPin}`}
          />
        </Link>
      )}

      {children}
    </Card>
  );
}

Intro.defaultProps = {
  showUniform: true,
};

Intro.propTypes = {
  children: T.node.isRequired,
  showUniform: T.bool,
};
