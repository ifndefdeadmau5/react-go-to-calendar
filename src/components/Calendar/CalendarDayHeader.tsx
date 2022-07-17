import { forwardRef } from "react";
import { findStartOfMonth, formatDate, getMonday } from "../../utils";

const YearMonth = ({
  datetime,
  offset = 0,
  ...others
}: {
  datetime: Date;
  offset?: number;
  className?: string;
}) => {
  const [year, month] = formatDate(datetime).split("-");

  return (
    <div {...others}>
      <span>{year}-</span>
      <span>{month}</span>
    </div>
  );
};

export interface CalendarDayHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  date: Date;
  showYear?: boolean;
}

const CalendarDayHeader = (
  {
    date,
    showYear = false,
    className,
    children,
    ...others
  }: CalendarDayHeaderProps,
  ref
) => {
  const day = date.getDate();
  const isStartOfMonth = day === 1;
  const startOfWeek = getMonday(date);
  const startOfMonth = findStartOfMonth({ date: startOfWeek, range: 7 }); // one week === 7 days

  return (
    <div
      ref={ref}
      className={`${className} goto-calendar-day-header`}
      {...others}
    >
      {showYear && startOfMonth ? (
        <YearMonth datetime={startOfMonth!} />
      ) : (
        children ?? <span />
      )}

      <div
        className={`goto-calendar-day-number ${
          showYear ? "toggle-opacity" : ""
        }`}
      >
        {isStartOfMonth && <span>{date.getMonth()}/</span>}
        <span>{day}</span>
      </div>
    </div>
  );
};

export default forwardRef(CalendarDayHeader);
