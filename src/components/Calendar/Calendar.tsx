/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import { DateTime } from "luxon";
import { Fragment } from "react";
import CalendarDay from "../CalendarDay";
import CalendarDayHeader from "./CalendarDayHeader";
import useCalendar from "./useCalendar";
import StickyCalendarDayHeader from "./StickyCalendarDayHeader";
import CalendarHeader from "./CalendarHeader";

const SCROLL_CONTAINER_ID = "calendar-scroll-container";

interface CalendarProps {
  className?: string;
}

const gridContainerStyle = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, minmax(220px, 1fr));
`;

const headerStyle = css`
  ${css(gridContainerStyle)};
  position: sticky;
  top: 0;
  z-index: 2;
  padding-top: 10px;
  background: white;
`;

const Calendar = (props: CalendarProps) => {
  const today = DateTime.now().startOf("day");
  const [{ months }, setCursor] = useCalendar({
    initialCursor: DateTime.now().minus({ weeks: 12 }),
    weeks: 24,
  });

  return (
    <div
      id={SCROLL_CONTAINER_ID}
      css={css`
        width: 100%;
        overflow-y: auto;
      `}
      {...props}
    >
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          p {
            margin: 0;
          }
        `}
      />
      <div css={headerStyle}>
        <CalendarHeader>Mon</CalendarHeader>
        <CalendarHeader>Tue</CalendarHeader>
        <CalendarHeader>Wed</CalendarHeader>
        <CalendarHeader>Thu</CalendarHeader>
        <CalendarHeader>Fri</CalendarHeader>
        <CalendarHeader weekend>Sat</CalendarHeader>
        <CalendarHeader weekend>Sun</CalendarHeader>
      </div>
      {months.map((days) => (
        <div key={days[0].toFormat("yyyy-MM-dd")} css={gridContainerStyle}>
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
                  date={day}
                  css={css`
                    grid-row: 2 / 3;
                  `}
                />
              </Fragment>
            ) : (
              <CalendarDay
                // ref={isToday ? todayCellRef : null}
                key={day.toSeconds()}
                date={day}
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
