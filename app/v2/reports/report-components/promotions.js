import { Heading, UnorderedList } from 'jsx-md';

import {
  getPromotionsFromActivityData,
} from '../../../../src/fetchData';

export default function ShipStats({ activityData }) {
  const promotions = getPromotionsFromActivityData(activityData.activityData);

  if (!promotions.length) { return null; }

  return [
    <Heading level={5} key="title">Promotions</Heading>,
    <UnorderedList key="shipstats">
      {promotions.map(({ name, date }) => (
        `${name} (${date})`
      ))}
    </UnorderedList>,
  ];
}
