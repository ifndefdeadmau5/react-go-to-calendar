export const findStartOfMonth = ({
  date,
  range,
}: {
  date: Date;
  range: number;
}) => {
  const wholeWeek = [...new Array(range)].map((_, i) => addDays(date, i));
  return wholeWeek.find((v) => v.getDate() === 1);
};

export const getMonday = (d: Date) => {
  const day = d.getDay();
  const diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
};

export const addDays = (date: Date, days: number) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

export const addWeeks = (date: Date, weeks: number) => {
  return addDays(date, 7 * weeks);
};

export const formatDate = (date) => {
  const mm = date.getMonth() + 1; // getMonth() is zero-based
  const dd = date.getDate();

  return [
    date.getFullYear(),
    String(mm).padStart(2, "0"),
    String(dd).padStart(2, "0"),
  ].join("-");
};
