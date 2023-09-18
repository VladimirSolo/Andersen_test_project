import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import "webpack-dev-server";
import dotenv from "dotenv";

const dotenvConfig = dotenv.config();

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
      chunkFilename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
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
            {
              loader: "sass-loader",
              options: {
                additionalData: "@import \"src/app/styles/global.scss\";",
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.(png|jpe?g|gif|woff2|woff)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      // absolute path
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
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(dotenvConfig.parsed),
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
      }),
      isDevBuild && new webpack.HotModuleReplacementPlugin(),
      isDevBuild && new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    ],
  };

  return config;
};
