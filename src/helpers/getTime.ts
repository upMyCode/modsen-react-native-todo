export default function getTime(date: Date) {
  const options = {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  } as const;

  const transformToUSFormat = date.toLocaleString('en-US', options);
  const time = transformToUSFormat.match(
    /^([1-9]|0[1-9]|1[0-2]):[0-5][0-9] ([AaPp][Mm])$/
  );

  if (time) {
    const timeInEuropeFormat = time[0];

    return timeInEuropeFormat;
  }

  return '';
}
