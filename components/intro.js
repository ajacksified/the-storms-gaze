import T from 'prop-types';
import Card from './card';
import Link from './link';
import * as styles from './styles';
import config from '../config';

export default function Intro({ children, showUniform }) {
  return (
    <Card>
      <h5 style={{ ...styles.h5, marginBottom: '1em' }}>
        {config.com.intro}
      </h5>

      { showUniform && (
        <Link
          href={`https://tc.emperorshammer.org/record.php?pin=${config.com.pin}&type=profile`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ width: '100%', maxWidth: '190px', float: 'right', height: 'auto' }}
            src={config.com.uniformThumbnail}
            alt={`The uniform of ${config.com.name}, #${config.com.pin}`}
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
