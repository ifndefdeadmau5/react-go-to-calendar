# react-go-to-calendar
Your go-to calendar library built with React(iCal style). comes with full customizability and fancy sticky animation.

## Features

- ↕️ Keep Scroll up and down
- 📶 Dynamic cell height
- 🗓 iCalendar style animation
- ✂️ Provides custom hook so that you can build your own calendar UI from scratch
- 🛡 Fully typed
- 🧩 Fully composable


## Installation
```sh
npm install @ifndefdeadmau5/react-go-to-calendar
```
## Storybook
[Link](https://62c58ee61cca03e84589abdf-pvwwggzmbg.chromatic.com/)

## Usage

To have a simple calendar rendered *without any hassle*, you'll probably just want to make use of the `<Calendar />` component right away.

```tsx

import {
  Calendar,
} from "@ifndefdeadmau5/react-go-to-calendar";
import "@ifndefdeadmau5/react-go-to-calendar/dist/index.css";

const BasicDemo = () => (
  <Calendar
    style={{
      // you need to specify container's height in order to make it scrollable
      maxHeight: "100vh",
    }}
  >
    {({ days, getDayProps }) =>
      days.map((day, i) => {
        return (
          <CalendarDay
            {...getDayProps(i)}
            key={day.toFormat("yyyy-MM-DD")}
            day={day}
          >
            {/* your custom cell content goes here */}
          </CalendarDay>
        );
      })
    }
  </Calendar>
);
```

...or, if you do appreciate maximum flexibility, we offer you a fine-grained control over about how all the calendar parts are composed.

```tsx
import {
  Calendar,
  CalendarDay,
  CalendarContainer,
  CalendarHeaders,
  CalendarMonth,
} from "@ifndefdeadmau5/react-go-to-calendar";
import "@ifndefdeadmau5/react-go-to-calendar/dist/index.css";

const LOOKUP_RANGE = 12;

const Demo = (args) => {
  const [{ months }, setCursor] = useCalendar({
    initialCursor: DateTime.now().minus({ weeks: LOOKUP_RANGE }),
    weeks: LOOKUP_RANGE * 2,
  });

  return (
    <CalendarContainer
      style={{
        maxHeight: "100vh",
      }}
    >
      <CalendarHeaders />
      {months.map((days) => {
        return (
          <CalendarMonth
            key={days?.[0]?.toFormat("yyyy-MM-DD")}
            days={days}
          >
            {({ days }) =>
              days.map((day, i) => {
                return (
                  <CalendarDay
                    key={day.toFormat("yyyy-MM-DD")}
                    day={day}
                    {...getDayProps(i)}
                  />
                );
              })
            }
          </CalendarMonth>
        );
      })}
    </CalendarContainer>
  );
};
```

## License

MIT © [ifndefdeadmau5](https://github.com/ifndefdeadmau5)
