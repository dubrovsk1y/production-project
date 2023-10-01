import type { Preview } from "@storybook/react";
import { Theme } from "../../src/app/providers/ThemeProvider";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import i18n from "../../src/shared/config/i18n/i18nForStorybook";
import "../../src/app/styles/index.scss";

const preview: Preview = {
  globals: {
    locale: "ru",
    locales: {
      ru: "Русский",
      en: "English",
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator()],
  parameters: {
    i18n,
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
