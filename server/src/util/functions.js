export const unixToDate = ts => {
  const a = new Date(ts);
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const time = date + ' ' + month + ' ' + year;
  return time;
};

export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];
