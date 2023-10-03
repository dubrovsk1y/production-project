import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";

const meta = {
  title: "Shared/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    isOpen: true,
    children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ad iusto voluptas ratione cupiditate excepturi repellendus quas fugiat aliquam delectus magnam accusamus reiciendis molestiae soluta nemo optio, neque a ut.",
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ad iusto voluptas ratione cupiditate excepturi repellendus quas fugiat aliquam delectus magnam accusamus reiciendis molestiae soluta nemo optio, neque a ut.",
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
