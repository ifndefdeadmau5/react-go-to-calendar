import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { addDays, addWeeks, getMonday } from "../../utils";

interface useCalendarOptions {
  initialCursor?: Date;
  weeks?: number;
}

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_chunk
const chunk = (input: Date[], size: number) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

const useCalendar: (options?: useCalendarOptions) => [
  {
    days: Date[];
    months: Date[][];
  },
  Dispatch<SetStateAction<Date>>
] = (options = {}) => {
  const {
    weeks: numberOfWeeks = 8,
    initialCursor: initialDateCursor = new Date(),
  } = options;
  const [cursor, setCursor] = useState(getMonday(initialDateCursor));

  const days = useMemo(() => {
    return [...Array(numberOfWeeks)].reduce<Date[]>((acc, _, weekIndex) => {
      const startOfWeek = addWeeks(cursor, weekIndex);
      const wholeWeek = [...Array(7)].map((_, dayIndex) =>
        addDays(startOfWeek, dayIndex)
      );
      return [...acc, ...wholeWeek];
    }, []);
  }, [numberOfWeeks, cursor]);

  // additional logic, divide by month
  const dividedByMonth = useMemo(
    () =>
      chunk(days, 7).reduce<Date[][]>((acc, week: Date[]) => {
        const startOfWeek = week[0];

        const shouldCreateNewMonth =
          startOfWeek.getDate() === 1 ||
          startOfWeek.getMonth() !== addDays(startOfWeek, 6).getMonth();

        if (shouldCreateNewMonth) {
          return [...acc, [...week]];
        }

        // not creating new array, just appending to the last month's array
        const [last, ...rest] = [acc.pop(), ...acc];
        return [...rest, [...(last ?? []), ...week]];
      }, []),
    [days]
  );

  return [
    {
      days,
      months: dividedByMonth,
    },
    setCursor,
  ];
};

export default useCalendar;
