import T from 'prop-types';
import Card from './card';
import Link from './link';
import * as styles from './styles';

export default function Orders({ missions, children }) {
  return (
    <Card>
      <h5 style={styles.h5}>
        Squadron Orders
      </h5>

      {children}

      <div style={{ ...styles.p, marginTop: '1em' }}>
        <strong>Fly:</strong>
        <ul>
          {missions.map((m) => (
            <li key={m.id}>
              <Link
                href={`https://tc.emperorshammer.org/download.php?id=${m.id}&type=info`}
                target="_blank"
                rel="noreferrer"
              >
                {m.name}
              </Link>
              {` - ${m.title}`}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

Orders.propTypes = {
  missions: T.arrayOf(T.shape({
    name: T.string.isRequired,
    id: T.number.isRequired,
    title: T.string.isRequired,
  })).isRequired,
  children: T.node,
};

Orders.defaultProps = {
  children: null,
};
