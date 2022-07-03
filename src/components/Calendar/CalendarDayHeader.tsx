import { DateTime } from "luxon";
import { forwardRef } from "react";
import { findStartOfMonth } from "../../utils";

const YearMonth = ({
  datetime,
  offset = 0,
  ...others
}: {
  datetime: DateTime;
  offset?: number;
  className?: string;
}) => (
  <div {...others}>
    <span>{datetime.toFormat("yyyy")}-</span>
    <span>{datetime.toFormat("MM")}</span>
  </div>
);

export interface CalendarDayHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  date: DateTime;
  highlight?: boolean;
  weekend?: boolean;
  showYear?: boolean;
}

const CalendarDayHeader = (
  {
    date,
    highlight = false,
    weekend = false,
    showYear = false,
    className,
    ...others
  }: CalendarDayHeaderProps,
  ref
) => {
  const day = date.get("day");
  const isStartOfMonth = day === 1;
  const today = DateTime.now().startOf("day");
  const isToday = date.startOf("day").equals(today);
  const startOfWeek = date.startOf("week");
  const startOfMonth = findStartOfMonth({ date: startOfWeek, range: 7 }); // one week = 7days
  const shouldHighlight = isToday || highlight;

  return (
    <div
      ref={ref}
      className={`${className} goto-calendar-day-header`}
      {...others}
    >
      {showYear && startOfMonth ? (
        <YearMonth datetime={startOfMonth!} />
      ) : (
        <span />
      )}

      <div
        className={`goto-calendar-day-number ${
          showYear ? "toggle-opacity" : ""
        }`}
      >
        {isStartOfMonth && <span>{date.get("month")}/</span>}
        <span>{day}</span>
      </div>
    </div>
  );
};

export default forwardRef(CalendarDayHeader);
