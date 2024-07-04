const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    mode: "development",
    entry: "./frontend/main.js",
    output: {
        path: path.resolve(__dirname, 'public', 'assets'),
        filename: "js/bundle.js",
        publicPath: "/assets/"
    }, 
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                },
            },
            {
                test: /\.css$/,
                use: [{loader: MiniCssExtractPlugin.loader}, "css-loader"]
            }]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "css/styles.css"
    })],
    devtool: "source-map"
}
