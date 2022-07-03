import { DateTime } from 'luxon';
import { ReactNode } from 'react';

interface CalendarDayProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    stickyCell?: boolean;
    day: DateTime;
}

declare type Provided = {
    days: DateTime[];
    getDayProps: (index: number) => Partial<CalendarDayProps>;
};
declare type CalendarMonthChildrenFn = (provided: Provided) => JSX.Element[];

interface CalendarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    children?: CalendarMonthChildrenFn;
}
declare const Calendar: ({ children, ...props }: CalendarProps) => JSX.Element;

export { Calendar };
