import { DateTime } from "luxon";
import useCalendar from "./useCalendar";
import CalendarHeader from "./CalendarHeader";
import CalendarContainer from "./CalendarContainer";
import CalendarMonth, { CalendarMonthChildrenFn } from "./CalendarMonth";
import "./calendar.css";

interface CalendarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children?: CalendarMonthChildrenFn;
}

export const CalendarHeaders = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`goto-calendar-week-grid goto-calendar-week-header ${className}`}
  >
    <CalendarHeader>Mon</CalendarHeader>
    <CalendarHeader>Tue</CalendarHeader>
    <CalendarHeader>Wed</CalendarHeader>
    <CalendarHeader>Thu</CalendarHeader>
    <CalendarHeader>Fri</CalendarHeader>
    <CalendarHeader>Sat</CalendarHeader>
    <CalendarHeader>Sun</CalendarHeader>
  </div>
);

const Calendar = ({ children, ...props }: CalendarProps) => {
  const [{ months }, setCursor] = useCalendar({
    initialCursor: DateTime.now().minus({ weeks: 12 }),
    weeks: 24,
  });

  return (
    <CalendarContainer {...props}>
      <CalendarHeaders />
      {months.map((days) => (
        <CalendarMonth key={days?.[0]?.toFormat("yyyy-MM-dd")} days={days}>
          {children}
        </CalendarMonth>
      ))}
    </CalendarContainer>
  );
};

export default Calendar;
