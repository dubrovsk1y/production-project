import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  if (config.resolve?.modules) {
    config.resolve.modules.push(paths.src);
  }

  if (config.resolve?.extensions) {
    config.resolve.extensions.push(".ts", ".tsx");
  }

  if (config.module?.rules) {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule) => {
      // @ts-ignore
      if (/svg/.test(rule.test)) {
        return { ...rule as RuleSetRule, exclude: /\.svg$/i };
      }

      return rule;
    });

    config.module.rules.push(buildSvgLoader());
    config.module.rules.push(buildCssLoader(true));
  }

  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: true,
    __API__: JSON.stringify(""),
  }));

  return config;
};
