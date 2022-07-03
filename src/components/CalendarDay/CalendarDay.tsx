import { forwardRef, ReactNode } from "react";

interface CalendarDayProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const CalendarDay = ({ children, ...others }: CalendarDayProps, ref) => {
  return (
    <div ref={ref} className="goto-calendar-day-cell" {...others}>
      {children}
    </div>
  );
};

export default forwardRef(CalendarDay);
