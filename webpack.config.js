const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    const devMode = options.mode !== 'production';
    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "./public"),
            filename: "script.js",
            publicPath: '/'
        },
        mode: "development",
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader',
                    options: {
                        fix: true
                    }
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.scss$/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    loader: 'file-loader'
                }
            ]
        },
        resolve: { extensions: ["*", ".js", ".jsx"] },
        devServer: {
            contentBase: path.join(__dirname, "public/"),
            port: 3000,
            hot: true,
            historyApiFallback: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new MiniCssExtractPlugin({ filename: '[name].css' }),
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    };
};
