var webpack = require('webpack');

module.exports = {
    entry: "./assets/blackburn.js",
    output: {
        path: "static/",
        filename: "blackburn.js",
	publicPath: "/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
	    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
	    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin()
    ]
};
