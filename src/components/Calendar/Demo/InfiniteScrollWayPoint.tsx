import { DateTime } from "luxon";
import { useEffect, useRef } from "react";
import { Waypoint } from "react-waypoint";
import { CalendarHeaders } from "../Calendar";
import CalendarContainer from "../CalendarContainer";
import CalendarDay from "../CalendarDay";
import CalendarMonth from "../CalendarMonth";
import useCalendar from "../useCalendar";

const LOOKUP_RANGE = 48;

const InfiniteScrollWayPoint = (args) => {
  const [{ months }, setCursor] = useCalendar({
    initialCursor: DateTime.now().minus({ weeks: LOOKUP_RANGE }),
    weeks: LOOKUP_RANGE * 2,
  });
  const rootRef = useRef(null);
  const currentMonthRef = useRef(null);

  useEffect(() => {
    if (currentMonthRef.current && rootRef.current) {
      const element = currentMonthRef.current;
      // FIXME: remove constant
      const headerOffset = 34;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + rootRef.current.scrollTop - headerOffset;

      // scrolls to the current month
      rootRef.current.scrollTo({
        top: offsetPosition,
        behavior: "auto",
      });
    }
  }, []);

  return (
    <CalendarContainer
      ref={rootRef}
      style={{
        maxHeight: "100vh",
      }}
    >
      <CalendarHeaders />
      <Waypoint
        topOffset={"-30%"}
        onEnter={({ previousPosition }) => {
          if (previousPosition === "above")
            setCursor((prev) => prev.minus({ weeks: LOOKUP_RANGE }));
        }}
      />
      {months.map((days) => {
        const isCurrent =
          days?.[7]?.get("month") === DateTime.now().get("month");
        return (
          <CalendarMonth
            ref={isCurrent ? currentMonthRef : null}
            key={days?.[0]?.toFormat("yyyy-MM-DD")}
            days={days}
          >
            {({ days, getDayProps }) =>
              days.map((day, i) => {
                return (
                  <CalendarDay
                    key={day.toFormat("yyyy-MM-DD")}
                    day={day}
                    {...getDayProps(i)}
                  />
                );
              })
            }
          </CalendarMonth>
        );
      })}
      <Waypoint
        bottomOffset={"-30%"}
        onEnter={({ previousPosition }) => {
          if (previousPosition === "below")
            setCursor((prev) => prev.plus({ weeks: LOOKUP_RANGE }));
        }}
      />
    </CalendarContainer>
  );
};

export default InfiniteScrollWayPoint;
