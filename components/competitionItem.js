import T from 'prop-types';
import Link from './link';
import * as styles from './styles';

export default function CompetitionItem({
  id,
  name,
  ends,
  units,
  highlight,
  notes,
}) {
  return (
    <div
      style={{
        ...(highlight ? styles.highlighted : {}),
        marginBottom: '0.5em',
        paddingBottom: '0.5em',
      }}
    >
      <Link
        href={`https://tc.emperorshammer.org/competitions.php?id=${id}`}
        target="_blank"
        rel="noreferrer"
        style={{
          ...(highlight ? styles.highlightedLink : {}),
        }}
      >
        <strong>{name}</strong>
      </Link>

      { ` until ${ends} for the ${units}.`}

      {notes ? <p>{notes}</p> : null}
    </div>
  );
}

CompetitionItem.propTypes = {
  id: T.string.isRequired,
  name: T.string.isRequired,
  ends: T.string.isRequired,
  units: T.string.isRequired,
  highlight: T.bool,
  notes: T.string,
};

CompetitionItem.defaultProps = {
  highlight: false,
  notes: null,
};
