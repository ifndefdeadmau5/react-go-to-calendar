import { forwardRef, ReactNode } from "react";

interface CalendarDayProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const CalendarContainer = ({ children, ...others }: CalendarDayProps, ref) => {
  return (
    <div
      ref={ref}
      id={"calendar-scroll-container"}
      className="goto-calendar-container"
      {...others}
    >
      {children}
    </div>
  );
};

export default forwardRef(CalendarContainer);
