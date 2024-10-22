export function formatNumber(num: number) {
  if (num >= 1e6) {
    if (num.toString().length === 7) {
      return Math.floor(num / 1e6 * 10) / 10 + 'M';
    }
    return Math.floor(num / 1e6) + 'M';
  } else if (num >= 1e3) {
    if (num.toString().length === 4) {
      return Math.floor(num / 1e3 * 10) / 10 + 'K';
    }
    return Math.floor(num / 1e3) + 'K';
  }
  return num.toString();
}

export function getTimeDifference(dateString: string) {
  const dateToCompare = new Date(dateString);
  const currentDate = new Date();

  const differenceInMilliseconds = currentDate.getTime() - dateToCompare.getTime();

  const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  const differenceInDays = Math.floor(differenceInHours / 24);
  const differenceInWeeks = Math.floor(differenceInDays / 7);
  const differenceInMonths = Math.floor(differenceInDays / 30);
  const differenceInYears = Math.floor(differenceInDays / 365);

  if (differenceInSeconds < 60) {
    return `${differenceInSeconds} second${differenceInSeconds !== 1 ? 's' : ''}`;
  } else if (differenceInMinutes < 60) {
    return `${differenceInMinutes} minute${differenceInMinutes !== 1 ? 's' : ''}`;
  } else if (differenceInHours < 24) {
    return `${differenceInHours} hour${differenceInHours !== 1 ? 's' : ''}`;
  } else if (differenceInDays < 7) {
    return `${differenceInDays} day${differenceInDays !== 1 ? 's' : ''}`;
  } else if (differenceInWeeks < 4) {
    return `${differenceInWeeks} week${differenceInWeeks !== 1 ? 's' : ''}`;
  } else if (differenceInMonths < 12) {
    return `${differenceInMonths} month${differenceInMonths !== 1 ? 's' : ''}`;
  } else {
    return `${differenceInYears} year${differenceInYears !== 1 ? 's' : ''}`;
  }
}
