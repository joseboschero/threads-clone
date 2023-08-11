const intervals = [
  { limit: 1, unit: 'h' },
  { limit: 24, unit: 'd' },
  { limit: 7 * 24, unit: 'sem' },
  { limit: 30 * 24, unit: 'm' },
  { limit: 12 * 30 * 24, unit: 'a' },
];

export default function formatTimeDifference(diffInHours) {
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    if (diffInHours < interval.limit) {
      if (i === 0) {
        return `${diffInHours}${interval.unit}`;
      } else {
        const prevInterval = intervals[i - 1];
        const diffInPrevUnit = Math.floor(diffInHours / prevInterval.limit);
        return `${diffInPrevUnit === 1 ? '1' : diffInPrevUnit}${prevInterval.unit}`;
      }
    }
  }

  const lastInterval = intervals[intervals.length - 1];
  const diffInLastUnit = Math.floor(diffInHours / lastInterval.limit);
  return `${diffInLastUnit === 1 ? '1' : diffInLastUnit}${lastInterval.unit}`;
}
