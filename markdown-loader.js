const marked = require('marked')
module.exports = source => {
    // console.log(source)
    // return "console.log('hello loader')"
    const html = marked(source)
        // return `module.exports = ${JSON.stringify(html)}`
        //1
        // return `export default ${JSON.stringify(html)}`
        //2 返回字符串交给下一个loader处理
    return html

}