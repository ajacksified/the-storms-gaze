'use client';

import { useState } from 'react';
import dayjs from 'dayjs';

import { loadPilotActivitydata, loadShipData } from '../../../src/fetchData';

const DEFAULT_START_DATE = dayjs().startOf('month').format('YYYY-MM-DD');
const DEFAULT_END_DATE = dayjs().endOf('month').format('YYYY-MM-DD');

export async function fetchData(squadrons, coPIN, startDate, endDate, setActivityData, setLoading) {
  setLoading(true);

  try {
    const activityData = await loadShipData(squadrons, startDate, endDate);
    const comActivity = await loadPilotActivitydata(coPIN, startDate, endDate);

    setActivityData({
      activityData,
      comActivity,
    });
  } catch (e) {
    console.error(e);
  }

  setLoading(false);
}

export default function Loader({
  startDate = DEFAULT_START_DATE,
  endDate = DEFAULT_END_DATE,
  squadrons,
  coPIN,
  onLoadingChange,
  onLoaded,
}) {
  const [currentStartDate, setStartDate] = useState(startDate);
  const [currentEndDate, setEndDate] = useState(endDate);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetchData(
          squadrons,
          coPIN,
          startDate,
          endDate,
          onLoaded,
          onLoadingChange,
        );
      }}
    >
      <input
        type="date"
        value={currentStartDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <input
        type="date"
        value={currentEndDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      <button type="submit">Go</button>
    </form>
  );
}
