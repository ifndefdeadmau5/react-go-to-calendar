import { css } from "@emotion/react";
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
        css={css`
          max-height: 100vh;
          /* max-height: calc(100vh - 92px); */
        `}
        {...args}
      />
    </div>
  ),
  args: {},
};

export const DefaultStory: Story = {
  ...Standard,
};
