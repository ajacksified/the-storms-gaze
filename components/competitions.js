import T from 'prop-types';
import Card from './card';
import CompetitionItem from './competitionItem';
import * as styles from './styles';

/* eslint react/jsx-props-no-spreading: 0 */

export default function Competitions({ competitions }) {
  return (
    <Card>
      <h5 style={styles.h5}>
        Competitions
      </h5>

      { competitions.map((c) => <CompetitionItem {...c} key={c.id} />) }
    </Card>
  );
}

Competitions.propTypes = {
  competitions: T.arrayOf(T.shape(CompetitionItem.propTypes)).isRequired,
};
