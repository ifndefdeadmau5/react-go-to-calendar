import { DateTime } from "luxon";

export const findStartOfMonth = ({
  date,
  range,
}: {
  date: DateTime;
  range: number;
}) => {
  const wholeWeek = [...new Array(range)].map((_, i) => date.plus({ days: i }));
  return wholeWeek.find((v) => v.get("day") === 1);
};
