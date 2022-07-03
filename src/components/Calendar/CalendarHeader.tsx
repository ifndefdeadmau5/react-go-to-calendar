import { ReactNode } from "react";

export interface CalendarHeaderProps {
  weekend?: boolean;
  children?: ReactNode;
}

const CalendarHeader = (props: CalendarHeaderProps) => {
  const { children, weekend, ...others } = props;

  return (
    <div className="goto-calendar-header-cell" {...others}>
      <p>{children}</p>
    </div>
  );
};

export default CalendarHeader;
