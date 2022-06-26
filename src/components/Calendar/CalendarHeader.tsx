/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { css } from "@emotion/react";

const rootStyle = css`
  background-color: white;
`;

const dateContainerStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  padding: 5px 12px;
`;

export interface CalendarHeaderProps {
  weekend?: boolean;
  children?: ReactNode;
}

const CalendarHeader = (props: CalendarHeaderProps) => {
  const { children, weekend, ...others } = props;

  return (
    <div css={rootStyle} {...others}>
      <div css={dateContainerStyle}>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default CalendarHeader;
