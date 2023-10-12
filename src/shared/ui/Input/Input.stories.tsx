import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Input } from "./Input";

const meta = {
  title: "Shared/Input",
  component: Input,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    id: "light",
    placeholder: "Light",
    label: "Light",
  },
};

export const Dark: Story = {
  args: {
    id: "dark",
    placeholder: "Dark",
    label: "Dark",
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
