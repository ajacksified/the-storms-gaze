/* eslint react/jsx-props-no-spreading: 0, react/forbid-prop-types: 0 */

import T from 'prop-types';
import * as styles from '../components/styles';

function MyApp({ Component, pageProps }) {
  return (
    <div style={styles.body}>
      <Component {...pageProps} />
    </div>
  );
}

MyApp.propTypes = {
  Component: T.any.isRequired,
  pageProps: T.object.isRequired,
};

export default MyApp;
