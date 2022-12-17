import { Heading, UnorderedList } from 'jsx-md';

import {
  getStatsFromActivityData,
} from '../../../../src/fetchData';

export default function ShipStats({ activityData }) {
  const shipStats = getStatsFromActivityData(activityData.activityData);

  return [
    <Heading level={5} key="title">Ship Stats</Heading>,
    <UnorderedList key="shipstats">
      {`Missions completed: ${shipStats.missions}`}
      {`Reviews submitted: ${shipStats.reviews}`}
      {`IU courses completed: ${shipStats.iuCourses}`}
      {`LoCs earned: ${shipStats.locs}`}
      {`LoSs earned: ${shipStats.loss}`}
    </UnorderedList>,
  ];
}
