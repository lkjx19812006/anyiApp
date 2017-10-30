// glob 路由自动给化尝试
var path = require('path')
var glob = require('glob')
var fs = require('fs')

//读取的路径
var BASE_PATH = path.resolve(__dirname, '../src/pages/');
var pagesPath = path.resolve(BASE_PATH, '**')

// 同步拿到所有的文件即文件夹 是可选的
var files = glob.sync(pagesPath);

BASE_PATH = BASE_PATH.replace(/\\/g, '/');
pagesPath = pagesPath.replace(/\\/g, '/');

var writeRoute = {
    //过滤数组
    filterFiles: function () {
        var result = [];
        if (files && files instanceof Array) {
            for (var i = 1; i < files.length; i++) {
                var obj = {
                    path: '',
                    url: '',
                    component: ''
                }
                var pathName = files[i];
                if (pathName) {
                    if (this.hasVueFile(pathName)) {
                        pathName = files[i].split('.vue')[0];
                    }
                    var path = pathName.split(BASE_PATH)[1];
                    obj.component = "resolve => require(['../pages" + path + ".vue'], resolve)";
                    obj.url = files[i];
                    obj.path = path.replace(/_/g, ':');//带参数的路由替换

                    if (result.length === 0) {
                        result.push(obj)
                    } else {
                        this.resultAddItem(result, obj)
                    }
                }
            }
            return result
        }
        return []
    },
    //递归函数 处理路由
    resultAddItem: function (result, obj) {
        var leng = result.length;
        var flag = false;
        for (var i = 0; i < leng; i++) {
            var item = result[i];
            if (obj.url === item.url) {
                flag = true;
                break;
            } else if (obj.path.indexOf(item.path) > -1) {
                flag = true;
                if (obj.path === item.path) {
                    item.component = obj.component;
                } else {
                    if (!item.children) {
                        item.children = [];
                        item.children.push(obj);
                    } else {
                        this.resultAddItem(item.children, obj)
                    }
                }
            }
        }
        //只存储一级文件
        if (!flag && obj.path.split('/').length === 2) {
            result.push(obj);
        }
    },
    //判断是不是vue文件
    hasVueFile: function (pathName) {
        return pathName.indexOf('.vue') > -1 ? true : false;
    },
    writeRoute: function (content) {
        //先删除文件 再创建文件
        var url = path.resolve(__dirname, '../src/router/index.js')
        if (fs.existsSync(url)) {
            fs.unlinkSync(url);
        }

        content.forEach(function () {

        });


        //写入文
        fs.writeFileSync(url, "const Foo = () => import('./Foo.vue') \n const aaa = () => import('./Foo.vue') \n const bbb = () => import('./Foo.vue')" )

        

    },
    writeRouteItem: function(){

    },
    init: function () {
        this.writeRoute(this.filterFiles());
        return
    }
}

module.exports = writeRoute;
