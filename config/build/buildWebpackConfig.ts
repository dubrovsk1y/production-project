import { buildResolvers } from "./buildResolvers";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildDevSever } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {    
      rules: buildLoaders()
    },
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevSever(options) : undefined
  }
}