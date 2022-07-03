import { DateTime } from "luxon";
import { forwardRef, Fragment, ReactNode } from "react";
import CalendarDayHeader from "./CalendarDayHeader";
import StickyCalendarDayHeader from "./StickyCalendarDayHeader";

export interface CalendarDayProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  stickyCell?: boolean;
  day: DateTime;
}

const CalendarDay = (
  { children, stickyCell = false, day, ...others }: CalendarDayProps,
  ref
) => {
  return stickyCell ? (
    <Fragment key={day.toSeconds()}>
      <StickyCalendarDayHeader
        date={day}
        scrollContainerId={"calendar-scroll-container"}
      />
      <div
        ref={ref}
        className="goto-calendar-day-cell"
        {...others}
        key={day.toSeconds()}
        style={{
          gridRow: "2 / 3",
        }}
      >
        {children}
      </div>
    </Fragment>
  ) : (
    <div
      ref={ref}
      className="goto-calendar-day-cell"
      {...others}
      key={day.toSeconds()}
    >
      <CalendarDayHeader date={day} />
      {children}
    </div>
  );
};

export default forwardRef(CalendarDay);
