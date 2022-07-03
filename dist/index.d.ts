import * as react from 'react';
import { ReactNode, Dispatch, SetStateAction } from 'react';
import { DateTime } from 'luxon';

interface CalendarDayProps$1 extends React.HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    stickyCell?: boolean;
    day: DateTime;
}
declare const _default$3: react.ForwardRefExoticComponent<CalendarDayProps$1 & react.RefAttributes<unknown>>;

declare type Provided = {
    days: DateTime[];
    getDayProps: (index: number) => Partial<CalendarDayProps$1>;
};
declare type CalendarMonthChildrenFn = (provided: Provided) => JSX.Element[];
interface CalendarMonthProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    children?: CalendarMonthChildrenFn;
    days?: DateTime[];
}
declare const _default$2: react.ForwardRefExoticComponent<CalendarMonthProps & react.RefAttributes<unknown>>;

interface CalendarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    children?: CalendarMonthChildrenFn;
}
declare const CalendarHeaders: ({ className, }: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
declare const Calendar: ({ children, ...props }: CalendarProps) => JSX.Element;

interface CalendarDayProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}
declare const _default$1: react.ForwardRefExoticComponent<CalendarDayProps & react.RefAttributes<unknown>>;

interface CalendarDayHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    date: DateTime;
    showYear?: boolean;
}
declare const _default: react.ForwardRefExoticComponent<CalendarDayHeaderProps & react.RefAttributes<unknown>>;

interface StickyCalendarDayHeaderProps extends CalendarDayHeaderProps {
    scrollContainerId?: string;
    disableAnimation?: boolean;
    minFontSize?: number;
    fontSizeScale?: number;
    marginLeftScale?: number;
}
declare const StickyCalendarDayHeader: ({ scrollContainerId, minFontSize, fontSizeScale, marginLeftScale, ...props }: StickyCalendarDayHeaderProps) => JSX.Element;

interface useCalendarOptions {
    initialCursor?: DateTime;
    weeks?: number;
}
declare const useCalendar: (options?: useCalendarOptions) => [
    {
        days: DateTime[];
        months: DateTime[][];
    },
    Dispatch<SetStateAction<DateTime>>
];

export { Calendar, _default$1 as CalendarContainer, _default$3 as CalendarDay, _default as CalendarDayHeader, CalendarHeaders, _default$2 as CalendarMonth, StickyCalendarDayHeader, useCalendar };
