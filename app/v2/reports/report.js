// import heading from './heading';
import { Heading, HorizontalRule, Bold } from 'jsx-md';
import ShipStats from './report-components/shipstats';
import CombatRatings from './report-components/combatratings';
import Promotions from './report-components/promotions';

export default function Report({ activityData, startDate, endDate }) {
  if (!activityData) {
    return null;
  }

  // markdown renderer doesn't understand fragments, so we'll skip them sadface

  return [
    <Heading level={1} key="heading">Report #XX</Heading>,
    '\n',
    <Bold key="dates">{startDate} - {endDate}</Bold>,
    <HorizontalRule key="hr1" />,
    '\n',
    <ShipStats key="shipstats" activityData={activityData} />,
    '\n',
    <HorizontalRule key="hr2" />,
    '\n',
    <Promotions key="promotions" activityData={activityData} />,
    '\n',
    <HorizontalRule key="hr3" />,
    '\n',
    <CombatRatings key="combatratings" activityData={activityData} />,
  ];
}
