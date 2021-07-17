import T from 'prop-types';
import Card from './card';
import * as styles from './styles';
import config from '../config';

export default function Heading({
  reportNumber,
  submissionDate,
  startDate,
  endDate,
}) {
  return (
    <Card>
      <center>
        <img
          alt="ISD-II Challenge Banner"
          style={{ width: '100%' }}
          src={config.shipBanner.url}
        />

        <h2
          style={{
            ...styles.h2,
            marginTop: '1em',
            marginBottom: '1em',
            fontStyle: 'italic',
          }}
        >
          {config.reportTitleFormat(reportNumber)}
        </h2>

        <p>
          <strong>Submitted:</strong>
          {` ${submissionDate}`}
        </p>

        <p styles={styles.p}>

          <br />

          {`Commodore's report: ${startDate} - ${endDate}`}
        </p>
      </center>
    </Card>
  );
}

Heading.propTypes = {
  reportNumber: T.number.isRequired,
};
