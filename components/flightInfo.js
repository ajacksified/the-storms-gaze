import T from 'prop-types';
import config from '../config';
import * as styles from './styles';

export default function FlightInfo({
  flight: flightNumber,
}) {
  const flight = config.flights[flightNumber - 1];
  if (!flight) { return null; }

  return (
    <>
      <img
        alt={`Flight ${flight} ship`}
        src={`https://tc.emperorshammer.org/images/craft/${flight.ship}.png`}
        style={{ float: 'right' }}
      />

      <h2>{`Flight ${flightNumber}: ${flight.name}`}</h2>
      <p style={styles.p}><em>{flight.motto}</em></p>
    </>
  );
}

FlightInfo.propTypes = {
  flight: T.number.isRequired,
};
