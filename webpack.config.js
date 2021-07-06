//commonjs
const path = require("path")

module.exports = {
    //工作模式：
    mode: 'none',
    //入口文件
    entry: './src/main.js',
    //输出
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'), //必须为绝对路径
        //打包文件path
        publicPath: 'dist/'
    },
    module: {
        //其他资源模块加载规则
        rules: [{
            test: /.md$/,
            // use: './markdown-loader' //可以使用路径
            use: [
                'html-loader',
                './markdown-loader'
            ]
        }]
    }
}