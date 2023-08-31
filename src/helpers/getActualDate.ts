export default function getActualDate() {
  const monthNames = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];
  const daysInWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const date = new Date();
  const year = date.getFullYear();
  const dayOfMonth = date.getDate();
  const dayOfWeek = daysInWeek[date.getDay()];
  const month = monthNames[date.getMonth()];

  return `${dayOfWeek},${month} ${dayOfMonth},${year}`;
}
