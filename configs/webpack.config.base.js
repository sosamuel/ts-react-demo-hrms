const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tsImportPluginFactory = require("ts-import-plugin");

const rootDir = path.resolve(__dirname, "..");
const appDir = path.resolve(rootDir, "src");
const outDir = path.resolve(rootDir, "dist");
const publicDir = path.resolve(rootDir, "public");
const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: {
    app: path.resolve(appDir, "index.tsx")
  },
  output: {
    path: outDir,
    filename: "[name].[contenthash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            getCustomTransformers: () => ({
              before: [tsImportPluginFactory({ style: "css" })]
            }),
            compilerOptions: {
              module: "es2015"
            }
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    port: 7001
  },
  devtool: "inline-source-map",
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@components": path.resolve(appDir, "components")
    }
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(publicDir, "index.html")
    }),
    new MiniCssExtractPlugin()
  ]
};
