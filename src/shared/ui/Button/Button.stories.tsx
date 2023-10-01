import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonVariant } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Shared/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Text: Story = {
  args: {
    children: "Text",
    variant: ButtonVariant.TEXT,
  },
};

export const Outlined: Story = {
  args: {
    children: "Outlined",
    variant: ButtonVariant.OUTLINED,
  },
};

export const Contained: Story = {
  args: {
    children: "Contained",
    variant: ButtonVariant.CONTAINED,
  },
};

export const Square: Story = {
  args: {
    square: true,
    variant: ButtonVariant.OUTLINED,
  },
};
