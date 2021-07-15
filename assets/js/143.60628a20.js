(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{637:function(s,n,a){"use strict";a.r(n);var e=a(2),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("本文首发于："),a("a",{attrs:{href:"https://juejin.cn/post/6919684767575179278",target:"_blank",rel:"noopener noreferrer"}},[s._v("掘金"),a("OutboundLink")],1),s._v("，欢迎三连~")]),s._v(" "),a("h2",{attrs:{id:"序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#序"}},[s._v("#")]),s._v(" 序")]),s._v(" "),a("p",[s._v("近来遇项目打包之事，撰文记之。以期分享，皆有所获。")]),s._v(" "),a("h2",{attrs:{id:"前提"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[s._v("#")]),s._v(" 前提")]),s._v(" "),a("p",[s._v("前提有两点，需要得到你的认同：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("【后台管理系统】框架和 UI 组件库最强组合为 vue-element-admin + Element UI！(●'◡'●)")])]),s._v(" "),a("li",[a("p",[s._v("webpack4 最核心的特性是 【splitChunks】，splitChunks 最核心的配置是 cacheGroups！")])])]),s._v(" "),a("p",[s._v("基于这个两个前提，我们再进行下一步。")]),s._v(" "),a("h2",{attrs:{id:"分析工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析工具"}},[s._v("#")]),s._v(" 分析工具")]),s._v(" "),a("p",[s._v("webpack 打包分析有它就够了："),a("a",{attrs:{href:"https://www.npmjs.com/package/webpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack-bundle-analyzer"),a("OutboundLink")],1)]),s._v(" "),a("ul",[a("li",[s._v("安装")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm install --save-dev webpack-bundle-analyzer\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("配置：因为 vue-element-admin 基于 vueCli4，所以在 vue.config.js chainWebpack 中设置")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" config.plugin('BundleAnalyzerPlugin').use(BundleAnalyzerPlugin).tap(() => [\n      {\n        rel: 'BundleAnalyzerPlugin',\n        analyzerMode: 'server', // 'server': 启动端口服务；'static': 生成 report.html；'disabled': 配合 generateStatsFile 使用；\n        generateStatsFile: false, // 是否生成stats.json文件\n        analyzerHost: '127.0.0.1',\n        analyzerPort: '8877',\n        reportFilename: 'report.html',\n        defaultSizes: 'parsed',\n        openAnalyzer: false,\n        statsFilename: 'stats.json',\n        statsOptions: null,\n        excludeAssets: null\n      }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("其中 "),a("strong",[s._v("analyzerMode")]),s._v(" 的设置比较重要。")]),s._v(" "),a("ul",[a("li",[s._v("运行：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm run dev 或 npm run build\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("访问：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://127.0.0.1:8877\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"现状问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现状问题"}},[s._v("#")]),s._v(" 现状问题")]),s._v(" "),a("p",[s._v("看一下咱们的打包分析图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c160f93146934274a66e9e7e445fd8dd~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),s._v(" "),a("p",[s._v("得出如上图的分包并不难，vue-element-admin 自带这些配置。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("config.optimization.splitChunks({\n        chunks: 'all',\n        cacheGroups: {\n          libs: {\n            name: 'chunk-libs',\n            test: /[\\\\/]node_modules[\\\\/]/,\n            priority: 10,\n            chunks: 'initial' // only package third parties that are initially dependent\n          },\n          elementUI: {\n            name: 'chunk-elementUI', // split elementUI into a single package\n            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app\n            test: /[\\\\/]node_modules[\\\\/]_?element-ui(.*)/ // in order to adapt to cnpm\n          },\n          commons: {\n            name: 'chunk-commons',\n            test: resolve('src/components'), // can customize your rules\n            minChunks: 3, //  minimum common number\n            priority: 5,\n            reuseExistingChunk: true\n          }\n        }\n      })\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("如果你暂时还看不懂这些配置项，先别急，后面会一一陈述。")]),s._v(" "),a("p",[s._v("你只用先知道：它拆了初始化加载的第三方包、拆了 Element UI 库、拆了 src/components。")]),s._v(" "),a("p",[s._v("一切"),a("strong",[s._v("似乎好像")]),s._v("还不错，但是我们并不满足。")]),s._v(" "),a("p",[s._v("实际上，咱们跑一下 "),a("code",[s._v("npm run build:test")]),s._v(" 也会报警告。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/87fea74d109f4a64b82d5b46af32ea2f~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),s._v(" "),a("p",[s._v("那么还有哪些点可以继续优化？结合以上分析图和 test warning，很明显，我们需要思考：")]),s._v(" "),a("ol",[a("li",[s._v("Echarts 的体积大小不能忽视，如何处理它？是首页加载还是异步加载？要按需引入吗？")]),s._v(" "),a("li",[s._v("vue.js 等库还能不能再拆？")]),s._v(" "),a("li",[s._v("首页 Entrypoints 所依赖的包还能不能再优化？")]),s._v(" "),a("li",[s._v("包的体积应控制在什么范围？包太大，加载会太慢！包太小，会消耗 HTTP 请求连接！"),a("a",{attrs:{href:"https://www.zhihu.com/question/34401250",target:"_blank",rel:"noopener noreferrer"}},[s._v("更多：合并 HTTP 请求是否真的有意义？"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("更多......")])]),s._v(" "),a("p",[s._v("淦！打包什么的，多打几遍就完事了。十遍不行就一百遍，一百遍不行就一千遍，一千遍不行就......")]),s._v(" "),a("h2",{attrs:{id:"优化的结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化的结果"}},[s._v("#")]),s._v(" 优化的结果")]),s._v(" "),a("p",[s._v("淦完后得出如下打包分析图：")]),s._v(" "),a("p",[s._v("本瓜成功的将打包大小从 "),a("strong",[s._v("3.1MB")]),s._v(" 变成了 "),a("strong",[s._v("2.36MB")]),s._v("，文件数从 "),a("strong",[s._v("68个")]),s._v(" 打包到了 "),a("strong",[s._v("43个")]),s._v(" "),a("strong",[s._v("！！！")]),s._v("，既实现了"),a("strong",[s._v("拆包")]),s._v("（拆公共库），也实现了"),a("strong",[s._v("并包")]),s._v("（合并极小的包）。")]),s._v(" "),a("p",[s._v("虽然这不会是最终的结果，但本瓜可以先下一个结论：")]),s._v(" "),a("blockquote",[a("p",[s._v("配置 cacheGroups，权衡拆包与并包二者，便是 webpack 分包的"),a("strong",[s._v("究极奥义！")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/66b37d38ac914f16a8b97cd5f5e33c64~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),s._v(" "),a("p",[s._v("以下是 cacheGroups 配置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" config.optimization.splitChunks({\n        chunks: 'all',\n         cacheGroups: {\n            vue: {\n              name: 'chunk-vuejs',\n              test: /[\\\\/]node_modules[\\\\/]_?vue(.*)/,\n              priority: 20\n            },\n            elementUI: {\n              name: 'chunk-elementUI', // split elementUI into a single package\n              priority: 30, // the weight needs to be larger than libs and app or it will be packaged into libs or app\n              test: /[\\\\/]node_modules[\\\\/]_?element-ui(.*)/ // in order to adapt to cnpm\n            },\n            commons: { // split async commons chunk\n              name: 'chunk-async-commons',\n              minChunks: 2,\n              priority: 40,\n              chunks: 'async'\n            },\n            echarts: { // split echarts libs\n              name: 'chunk-echarts',\n              test: /[\\\\/]node_modules[\\\\/]_?echarts(.*)/,\n              priority: 50,\n              chunks: 'async'\n            },\n            zrender: { // split zrender libs\n              name: 'chunk-zrender',\n              test: /[\\\\/]node_modules[\\\\/]_?zrender(.*)/,\n              priority: 55,\n              chunks: 'async'\n            },\n            'manage-sendMsg': { // resolve src\n              name: 'chunk-manage-sendMsg',\n              test: resolve('src/views/manage/sendMsg'),\n              priority: 80,\n              chunks: 'async'\n            },\n            'manage-packageLink': { // resolve src\n              name: 'chunk-manage-packageLink',\n              test: resolve('src/views/manage/packageLink'),\n              priority: 80,\n              chunks: 'async'\n            }，\n            ......\n      })\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br")])]),a("p",[s._v("其实咱单独从配置上去做优化，可操作的空间并不大。"),a("strong",[s._v("我们还应该从打包分析结果去回看我们的代码细节")]),s._v("，调整业务代码来优化打包结果，或许是最直接有效的优化思路之一。包括：如何整合或解耦业务？如何做组件化？组件怎么引？插件怎么引？引多少？......每个点都能再操作操作！")]),s._v(" "),a("ul",[a("li",[s._v("尤其注意")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("CommonJs(require)")]),s._v(" "),a("th",[s._v("ES6(import)")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("输出的是一个值的拷贝")]),s._v(" "),a("td",[s._v("输出的是值的引用")])]),s._v(" "),a("tr",[a("td",[s._v("运行时加载")]),s._v(" "),a("td",[s._v("编译时输出接口")])])])]),s._v(" "),a("h2",{attrs:{id:"cachegroups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cachegroups"}},[s._v("#")]),s._v(" cacheGroups")]),s._v(" "),a("p",[s._v("下面我们再具体看看 cacheGroups 最关键的配置：")]),s._v(" "),a("p",[s._v("【重要】")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("name\nchunk 的文件名")])]),s._v(" "),a("li",[a("p",[s._v("test\n过滤 modules，默认为所有的 modules，可匹配模块路径或 chunk 名字，当匹配到某个 chunk 的名字时，这个 chunk 里面引入的所有 module 都会选中；")])]),s._v(" "),a("li",[a("p",[s._v("priority\n权重，数字越大表示优先级越高。一个 module 可能会满足多个 cacheGroups 的正则匹配，到底将哪个缓存组应用于这个 module，取决于优先级；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("chunks")]),s._v("（非常非常非常重要）\n有三个值：all、async、initial。")])])]),s._v(" "),a("p",[s._v("这里是一段示例代码，来看看设置不同的 chunks，它们有什么样的打包区别：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//app.js\nimport "my-statis-module";\n\nif(some_condition_is_true){\n  import ("my-dynamic-module")\n}\nconsole.log("My app is running")\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("asyn : (default)")]),s._v(" "),a("p",[s._v("会生成两个打包文件：")]),s._v(" "),a("ol",[a("li",[s._v("bundle.js (包含 app.js + my-statis-module)")]),s._v(" "),a("li",[s._v("chunk.js (只包含 my-dynamic-module)")])]),s._v(" "),a("p",[s._v("initial :")]),s._v(" "),a("p",[s._v("会生成三个打包文件：")]),s._v(" "),a("ol",[a("li",[s._v("app.js (只包含 app.js)")]),s._v(" "),a("li",[s._v("bundle.js (只包含 my-static-module)")]),s._v(" "),a("li",[s._v("chunk.js (只包含 my-dynamic-module)")])]),s._v(" "),a("p",[s._v("all :")]),s._v(" "),a("p",[s._v("会生成两个打包文件：")]),s._v(" "),a("ol",[a("li",[s._v("app.js (只包含 app.js)")]),s._v(" "),a("li",[s._v("bundle.js (包含 my-static-module + my-dynamic-module)")])]),s._v(" "),a("p",[s._v('设置 "all" 大小将最小，区别使用这三者，是核心中的核心。')]),s._v(" "),a("hr"),s._v("\n【了解】\n"),a("ul",[a("li",[a("p",[s._v("minSize\n表示被拆分出的 bundle 在拆分之前的体积的最小数值，只有 >= minSize 的 bundle 会被拆分出来；")])]),s._v(" "),a("li",[a("p",[s._v("maxSize")])])]),s._v(" "),a("p",[s._v("表示被拆分出的 bundle 在拆分之前的体积的最大数值，默认值为 0，表示 bundle 在拆分前的体积没有上限；"),a("strong",[s._v("maxSize 如果为非 0 值时，不能小于 minSize；")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("minChunks\n表示在分割前，可被多少个chunk分享的最小值")])]),s._v(" "),a("li",[a("p",[s._v("reuseExistingChunk\n表示是否使用已有的 chunk，true 则表示如果当前的 chunk 包含的模块已经被抽取出去了，那么将不会重新生成新的，即几个 chunk 复用被拆分出去的一个 module；")])])]),s._v(" "),a("h2",{attrs:{id:"意外收获"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#意外收获"}},[s._v("#")]),s._v(" 意外收获")]),s._v(" "),a("p",[s._v("代码层面：这样写，user.png 会被单独打成一个包。打包出来 148B ，属实没必要！")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<img v-show="imageUrl" :src="imageUrl" class="sort-img">\n<img v-show="!imageUrl" src="~@/assets/user.png" class="sort-img">\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5bdf82382b6a4784931f07b98e15fdcc~tplv-k3u1fbpfcp-watermark.image",alt:""}}),s._v(" "),a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5cb665d0caca435a81e8f7ee3f84ca2d~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),s._v(" "),a("p",[s._v("如果改成这样，则不会再被单独打包了。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' <img :src="imageUrl?imageUrl:\'~@/assets/user.png\'" class="sort-img">\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("回看其它代码，本瓜发现所有在条件判断里面引入的文件都会被单独打包。然而它们其中有些是可以调整写法的，真没必要将几 KB 的文件单独打包成一个几 B 的包文件。")]),s._v(" "),a("p",[a("strong",[s._v("从打包的结果去检验代码，也是一种不错的优化手段！")])]),s._v(" "),a("h2",{attrs:{id:"策略小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#策略小结"}},[s._v("#")]),s._v(" 策略小结")]),s._v(" "),a("p",[s._v("基于本次分包，本瓜简单梳理一下策略：")]),s._v(" "),a("ol",[a("li",[s._v("公共的库是一定要尽量拆的。")]),s._v(" "),a("li",[s._v("公共的库尽量做到按需加载，这也是优化首屏加载需要注意的。")]),s._v(" "),a("li",[s._v("分包不能太细，0KB 至 10 KB 的包是极小的包，应当考虑合并。10 KB 至 100 KB 的包是小包，比较合适；100 KB 至 200 KB 的包只能是比较核心重要的包，需要重点关注，大于 200KB 的包就需要考虑拆包了。当然，也不排除一些特殊情况。")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("包大小")]),s._v(" "),a("th",[s._v("策略")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("0 KB 至 10 KB")]),s._v(" "),a("td",[s._v("合并包")])]),s._v(" "),a("tr",[a("td",[s._v("10 KB 至 100 KB")]),s._v(" "),a("td",[s._v("大小合适")])]),s._v(" "),a("tr",[a("td",[s._v("100 KB 至 200 KB")]),s._v(" "),a("td",[s._v("核心包，重点关注")])]),s._v(" "),a("tr",[a("td",[s._v("大于 200 KB")]),s._v(" "),a("td",[s._v("考虑拆包")])]),s._v(" "),a("tr",[a("td",[s._v("特殊情况")]),s._v(" "),a("td",[s._v("特殊处理")])])])]),s._v(" "),a("p",[s._v("本次就先到这，打包无止境，愿这个世上没有打包攻城狮。")]),s._v(" "),a("p",[s._v("关注公众号【掘金安东尼】，你的三连，我的动力！！！")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f2a14801589c4e3ab44d48123e77ca3b~tplv-k3u1fbpfcp-watermark.image",alt:""}})])])}),[],!1,null,null,null);n.default=t.exports}}]);