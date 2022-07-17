import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import { addWeeks, formatDate } from "../../../utils";
import { CalendarHeaders } from "../Calendar";
import CalendarContainer from "../CalendarContainer";
import CalendarDay from "../CalendarDay";
import CalendarMonth from "../CalendarMonth";
import useCalendar from "../useCalendar";

const LOOKUP_RANGE = 48;

const InfiniteScrollVirtual = (args) => {
  const [{ months }, setCursor] = useCalendar({
    initialCursor: addWeeks(new Date(), -1 * LOOKUP_RANGE),
    weeks: LOOKUP_RANGE * 2,
  });
  const rootRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: months.length,
    getScrollElement: () => rootRef.current,
    estimateSize: () => 702,
  });

  return (
    <CalendarContainer
      ref={rootRef}
      style={{
        maxHeight: "100vh",
        backgroundColor: "#fefefe",
      }}
    >
      <CalendarHeaders />
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => {
          const days = months[virtualItem.index];
          const key = formatDate(days?.[0]);
          return (
            <CalendarMonth
              id={key}
              key={key}
              ref={virtualItem.measureElement}
              days={days}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              {({ days, getDayProps }) =>
                days.map((day, i) => {
                  return (
                    <CalendarDay
                      key={formatDate(day)}
                      day={day}
                      {...getDayProps(i)}
                    />
                  );
                })
              }
            </CalendarMonth>
          );
        })}
      </div>
    </CalendarContainer>
  );
};

export default InfiniteScrollVirtual;
