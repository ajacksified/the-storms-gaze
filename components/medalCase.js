import T from 'prop-types';
import { medalImages } from './medals';

export default function MedalCase({ medals: awardedMedals }) {
  const string = Object.keys(awardedMedals).map((medal) => (
    `${awardedMedals[medal]}x ${medal}`
  ));

  const medalImageList = Object.keys(awardedMedals).map((medal) => {
    const MedalImage = medalImages[medal.toLowerCase()];

    if (MedalImage) {
      return (
        <MedalImage key={medal} />
      );
    }

    return null;
  });

  return (
    <div>
      <strong>{'Medals Awarded: '}</strong>
      {string.join('; ')}
      <div style={{ marginTop: '10px' }}>
        {medalImageList}
      </div>
    </div>
  );
}

MedalCase.propTypes = {
  medals: T.any.isRequired,
};
