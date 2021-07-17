import T from 'prop-types';
import Card from './card';
import * as styles from './styles';
import config from '../config';

export default function Dates({
  startDate,
  endDate,
  submissionDate,
  to,
  cc,
  from,
}) {
  return (
    <Card>
      <img
        src={config.shipPatch.url}
        style={{ float: 'right' }}
        alt="ISD-II Challenge Patch"
        width="150"
      />

      <p styles={styles.p}>
        <strong>From:</strong>
        {` ${from}`}

        <br />

        <strong>To:</strong>
        {` ${to}`}

        <br />

        <strong>CC:</strong>
        {` ${cc}`}

        <br />

        <strong>Submitted:</strong>
        {` ${submissionDate}`}

        <br />

        <strong>For Dates:</strong>
        {` ${startDate} - ${endDate}`}
      </p>
    </Card>
  );
}

Dates.propTypes = {
  to: T.string,
  cc: T.string,
  from: T.string,
  startDate: T.string.isRequired,
  endDate: T.string.isRequired,
  submissionDate: T.string.isRequired,
};

Dates.defaultProps = {
  to: config.tccom.title,
  cc: `${config.soo.title}, ${config.coo.title}`,
  from: config.com.title,
};
