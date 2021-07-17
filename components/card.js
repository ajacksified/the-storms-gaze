import T from 'prop-types';
import * as styles from './styles';

export default function Card({
  children,
  style,
}) {
  return (
    <div style={{ ...styles.card, ...style }}>{children}</div>
  );
}

/* eslint react/forbid-prop-types: 0 */
Card.propTypes = {
  children: T.node.isRequired,
  style: T.object,
};

Card.defaultProps = {
  style: {},
};
