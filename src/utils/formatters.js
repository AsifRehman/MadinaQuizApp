export const formatRelativeTime = (isoString) => {
  if (!isoString) return '';
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return '';

  const diffMs = Date.now() - date.getTime();
  const absMs = Math.abs(diffMs);
  const units = [
    { label: 'year', ms: 365 * 24 * 60 * 60 * 1000 },
    { label: 'month', ms: 30 * 24 * 60 * 60 * 1000 },
    { label: 'week', ms: 7 * 24 * 60 * 60 * 1000 },
    { label: 'day', ms: 24 * 60 * 60 * 1000 },
    { label: 'hour', ms: 60 * 60 * 1000 },
    { label: 'minute', ms: 60 * 1000 },
    { label: 'second', ms: 1000 },
  ];

  for (const { label, ms } of units) {
    const value = Math.floor(absMs / ms);
    if (value >= 1) {
      return `${value} ${label}${value > 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
};

export const formatDate = (isoString) => {
  if (!isoString) return '';
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
