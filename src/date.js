export function calculateWeekday(date) {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekday[date.getDay()];
}
