/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme } from "@emotion/react";
// import { Box, BoxProps } from "@mui/material";
import { DateTime } from "luxon";
import { forwardRef, ReactNode } from "react";

const rootStyle = css`
  grid-row: span 2;
  min-height: 135px;

  box-shadow: inset -1px 0px 0px #ededf0, inset 0px -1px 0px #ededf0;
`;

interface CalendarDayProps {
  //   droppableId?: string;
  date: DateTime;
  highlight?: boolean;
  children?: ReactNode;
  css?: Interpolation<Theme>;
}

const CalendarDay = (
  { children, date, highlight = false, ...others }: CalendarDayProps,
  ref
) => {
  const day = date.get("day");
  //   const isLastSevenDay = day > date.daysInMonth - 7;
  const today = DateTime.now().startOf("day");
  const isToday = date.startOf("day").equals(today);

  return (
    <div ref={ref} css={rootStyle} {...others}>
      {children}
    </div>
  );
};

export default forwardRef(CalendarDay);
