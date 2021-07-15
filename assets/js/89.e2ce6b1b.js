(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{585:function(s,a,n){"use strict";n.r(a);var e=n(2),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("话不多说，直接开撸！")]),s._v(" "),n("h2",{attrs:{id:"在-linux-上安装-node-环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-linux-上安装-node-环境"}},[s._v("#")]),s._v(" 在 linux 上安装 node 环境")]),s._v(" "),n("ol",[n("li",[s._v("去官网下载\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/202006281752385.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3OTY5ODk3,size_16,color_FFFFFF,t_70",alt:".tar.gz"}}),s._v("\n下载成功后用 WinSCP 上传至 /root 目录")]),s._v(" "),n("li",[s._v("执行命令解压安装")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("tar -xvf node-v12.18.1-linux-x64.tar.xz\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200628175704925.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3OTY5ODk3,size_16,color_FFFFFF,t_70",alt:"shell"}})]),s._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[s._v("创建文件夹 ~/app/nodejs，然后移到该目录下（方便管理）")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mv node-v12.18.1-linux-x64 ~/app/nodejs\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[s._v("全局配置 node")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo ln -s ~/app/nodejs/node-v12.18.1-linux-x64/bin\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"5"}},[n("li",[s._v("查看是否安装成功")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" node -v\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200628180137923.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3OTY5ODk3,size_16,color_FFFFFF,t_70",alt:"node-v"}}),s._v(" "),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/202006281805014.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3OTY5ODk3,size_16,color_FFFFFF,t_70",alt:"npm-v"}})]),s._v(" "),n("h2",{attrs:{id:"安装-express-测试-app-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-express-测试-app-js"}},[s._v("#")]),s._v(" 安装 Express 测试 app.js")]),s._v(" "),n("p",[s._v("Express 是基于 Node.js 平台，快速、开放、极简的 Web 开发框架")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm install express --save\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020062819205124.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3OTY5ODk3,size_16,color_FFFFFF,t_70",alt:"install express"}}),s._v("\n新建 app.js，开启 3000 端口（并且要在安全组添加3000端口允许访问）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var express = require('express');\nvar app = express();\napp.get('/', function (req, res) {\n    res.send('Hello express!');\n});\nvar server = app.listen(3000, function () {\n    var host = server.address().address;\n    var port = server.address().port;\n});\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("node app.js // 启动服务\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200628193157251.jpg",alt:"nodedemo"}}),s._v("\n🆗到这就证明已成功部署 node demo 服务了!")]),s._v(" "),n("h2",{attrs:{id:"图床-支持多张上传"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图床-支持多张上传"}},[s._v("#")]),s._v(" 图床-支持多张上传")]),s._v(" "),n("ol",[n("li",[s._v("npm install formidable")]),s._v(" "),n("li",[s._v("npm install multer")]),s._v(" "),n("li",[s._v("新建文件夹目录 uploads")]),s._v(" "),n("li",[s._v("新建 index.html，这里直接贴代码")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<body>\n    <div style=\"max-width:1200px;margin:0 auto;text-align: center;margin-top: 150px;\">\n        <input type=\"file\" class=\"file\" name=\"file\" multiple=\"multiple\" />\n        <ul id='urlList'></ul>\n    </div>\n</body>\n<script>\n    document.querySelector('.file').addEventListener('change', function (e) {\n        let files = e.target.files\n        if (!files.length) return\n        // 上传文件 创建FormData\n        let formData = new FormData()\n        // 遍历FileList对象，拿到多个图片对象\n        for (let i = 0; i < files.length; i++) {\n            // formData中的append方法 如果已有相同的键，则会追加成为一个数组  注意:这里需要使用formData.getAll()获取\n            formData.append('upFile', files[i], files[i].name)\n        }\n        console.log(formData.getAll('upFile'))\n        // 将formdata发送到后台即可\n        // 我用的 axios.post('url', formData)\n        let xhr = new XMLHttpRequest()\n        xhr.open('post', '/upload', true)\n        xhr.send(formData);\n        xhr.onreadystatechange = function () {\n            if (xhr.readyState === 4 && xhr.status === 200) {\n                alert('success')\n                console.log(xhr.responseText)\n                let resObj = JSON.parse(xhr.responseText).message;\n                let hostport = document.location.host; //ip:端口号\n                resObj && resObj.forEach(item => {\n                    document.getElementById('urlList').innerHTML += '<a href=http://' + hostport +\n                        item + '>' + hostport + item + '</a><br>';\n                })\n            }\n        }\n    })\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br")])]),n("ol",{attrs:{start:"5"}},[n("li",[s._v("修改app.js，这里直接贴代码")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const express = require('express')\nconst fs = require(\"fs\");\nconst app = express()\nconst path = require('path')\nconst multer = require('multer')\nconst multerObj = multer({\n    dest: 'uploads/'\n}) //上传中间件\n\napp.use(multerObj.any())\n\n// 允许直接访问静态文件\napp.use('/uploads', express.static('uploads'));\n\napp.get('/', (req, res, next) => {\n    res.setHeader('Content-Type', 'text/html')\n    res.sendFile(path.join(__dirname, 'index.html'))\n})\n\napp.post('/upload', (req, res, next) => {\n    console.log(req.files)\n    file = req.files\n    resArr = []; // 返给前端做回显 link \n    // 多图：修改文件后缀\n    file.forEach((item) => {\n        //以下代码得到文件后缀\n        name = item.originalname;\n        nameArray = name.split('');\n        var nameMime = [];\n        l = nameArray.pop();\n        nameMime.unshift(l);\n        while (nameArray.length != 0 && l != '.') {\n            l = nameArray.pop();\n            nameMime.unshift(l);\n        }\n        //Mime是文件的后缀\n        Mime = nameMime.join('');\n        //重命名文件 加上文件后缀\n        // 这里的路径问题一定要注意：本瓜反复测试了很多才发现是“路径问题导致不能正常修改文件名”\n        fs.rename('./uploads/' + item.filename, './uploads/' + item.filename + Mime, (err) => {\n            if (err) {\n                console.log(err)\n            }\n        });\n        resArr.push(`/uploads/${item.filename + Mime}`)\n    });\n    res.send(200, {\n        'code': 1,\n        message: resArr\n    })\n})\napp.listen(3000)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br")])]),n("ol",{attrs:{start:"6"}},[n("li",[s._v("查看进程，杀死进程，重启")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("netstat -ntlp\nkill -9  NODE_PID\nnode app.js\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("如果在 aliyun 云控制台直接")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ctrl + c\nnode app.js\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ol",{attrs:{start:"7"}},[n("li",[s._v("效果展示：多图上传，返回图床链接，支持预览，大功告成！（样式自行优化啦！）\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200629152216312.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3OTY5ODk3,size_16,color_FFFFFF,t_70",alt:"结果展示1"}}),s._v(" "),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200629152216353.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3OTY5ODk3,size_16,color_FFFFFF,t_70",alt:"结果展示2"}})])]),s._v(" "),n("h2",{attrs:{id:"结语"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[s._v("#")]),s._v(" 结语")]),s._v(" "),n("p",[s._v("呜呼！"),n("a",{attrs:{href:"http://120.78.205.57:3000",target:"_blank",rel:"noopener noreferrer"}},[s._v("终于有自己的图床服务啦"),n("OutboundLink")],1),s._v("！")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/TUARAN/tarFigureBed",target:"_blank",rel:"noopener noreferrer"}},[s._v("github 地址"),n("OutboundLink")],1),s._v(" 开源不易，需要你鼓励！")]),s._v(" "),n("p",[s._v("不得不说，Node 真牛，是所有在全栈道路上挣扎前行的前端开发者的福音！JavaScript 是世界上最......")])])}),[],!1,null,null,null);a.default=t.exports}}]);