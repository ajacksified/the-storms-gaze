import T from 'prop-types';
import * as styles from './styles';

export default function Link({
  children,
  style,
  ...props
}) {
  return (
    <a style={{ ...styles.a, ...style }} {...props}>{children}</a>
  );
}

/* eslint react/forbid-prop-types: 0 */
Link.propTypes = {
  children: T.node.isRequired,
  style: T.object,
};

Link.defaultProps = {
  style: {},
};
