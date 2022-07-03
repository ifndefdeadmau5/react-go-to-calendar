import { ComponentStoryObj, Meta } from "@storybook/react";
import Calendar from "./Calendar";

export default {
  component: Calendar,
  parameters: {
    backgrounds: { default: "white" },
    layout: "fullscreen",
  },
} as Meta;

type Story = ComponentStoryObj<typeof Calendar>;
const Standard: Story = {
  render: (args) => (
    <div>
      <Calendar
        style={{
          maxHeight: "100vh",
        }}
        {...args}
      />
    </div>
  ),
  args: {},
};

export const DefaultStory: Story = {
  ...Standard,
};
