import T from 'prop-types';
import Card from './card';
import * as styles from './styles';
import config from '../config';

export default function Heading({
  reportNumber,
  submissionDate,
  startDate,
  endDate,
  reportType = "Commodore's",
}) {
  return (
    <Card style={{ paddingLeft: 0, paddingRight: 0 }}>
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

        <p styles={styles.p}>
          <strong>Submitted:</strong>
          {` ${submissionDate}`}
        </p>

        <p styles={styles.p}>
          {`${reportType} report: ${startDate} - ${endDate}`}
        </p>
      </center>
    </Card>
  );
}

Heading.propTypes = {
  reportNumber: T.number.isRequired,
};
