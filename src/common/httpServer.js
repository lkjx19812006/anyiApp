// 数据请求地址 通过全局变量 打包引用不同的地址
export default class HttpServer {
    constructor(){
        this.url = process.env.NODE_ENV === 'development'? '测试地址': '正式环境地址'
    }
}