import { omit } from 'lodash/object';
import T from 'prop-types';
import { ranks } from './ranks';
import Link from './link';
import MedalCase from './medalCase';
import activityItem from './activityItem';
import * as styles from './styles';
import Card from './card';

export default function PilotActivity({
  PIN,
  name,
  rank,
  activity,
  communication,
  flightActivity,
  otherActivity,
  notes,
}) {
  const { MEDALS_AWARDED: awardedMedals } = activity;

  return (
    <Card>
      <h5 style={{ ...styles.h5, marginBottom: '1em' }}>
        <Link
          href={`https://tc.emperorshammer.org/record.php?pin=${PIN}&type=profile`}
          target="_blank"
          rel="noreferrer"
          style={{ position: 'relative', bottom: '7px' }}
        >
          Activity for {ranks[rank] ? `${ranks[rank].toUpperCase()} ${name}` : 'Dunno'}
        </Link>
      </h5>

      <dl style={{ marginTop: '0', marginBottom: '1em' }}>
        <dt style={styles.dt}>Communication:</dt>
        <dd style={styles.dd}>{communication || 'None'}</dd>

        {flightActivity ? (
          <>
            <dt style={styles.dt}>Flight Activity:</dt>
            <dd style={styles.dd}>{flightActivity}</dd>
          </>
        ) : null}

        { Object.keys(omit(activity, 'MEDALS_AWARDED', 'IGNORE_ME_IM_CONFUSING_DATA')).map((activityName) => (
          activityItem[activityName]
            ? activityItem[activityName](activity[activityName])
            : null
        ))}

        {otherActivity ? (
          <>
            <dt style={styles.dt}>Other:</dt>
            <dd style={styles.dd}>{otherActivity}</dd>
          </>
        ) : null}

        {notes ? (
          <>
            <dt style={styles.dt}>Notes:</dt>
            <dd style={styles.dd}>{notes}</dd>
          </>
        ) : null}

        {awardedMedals ? (
          <MedalCase medals={awardedMedals} />
        ) : null }
      </dl>
    </Card>
  );
}

PilotActivity.propTypes = {
  PIN: T.number.isRequired,
  name: T.string.isRequired,
  rank: T.oneOf(Object.keys(ranks)).isRequired,
  activity: T.any.isRequired,
  flightActivity: T.string,
  communication: T.string,
  notes: T.string,
  otherActivity: T.string,
};

PilotActivity.defaultProps = {
  flightActivity: null,
  notes: null,
  otherActivity: null,
  communication: null,
};
