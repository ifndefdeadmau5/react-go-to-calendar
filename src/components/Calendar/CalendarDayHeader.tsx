/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import { DateTime } from "luxon";
import { forwardRef } from "react";
import { findStartOfMonth } from "../../utils";

const dayNumberStyle = ({ showYear }: { showYear: boolean }) => css`
  padding: 1px 0px;
  border-radius: 14px;
  ${showYear &&
  css`
    opacity: var(--day-opacity);
  `}
`;

const YearMonth = ({
  datetime,
  offset = 0,
  ...others
}: {
  datetime: DateTime;
  offset?: number;
  className?: string;
}) => (
  <div
    css={css`
      z-index: 2;
    `}
    {...others}
  >
    <span>{datetime.toFormat("yyyy")}-</span>
    <span>{datetime.toFormat("MM")}</span>
  </div>
);

export interface CalendarDayHeaderProps {
  date: DateTime;
  highlight?: boolean;
  weekend?: boolean;
  showYear?: boolean;
}

const CalendarDayHeader = (
  {
    date,
    highlight = false,
    weekend = false,
    showYear = false,
    ...others
  }: CalendarDayHeaderProps,
  ref
) => {
  const day = date.get("day");
  const isStartOfMonth = day === 1;
  const today = DateTime.now().startOf("day");
  const isToday = date.startOf("day").equals(today);
  const startOfWeek = date.startOf("week");
  const startOfMonth = findStartOfMonth({ date: startOfWeek, range: 7 }); // one week = 7days
  const shouldHighlight = isToday || highlight;

  return (
    <div
      ref={ref}
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px 2px 12px;
      `}
      {...others}
    >
      {showYear && startOfMonth ? (
        <YearMonth className="CalendarDay-yearMonth" datetime={startOfMonth!} />
      ) : (
        <span className="CalendarDay-yearMonth" />
      )}

      <div
        // alignItems="center"
        css={(theme) =>
          dayNumberStyle({
            theme,
            highlight: shouldHighlight,
            weekend,
            showYear,
          })
        }
      >
        {isStartOfMonth && <span>{date.get("month")}/</span>}
        <span>{day}</span>
      </div>
    </div>
  );
};

export default forwardRef(CalendarDayHeader);
