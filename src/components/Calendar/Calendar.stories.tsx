import { ComponentStoryObj, Meta } from "@storybook/react";
import { DateTime } from "luxon";
import { nanoid } from "nanoid";
import { useEffect, useRef } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Waypoint } from "react-waypoint";
import Calendar, { CalendarHeaders } from "./Calendar";
import CalendarContainer from "./CalendarContainer";
import CalendarDay from "./CalendarDay";
import CalendarMonth from "./CalendarMonth";
import Column from "./Demo/Column";
import InfiniteScrollVirtual from "./Demo/InfiniteScrollVirtual";
import InfiniteScrollWayPoint from "./Demo/InfiniteScrollWayPoint";
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
                key={day.toFormat("yyyy-MM-dd")}
                day={day}
                style={{ ...(highlight && { background: "#a5d6a7" }) }}
              >
                {/* your custom cell content goes here */}
              </CalendarDay>
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

const InfiniteScrollWayPointStory: Story = {
  render: InfiniteScrollWayPoint,
  args: {},
};

export const InfiniteScrollWithWayPoint: Story = {
  ...InfiniteScrollWayPointStory,
};

const InfiniteScrollVirtualStory: Story = {
  render: InfiniteScrollVirtual,
  args: {},
};

export const InfiniteScrollWithVirtual: Story = {
  ...InfiniteScrollVirtualStory,
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

const DnDDemo = () => (
  <DragDropContext onDragEnd={() => {}}>
    <Calendar
      style={{
        // you need to specify container's height in order to make it scrollable
        maxHeight: "100vh",
      }}
    >
      {({ days, getDayProps }) =>
        days.map((day, i) => {
          return (
            <CalendarDay
              {...getDayProps(i)}
              key={day.toFormat("yyyy-MM-dd")}
              day={day}
            >
              <Column droppableId={nanoid()} />
            </CalendarDay>
          );
        })
      }
    </Calendar>
  </DragDropContext>
);

const WithDnD: Story = {
  render: DnDDemo,
  args: {},
};
export const WithDnDStory: Story = {
  ...WithDnD,
};
