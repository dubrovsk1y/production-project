import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import LoginForm from "./LoginForm";

const meta = {
  title: "Features/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [StoreDecorator({ loginForm: { username: "jr.dubrovskiy@gmail.com", password: "123456" } })];

export const WithError: Story = {
  args: {},
};

WithError.decorators = [StoreDecorator({ loginForm: { username: "jr.dubrovskiy@gmail.com", password: "123456", error: "ERROR" } })];

export const Loading: Story = {
  args: {},
};

Loading.decorators = [StoreDecorator({ loginForm: { username: "jr.dubrovskiy@gmail.com", password: "123456", isLoading: true } })];
