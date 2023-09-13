import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import 'webpack-dev-server';

export type BuildMode = "production" | "development";

export interface BuildEnv {
  mode: BuildMode,
  port: number,
}

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const PORT = env.port || 3000;
  const isDevBuild = mode === "development";

  const config: webpack.Configuration = {
    mode,
    devtool: isDevBuild ? "inline-source-map" : undefined,
    devServer: isDevBuild ? {
      hot: true,
      historyApiFallback: true,
      open: true,
      port: PORT,
    } : undefined,
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            // "style-loader",
            isDevBuild ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
              loader: "css-loader",
              options: {
                modules: {
                  auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                  localIdentName: isDevBuild
                    ? "[path][name]__[local]--[hash:base64:5]"
                    : "[hash:base64:8]",
                },
              },
            },
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      //absolute path
      preferAbsolute: true,
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      mainFiles: ["index"],
      alias: {},
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //   },
    // },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css'
      })
    ],
  }

  return config;
};