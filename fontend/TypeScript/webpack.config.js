const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
    },
    resolve: {
        // 导入时可以省略的后缀
        extensions: ['.js', 'ts', 'tsx'],
    },
    module: {
        rules: [
            // TS 加载
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    // 本地开发的时候 定位代码问题，打包之后不需要，可以判定开发环境，线上不需要
    devtool:
        process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    devServer: {
        // 开发环境运行时的根目录文件夹
        contentBase: './dist',
        // webpack 启动本地服务之后打印的信息
        stats: 'errors-only',
        // 不启动压缩
        compress: false,
        // 启动服务主机
        host: 'localhost',
        // 启动端口
        port: 10086,
    },
    plugins: [
        new CleanWebpackPlugin({
            // build 之前清理该目录
            cleanOnceBeforeBuildPatterns: ['.dist'],
        }),
        new HtmlWebpackPlugin({
            // 编译时使用的模板
            template: './build/index.html',
        }),
    ],
};
