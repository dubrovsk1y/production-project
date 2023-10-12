import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextTheme } from "./Text";

const meta = {
  title: "Shared/Text",
  component: Text,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    title: "Lorem ipsum dolor sit amet, consectetur adip",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
  },
};

export const AllError: Story = {
  args: {
    theme: TextTheme.ERROR,
    title: "Lorem ipsum dolor sit amet, consectetur adip",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
  },
};

export const OnlyTitle: Story = {
  args: {
    title: "Lorem ipsum dolor sit amet, consectetur adip",
  },
};

export const OnlyText: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adip",
  },
};

export const AllDark: Story = {
  args: {
    title: "Lorem ipsum dolor sit amet, consectetur adip",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
  },
};

AllDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
  args: {
    title: "Lorem ipsum dolor sit amet, consectetur adip",
  },
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adip",
  },
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const AllDarkError: Story = {
  args: {
    theme: TextTheme.ERROR,
    title: "Lorem ipsum dolor sit amet, consectetur adip",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
  },
};

AllDarkError.decorators = [ThemeDecorator(Theme.DARK)];
