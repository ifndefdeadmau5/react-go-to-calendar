import { ReactNode } from "react";

export interface CalendarHeaderProps {
  children?: ReactNode;
}

const CalendarHeader = (props: CalendarHeaderProps) => {
  const { children, ...others } = props;

  return (
    <div className="goto-calendar-header-cell" {...others}>
      <p>{children}</p>
    </div>
  );
};

export default CalendarHeader;
