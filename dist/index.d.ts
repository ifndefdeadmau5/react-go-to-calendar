import { DateTime } from 'luxon';

declare type Provided = {
    days: DateTime[];
};
interface CalendarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    children?: (provided: Provided) => JSX.Element[];
}
declare const Calendar: ({ children, ...props }: CalendarProps) => JSX.Element;

export { Calendar };
