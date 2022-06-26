/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { forwardRef, useEffect, useRef, useState } from "react";
import CalendarDayHeader, { CalendarDayHeaderProps } from "./CalendarDayHeader";

interface StickyCalendarDayHeaderProps extends CalendarDayHeaderProps {
  scrollContainerId?: string;
}

const StickyCalendarDayHeader = (
  { scrollContainerId, ...props }: StickyCalendarDayHeaderProps,
  ref
) => {
  const calendarHeaderRef = useRef<HTMLElement | null>(null);
  const [node, setNode] = useState(null);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = new window.IntersectionObserver(
      ([entry]) => {
        console.log("intersecting");
        if (calendarHeaderRef.current) {
          calendarHeaderRef.current.style.fontSize = `${
            24 - entry.intersectionRatio * 8
          }px`;
          // calendarHeaderRef.current.style.marginLeft = `${
          //   8 - entry.intersectionRatio * 8
          // }px`;
          // calendarHeaderRef.current.style.paddingTop = `${9 - entry.intersectionRatio * 8}px`;
          calendarHeaderRef.current.style.setProperty(
            "--day-opacity",
            `${entry.intersectionRatio < 0.8 ? 0 : 1}`
          );
        }
      },
      {
        root: scrollContainerId
          ? document.querySelector(`#${scrollContainerId}`)
          : null,
        rootMargin: "-29px",
        threshold: [
          ...Array(100)
            .fill(0)
            .map((_, i) => (i + 1 * 1) / 100),
        ],
      }
    );

    const { current: currentObserver } = observer;

    if (node) {
      currentObserver.observe(node);
      calendarHeaderRef.current = node;
    }

    return () => currentObserver.disconnect();
  }, [node, scrollContainerId]);

  return (
    <CalendarDayHeader
      ref={setNode}
      css={css`
        grid-row: 1 / 2;
        position: sticky;
        top: 0;
        z-index: 3;
        box-shadow: inset -1px 0px 0px #ededf0;
        align-items: flex-start;
        height: max-content;
      `}
      showYear
      {...props}
    />
  );
};

export default forwardRef(StickyCalendarDayHeader);
