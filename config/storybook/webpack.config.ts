import webpack from "webpack";
import path from "path";

const loaders = {
  test: /\.s[ac]ss$/i,
  use: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        modules: {
          auto: (resPath: string) => Boolean(resPath.includes(".module.")),
          localIdentName: "[hash:base64:8]",
        },
      },
    },
    {
      loader: "sass-loader",
      options: {
        additionalData: "@import \"src/app/styles/global.scss\";",
      },
    },
  ],
};

export default ({ config }: {config: webpack.Configuration}) => {
  config.resolve?.modules?.push(path.resolve(__dirname, "../../src"));
  config.resolve?.extensions?.push(".ts", ".tsx");

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  config.module?.rules?.push(loaders);

  return config;
};
