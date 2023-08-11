const intervals = [
  { limit: 1, unit: 'h' },
  { limit: 24, unit: 'd' },
  { limit: 7 * 24, unit: 'sem' },
  { limit: 30 * 24, unit: 'm' },
  { limit: 12 * 30 * 24, unit: 'a' },
];

export default function formatTimeDifference(diffInHours) {
  const interval = intervals.find((interval) => diffInHours < interval.limit);

  if (!interval) {
    const lastInterval = intervals[intervals.length - 1];
    const diffInLastUnit = Math.floor(diffInHours / lastInterval.limit);
    return `${diffInLastUnit === 1 ? '1' : diffInLastUnit}${lastInterval.unit}`;
  }

  if (interval === intervals[0]) {
    return `${diffInHours}${interval.unit}`;
  }

  const prevInterval = intervals[intervals.indexOf(interval) - 1];
  const diffInPrevUnit = Math.floor(diffInHours / prevInterval.limit);
  return `${diffInPrevUnit === 1 ? '1' : diffInPrevUnit}${prevInterval.unit}`;
}
