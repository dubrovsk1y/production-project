import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { AppLink } from "./AppLink";

const meta = {
  title: "Shared/AppLink",
  component: AppLink,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: "Text",
    to: "",
  },
};

export const Dark: Story = {
  args: {
    children: "Text",
    to: "",
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
