import { ComponentStoryObj, Meta } from "@storybook/react";
import CalendarDay from "./CalendarDay";

export default {
  component: CalendarDay,
  parameters: {
    backgrounds: { default: "white" },
  },
} as Meta;

type Story = ComponentStoryObj<typeof CalendarDay>;
const Standard: Story = {
  render: (args) => <CalendarDay {...args} />,
  args: {},
};

export const DefaultStory: Story = {
  ...Standard,
};
