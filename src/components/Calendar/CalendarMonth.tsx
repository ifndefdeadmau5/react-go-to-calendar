import { forwardRef } from "react";
import CalendarDay, { CalendarDayProps } from "./CalendarDay";

type Provided = {
  days: Date[];
  getDayProps: (index: number) => Partial<CalendarDayProps>;
};

export type CalendarMonthChildrenFn = (provided: Provided) => JSX.Element[];

interface CalendarMonthProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children?: CalendarMonthChildrenFn;
  days?: Date[];
}

const CalendarMonth = (
  { children, days = [], ...others }: CalendarMonthProps,
  ref
) => {
  return (
    <div ref={ref} className="goto-calendar-week-grid" {...others}>
      {children
        ? children({
            days,
            getDayProps: (index) => {
              return {
                stickyCell: index === 0,
              };
            },
          })
        : days.map((day, i) => {
            return (
              <CalendarDay
                key={day.toString()}
                day={day}
                stickyCell={i === 0}
              />
            );
          })}
    </div>
  );
};

export default forwardRef(CalendarMonth);
