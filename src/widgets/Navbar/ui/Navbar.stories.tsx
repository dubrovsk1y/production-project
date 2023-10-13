import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Navbar } from "./Navbar";

const meta = {
  title: "Widgets/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Light.decorators = [StoreDecorator({ user: { authData: undefined } })];
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: { id: 1, username: "jr.dubrovskiy@gmail.com" } } })];
