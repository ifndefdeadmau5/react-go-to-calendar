import { DateTime } from "luxon";
import { Fragment } from "react";
import CalendarDay from "../CalendarDay";
import CalendarDayHeader from "./CalendarDayHeader";
import useCalendar from "./useCalendar";
import StickyCalendarDayHeader from "./StickyCalendarDayHeader";
import CalendarHeader from "./CalendarHeader";
import "./calendar.css";

const SCROLL_CONTAINER_ID = "calendar-scroll-container";

interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Calendar = (props: CalendarProps) => {
  const today = DateTime.now().startOf("day");
  const [{ months }, setCursor] = useCalendar({
    initialCursor: DateTime.now().minus({ weeks: 12 }),
    weeks: 24,
  });

  return (
    <div
      id={SCROLL_CONTAINER_ID}
      className="goto-calendar-container"
      {...props}
    >
      <div className="goto-calendar-week-grid goto-calendar-week-header">
        <CalendarHeader>Mon</CalendarHeader>
        <CalendarHeader>Tue</CalendarHeader>
        <CalendarHeader>Wed</CalendarHeader>
        <CalendarHeader>Thu</CalendarHeader>
        <CalendarHeader>Fri</CalendarHeader>
        <CalendarHeader weekend>Sat</CalendarHeader>
        <CalendarHeader weekend>Sun</CalendarHeader>
      </div>
      {months.map((days) => (
        <div
          key={days[0].toFormat("yyyy-MM-dd")}
          className="goto-calendar-week-grid"
        >
          {days.map((day, i) => {
            const nthDayOfWeek = i % 7;
            const isWeekend = nthDayOfWeek === 5 || nthDayOfWeek === 6;
            const isToday = day.startOf("day").equals(today);

            return i === 0 ? (
              <Fragment key={day.toSeconds()}>
                <StickyCalendarDayHeader
                  date={day}
                  weekend={isWeekend}
                  scrollContainerId={SCROLL_CONTAINER_ID}
                />
                <CalendarDay
                  // ref={isToday ? todayCellRef : null}
                  key={day.toSeconds()}
                  style={{
                    gridRow: "2 / 3",
                  }}
                />
              </Fragment>
            ) : (
              <CalendarDay
                // ref={isToday ? todayCellRef : null}
                key={day.toSeconds()}
              >
                <CalendarDayHeader date={day} weekend={isWeekend} />
              </CalendarDay>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
