import T from 'prop-types';
import Card from './card';
import * as styles from './styles';

export default function Closing({ children }) {
  return (
    <Card>
      <h5 style={styles.h5}>
        In Closing
      </h5>

      {children}
    </Card>
  );
}

Closing.propTypes = {
  children: T.node.isRequired,
};
