(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{538:function(e,t,r){"use strict";r.r(t);var n=r(2),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),r("p",[e._v("源码阅读可能会迟到，但是一定不会缺席！")]),e._v(" "),r("p",[e._v("众所周知，以下代码就是 vue 的一种直接上手方式。通过 cdn 可以在线打开 vue.js。一个文件，一万行源码，能让万千开发者赖以生存，它究竟做了什么？让人品味。")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("<html>\n<head></head>\n<body>\n    <div id=\"app\">\n        {{ message }}\n    </div>\n</body>\n<script src=\"https://cdn.jsdelivr.net/npm/vue/dist/vue.js\"><\/script>\n<script>\n    var app = new Vue({\n        el: '#app',\n        data: {\n            message: 'See Vue again!'\n        },\n    })\n<\/script>\n</html>\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br"),r("span",{staticClass:"line-number"},[e._v("15")]),r("br"),r("span",{staticClass:"line-number"},[e._v("16")]),r("br"),r("span",{staticClass:"line-number"},[e._v("17")]),r("br")])]),r("p",[e._v("源码cdn地址："),r("a",{attrs:{href:"https://cdn.jsdelivr.net/npm/vue/dist/vue.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cdn.jsdelivr.net/npm/vue/dist/vue.js"),r("OutboundLink")],1),e._v("，当下版本：v2.6.11")]),e._v(" "),r("p",[e._v("选择生啃的原因是，自认为已经有一定的基础，且可以更自主地选择代码段分轻重来阅读，一方面测试自己的掌握程度，一方面追求更直观的源码阅读。")]),e._v(" "),r("p",[e._v("当然你也可以选择在 "),r("a",{attrs:{href:"https://github.com/vuejs/vue/tree/dev/src",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/tree/dev/src"),r("OutboundLink")],1),e._v(" 分模块的阅读，也可以看各路大神的归类整理。")]),e._v(" "),r("p",[e._v("笔者尽量按 500 行作为一个模块来形成一个 md 文件，结合注释、自己的理解、以及附上对应查询链接来逐行细读源码。")]),e._v(" "),r("p",[e._v("目的：自我梳理，分享交流。")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（1/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc2.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（2/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc3.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（3/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc4.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（4/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc5.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（5/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc6.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（6/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（7/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc8.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（8/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc9.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（9/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc10.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（10/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc11.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（11/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc12.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（12/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc13.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（13/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc14.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（14/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc15.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（15/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc16.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（16/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc17.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（17/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc18.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（18/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc19.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（19/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（20/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（21/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（22/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（23/24）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（24/24）"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"正文"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#正文"}},[e._v("#")]),e._v(" 正文")]),e._v(" "),r("h3",{attrs:{id:"第-9541-行至第-9914-行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第-9541-行至第-9914-行"}},[e._v("#")]),e._v(" 第 9541 行至第 9914 行")]),e._v(" "),r("p",[r("strong",[e._v("Regular Expressions")]),e._v(" // 相关正则")]),e._v(" "),r("ul",[r("li",[e._v("createASTElement\n// Convert HTML string to AST.")]),e._v(" "),r("li",[e._v("parse // !important")])]),e._v(" "),r("p",[e._v("parse 函数从 9593 行至 9914 行，共三百多行。核心吗？当然核心！")]),e._v(" "),r("p",[e._v("引自 wikipedia：")]),e._v(" "),r("blockquote",[r("p",[e._v("在计算机科学和语言学中，语法分析（英语：syntactic analysis，也叫 parsing）是根据某种给定的形式文法对由单词序列（如英语单词序列）构成的输入文本进行分析并确定其语法结构的一种过程。")]),e._v(" "),r("p",[e._v("语法分析器（parser）通常是作为编译器或解释器的组件出现的，它的作用是进行语法检查、并构建由输入的单词组成的数据结构（一般是语法分析树、抽象语法树等层次化的数据结构）。语法分析器通常使用一个独立的词法分析器从输入字符流中分离出一个个的“单词”，并将单词流作为其输入。实际开发中，语法分析器可以手工编写，也可以使用工具（半）自动生成。")])]),e._v(" "),r("p",[r("strong",[e._v("parse 的整体流程实际上就是先处理了一些传入的options，然后执行了parseHTML 函数，传入了template，options和相关钩子。")])]),e._v(" "),r("p",[e._v("具体实现这里盗一个图：")]),e._v(" "),r("p",[r("img",{attrs:{src:"/assets/img/parse.png",alt:""}})]),e._v(" "),r("p",[e._v("parse中的语法分析可以看"),r("a",{attrs:{href:"https://juejin.im/post/5d09a4fef265da1b6b1cd96b#heading-13",target:"_blank",rel:"noopener noreferrer"}},[e._v("这一篇这一节"),r("OutboundLink")],1)]),e._v(" "),r("ol",[r("li",[e._v("start")]),e._v(" "),r("li",[e._v("char")]),e._v(" "),r("li",[e._v("comment")]),e._v(" "),r("li",[e._v("end")])]),e._v(" "),r("p",[e._v("parse、optimize、codegen的核心思想解读可以看"),r("a",{attrs:{href:"https://juejin.im/post/5cfc6ad9e51d4558936aa04d#heading-6",target:"_blank",rel:"noopener noreferrer"}},[e._v("这一篇这一节"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("这里实现的细节还真不少！")]),e._v(" "),r("ol",[r("li",[e._v("parse")]),e._v(" "),r("li",[e._v("optimize")]),e._v(" "),r("li",[e._v("codegen for render And render")])]),e._v(" "),r("p",[e._v("后续部分都与这三点相关。")]),e._v(" "),r("h3",{attrs:{id:"阶段小结-重点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#阶段小结-重点"}},[e._v("#")]),e._v(" 阶段小结（重点）")]),e._v(" "),r("p",[e._v("噫嘘唏！来到第 20 篇的小结！来个图镇一下先！")]),e._v(" "),r("p",[e._v("还记得官方这样的一句话吗？")]),e._v(" "),r("blockquote",[r("p",[e._v("下图展示了实例的生命周期。你不需要立马弄明白所有的东西，不过随着你的不断学习和使用，它的参考价值会越来越高。")])]),e._v(" "),r("p",[e._v("看了这么多，我们再回头看看注释版。")]),e._v(" "),r("p",[r("img",{attrs:{src:"/assets/img/vuelife.png",alt:"注释版"}}),r("a",{attrs:{href:"http://www.shangdixinxi.com/detail-1105609.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("link"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("上图值得一提的是："),r("span",{staticStyle:{color:"orange"}},[r("b",[e._v('Has "template" option?')]),e._v(" 这个逻辑的细化")])]),e._v(" "),r("blockquote",[r("p",[e._v("碰到是否有 template 选项时，会询问是否要对 template 进行编译：即模板通过编译生成 AST，再由 AST 生成 Vue 的渲染函数，渲染函数结合数据生成 Virtual DOM 树，对 Virtual DOM 进行 diff 和 patch 后生成新的UI。")])]),e._v(" "),r("p",[e._v("如图（此图前文也有提到，见 0 至 5000 行总结）：\n"),r("img",{attrs:{src:"/assets/img/vuelife1.jpg",alt:""}})]),e._v(" "),r("p",[e._v("将 Vue 的源码的“数据监听”、“虚拟 DOM”、“Render 函数”、“组件编译”、结合好，则算是融会贯通了！")]),e._v(" "),r("p",[r("strong",[e._v("一图胜万言")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/assets/img/vuelife2.png",alt:""}})]),e._v(" "),r("p",[e._v("好好把上面的三张图看懂，便能做到“成竹在胸”，走遍天下的 VUE 原理面试都不用慌了。框架就在这里，细化的东西就需要多多记忆了！")])])}),[],!1,null,null,null);t.default=s.exports}}]);