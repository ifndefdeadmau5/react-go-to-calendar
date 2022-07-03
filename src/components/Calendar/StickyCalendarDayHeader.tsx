import { useEffect, useRef, useState } from "react";
import CalendarDayHeader, { CalendarDayHeaderProps } from "./CalendarDayHeader";

interface StickyCalendarDayHeaderProps extends CalendarDayHeaderProps {
  scrollContainerId?: string;
  disableAnimation?: boolean;
  minFontSize?: number;
  fontSizeScale?: number;
  marginLeftScale?: number;
}

const StickyCalendarDayHeader = ({
  scrollContainerId,
  minFontSize = 14,
  fontSizeScale = 6,
  marginLeftScale = 8,
  ...props
}: StickyCalendarDayHeaderProps) => {
  const calendarHeaderRef = useRef<HTMLElement | null>(null);
  const [node, setNode] = useState(null);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = new window.IntersectionObserver(
      ([entry]) => {
        if (calendarHeaderRef.current) {
          calendarHeaderRef.current.style.fontSize = `${
            minFontSize +
            fontSizeScale -
            entry.intersectionRatio * fontSizeScale
          }px`;
          calendarHeaderRef.current.style.marginLeft = `${
            marginLeftScale - entry.intersectionRatio * marginLeftScale
          }px`;
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
        rootMargin: "-34px", // FIXME: remove constant
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
      className="sticky-goto-calendar-day-header"
      ref={setNode}
      showYear
      {...props}
    />
  );
};

export default StickyCalendarDayHeader;
