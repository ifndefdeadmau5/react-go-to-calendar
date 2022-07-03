import { ComponentStoryObj, Meta } from "@storybook/react";
import { DateTime } from "luxon";
import { useEffect, useRef } from "react";
import { Waypoint } from "react-waypoint";
import Calendar, { CalendarHeaders } from "./Calendar";
import CalendarContainer from "./CalendarContainer";
import CalendarDay from "./CalendarDay";
import CalendarMonth from "./CalendarMonth";
import useCalendar from "./useCalendar";

export default {
  component: Calendar,
  parameters: {
    backgrounds: { default: "white" },
    layout: "fullscreen",
  },
} as Meta;

type Story = ComponentStoryObj<typeof Calendar>;
const Standard: Story = {
  render: (args) => (
    <div>
      <Calendar
        style={{
          maxHeight: "100vh",
        }}
      />
    </div>
  ),
  args: {},
};
export const DefaultStory: Story = {
  ...Standard,
};

const CustomDayCell: Story = {
  render: (args) => (
    <div>
      <Calendar
        style={{
          maxHeight: "100vh",
        }}
      >
        {({ days, getDayProps }) =>
          days.map((day, i) => {
            const highlight = day.startOf("month").equals(day);
            return (
              <CalendarDay
                {...getDayProps(i)}
                key={day.toFormat("yyyy-MM-DD")}
                day={day}
                style={{ ...(highlight && { background: "#a5d6a7" }) }}
              />
            );
          })
        }
      </Calendar>
    </div>
  ),
  args: {},
};

export const CustomDayCellStory: Story = {
  ...CustomDayCell,
};

const LOOKUP_RANGE = 12;

const WithWayPointDemo = (args) => {
  const [{ months }, setCursor] = useCalendar({
    initialCursor: DateTime.now().minus({ weeks: LOOKUP_RANGE }),
    weeks: LOOKUP_RANGE * 2,
  });
  const rootRef = useRef(null);
  const currentMonthRef = useRef(null);

  useEffect(() => {
    if (currentMonthRef.current && rootRef.current) {
      const element = currentMonthRef.current;
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
          />
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

const WithWayPoint: Story = {
  render: WithWayPointDemo,
  args: {},
};

export const WithWayPointStory: Story = {
  ...WithWayPoint,
};

const WithLayout: Story = {
  render: (args) => (
    <div>
      <div style={{ height: "56px", backgroundColor: "#757575" }} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr minmax(100px, 220px)",
        }}
      >
        <Calendar
          style={{
            maxHeight: "100vh",
          }}
        />
        <div style={{ backgroundColor: "#eeeeee" }} />
      </div>
    </div>
  ),
  args: {},
};
export const WithLayoutStory: Story = {
  ...WithLayout,
};
