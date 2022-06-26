import { DateTime } from "luxon";
import { Dispatch, SetStateAction, useMemo, useState } from "react";

interface useCalendarOptions {
  initialCursor?: DateTime;
  weeks?: number;
}

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_chunk
const chunk = (input: DateTime[], size: number) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

const useCalendar: (options?: useCalendarOptions) => [
  {
    days: DateTime[];
    months: DateTime[][];
  },
  Dispatch<SetStateAction<DateTime>>
] = (options = {}) => {
  const {
    weeks: numberOfWeeks = 48,
    initialCursor: initialDateCursor = DateTime.now().startOf("week"),
  } = options;
  const [cursor, setCursor] = useState(initialDateCursor.startOf("week"));

  const days = useMemo(() => {
    return [...Array(numberOfWeeks)].reduce<DateTime[]>((acc, _, weekIndex) => {
      const startOfWeek = cursor.plus({ weeks: weekIndex });
      const wholeWeek = [...Array(7)].map((_, dayIndex) =>
        startOfWeek.plus({ days: dayIndex })
      );
      return [...acc, ...wholeWeek];
    }, []);
  }, [numberOfWeeks, cursor]);

  // additional logic, divide by month
  const dividedByMonth = useMemo(
    () =>
      chunk(days, 7).reduce<DateTime[][]>((acc, week) => {
        const startOfWeek = week[0];
        const shouldCreateNewMonth =
          startOfWeek.get("day") === 1 ||
          startOfWeek.plus({ days: 6 }).get("month") !==
            startOfWeek.get("month");

        if (shouldCreateNewMonth) {
          return [...acc, [...week]];
        }

        // not creating new array, just appending to the last month's array
        const [last, ...rest] = [acc.pop(), ...acc];
        return [...rest, [...(last ?? []), ...week]];
      }, []),
    [days]
  );

  return [{ days, months: dividedByMonth }, setCursor];
};

export default useCalendar;
