import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonVariant } from "./Button";

const meta = {
  title: "Shared/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const OutlinedDisabled: Story = {
  args: {
    children: "Outlined",
    variant: ButtonVariant.OUTLINED,
    disabled: true,
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
