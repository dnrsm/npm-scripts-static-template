const path = require("path"),
  webpack = require("webpack"),
  UglifyJSPlugin = require("uglifyjs-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
  { VueLoaderPlugin } = require("vue-loader"),
  HardSourceWebpackPlugin = require("hard-source-webpack-plugin")

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === "development"

  return {
    entry: ["@babel/polyfill", "./src/js/main.js"],
    devtool: IS_DEVELOPMENT ? "source-map" : "none",
    optimization: {
      usedExports: true,
      minimizer: IS_DEVELOPMENT
        ? []
        : [
            new UglifyJSPlugin({
              uglifyOptions: {
                compress: {
                  drop_console: true
                }
              }
            }),
            new OptimizeCSSAssetsPlugin({})
          ]
    },
    output: {
      path: path.join(__dirname, "./dist/"),
      filename: "js/bundle.js"
    },
    resolve: {
      extensions: [".js", ".vue", ".ts"],
      alias: {
        vue$: "vue/dist/vue.esm.js"
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      modules: false
                    }
                  ]
                ]
              }
            }
          ]
        },
        {
          enforce: "pre",
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
          options: {
            fix: true
          }
        },
        {
          test: /\.ts?$/,
          use: [
            {
              loader: "ts-loader"
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          loader: "vue-loader"
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                url: false,
                // minimize: true,
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-resources-loader",
              options: {
                resources: [path.resolve(__dirname, "./src/scss/_vars.scss")]
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HardSourceWebpackPlugin(),
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: "css/vue_extract.css"
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 7777
    }
  }
}
