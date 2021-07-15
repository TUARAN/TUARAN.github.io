(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{539:function(e,t,s){"use strict";s.r(t);var r=s(2),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),s("p",[e._v("源码阅读可能会迟到，但是一定不会缺席！")]),e._v(" "),s("p",[e._v("众所周知，以下代码就是 vue 的一种直接上手方式。通过 cdn 可以在线打开 vue.js。一个文件，一万行源码，能让万千开发者赖以生存，它究竟做了什么？让人品味。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<html>\n<head></head>\n<body>\n    <div id=\"app\">\n        {{ message }}\n    </div>\n</body>\n<script src=\"https://cdn.jsdelivr.net/npm/vue/dist/vue.js\"><\/script>\n<script>\n    var app = new Vue({\n        el: '#app',\n        data: {\n            message: 'See Vue again!'\n        },\n    })\n<\/script>\n</html>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br")])]),s("p",[e._v("源码cdn地址："),s("a",{attrs:{href:"https://cdn.jsdelivr.net/npm/vue/dist/vue.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cdn.jsdelivr.net/npm/vue/dist/vue.js"),s("OutboundLink")],1),e._v("，当下版本：v2.6.11")]),e._v(" "),s("p",[e._v("选择生啃的原因是，自认为已经有一定的基础，且可以更自主地选择代码段分轻重来阅读，一方面测试自己的掌握程度，一方面追求更直观的源码阅读。")]),e._v(" "),s("p",[e._v("当然你也可以选择在 "),s("a",{attrs:{href:"https://github.com/vuejs/vue/tree/dev/src",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/tree/dev/src"),s("OutboundLink")],1),e._v(" 分模块的阅读，也可以看各路大神的归类整理。")]),e._v(" "),s("p",[e._v("笔者尽量按 500 行作为一个模块来形成一个 md 文件，结合注释、自己的理解、以及附上对应查询链接来逐行细读源码。")]),e._v(" "),s("p",[e._v("目的：自我梳理，分享交流。")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（1/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc2.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（2/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc3.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（3/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc4.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（4/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc5.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（5/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc6.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（6/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（7/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc8.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（8/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc9.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（9/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc10.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（10/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc11.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（11/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc12.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（12/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc13.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（13/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc14.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（14/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc15.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（15/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc16.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（16/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc17.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（17/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc18.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（18/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc19.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（19/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（20/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（21/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（22/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（23/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（24/24）"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"正文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正文"}},[e._v("#")]),e._v(" 正文")]),e._v(" "),s("h3",{attrs:{id:"第-10437-行至第-10605-行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-10437-行至第-10605-行"}},[e._v("#")]),e._v(" 第 10437 行至第 10605 行")]),e._v(" "),s("ul",[s("li",[e._v("isTextTag // function chars() 里的工具函数")]),e._v(" "),s("li",[e._v("isForbiddenTag //  function parseHTML() 用到的工具函数用于检查元素标签是否合法（不是保留命名）")]),e._v(" "),s("li",[e._v("guardIESVGBug // parse start() 中用到的工具函数")]),e._v(" "),s("li",[e._v("checkForAliasModel // checkForAliasModel用于检查v-model的参数是否是v-for的迭代对象")]),e._v(" "),s("li",[e._v("preTransformNode // preTransformNode 方法对el进行预处理，便于后续对标签上的指令和属性进行处理，然后进行树结构的构建，确定el的root, parent, children等属性。总结下来就是生成树节点，构建树结构(关联树节点)。")]),e._v(" "),s("li",[e._v("cloneASTElement // 转换属性，把数组属性转换成对象属性，返回对象 AST元素")]),e._v(" "),s("li",[e._v("text // 为虚拟dom添加textContent 属性")]),e._v(" "),s("li",[e._v("html // 为虚拟dom添加innerHTML 属性")]),e._v(" "),s("li",[e._v("baseOptions")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var baseOptions = {\n  expectHTML: true, //标志 是html\n  modules: modules$1, //为虚拟dom添加staticClass，classBinding，staticStyle，styleBinding，for，\n                      //alias，iterator1，iterator2，addRawAttr ，type ，key， ref，slotName\n                      //或者slotScope或者slot，component或者inlineTemplate ，plain，if ，else，elseif 属性\n  directives: directives$1, //根据判断虚拟dom的标签类型是什么？给相应的标签绑定 相应的 v-model 双数据绑定代码函数，\n                            //为虚拟dom添加textContent 属性，为虚拟dom添加innerHTML 属性\n  isPreTag: isPreTag, // 判断标签是否是 pre\n  isUnaryTag: isUnaryTag, // 匹配标签是否是area,base,br,col,embed,frame,hr,img,input,\n                          // isindex,keygen, link,meta,param,source,track,wbr\n  mustUseProp: mustUseProp,\n  canBeLeftOpenTag: canBeLeftOpenTag,// 判断标签是否是 colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source\n  isReservedTag: isReservedTag, // 保留标签 判断是不是真的是 html 原有的标签 或者svg标签\n  getTagNamespace: getTagNamespace, // 判断 tag 是否是svg或者math 标签\n  staticKeys: genStaticKeys(modules$1) // 把数组对象 [{ staticKeys:1},{staticKeys:2},{staticKeys:3}]连接数组对象中的 staticKeys key值，连接成一个字符串 str=‘1,2,3’\n};\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br")])]),s("ul",[s("li",[e._v("genStaticKeysCached")])]),e._v(" "),s("h3",{attrs:{id:"第-10607-行至第-10731-行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-10607-行至第-10731-行"}},[e._v("#")]),e._v(" 第 10607 行至第 10731 行")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/**\n  * Goal of the optimizer: walk the generated template AST tree\n  * and detect sub-trees that are purely static, i.e. parts of\n  * the DOM that never needs to change.\n  *\n  * Once we detect these sub-trees, we can:\n  *\n  * 1. Hoist them into constants, so that we no longer need to\n  *    create fresh nodes for them on each re-render;\n  * 2. Completely skip them in the patching process.\n  */\n  // 优化器的目标:遍历生成的模板AST树检测纯静态的子树，即永远不需要更改的DOM。\n  // 一旦我们检测到这些子树，我们可以:\n  // 1。把它们变成常数，这样我们就不需要了\n  // 在每次重新渲染时为它们创建新的节点;\n  // 2。在修补过程中完全跳过它们。\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br")])]),s("ul",[s("li",[e._v("optimize // !important:过 parse 过程后，会输出生成 AST 树，接下来需要对这颗树做优化。即这里的 optimize\n// 循环递归虚拟node，标记是不是静态节点\n// 根据node.static或者 node.once 标记staticRoot的状态")]),e._v(" "),s("li",[e._v("genStaticKeys$1")]),e._v(" "),s("li",[e._v("markStatic$1 // 标准静态节点")]),e._v(" "),s("li",[e._v("markStaticRoots // 标注静态根（重要）")]),e._v(" "),s("li",[e._v("isStatic // isBuiltInTag（即tag为component 和slot）的节点不会被标注为静态节点，isPlatformReservedTag（即平台原生标签，web 端如 h1 、div标签等）也不会被标注为静态节点。")]),e._v(" "),s("li",[e._v("isDirectChildOfTemplateFor")])]),e._v(" "),s("h3",{attrs:{id:"阶段小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阶段小结"}},[e._v("#")]),e._v(" 阶段小结")]),e._v(" "),s("p",[e._v("简单来说：整个 optimize 的过程实际上就干 2 件事情，markStatic(root) 标记静态节点 ，markStaticRoots(root, false) 标记静态根节点。")]),e._v(" "),s("p",[e._v("那么被判断为静态根节点的条件是什么？")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("该节点的所有子孙节点都是静态节点（判断为静态节点要满足 7 个判断，"),s("a",{attrs:{href:"https://juejin.im/post/5d4e3eb7f265da03c61e411e",target:"_blank",rel:"noopener noreferrer"}},[e._v("详见"),s("OutboundLink")],1),e._v("）")])]),e._v(" "),s("li",[s("p",[e._v("必须存在子节点")])]),e._v(" "),s("li",[s("p",[e._v("子节点不能只有一个纯文本节点")])])]),e._v(" "),s("p",[e._v("其实，markStaticRoots()方法针对的都是普通标签节点。表达式节点与纯文本节点都不在考虑范围内。")]),e._v(" "),s("p",[e._v("markStatic()得出的static属性，在该方法中用上了。将每个节点都判断了一遍static属性之后，就可以更快地确定静态根节点：通过判断对应节点是否是静态节点 且 内部有子元素 且 单一子节点的元素类型不是文本类型。")]),e._v(" "),s("blockquote",[s("p",[e._v("只有纯文本子节点时，他是静态节点，但不是静态根节点。静态根节点是 optimize 优化的条件，没有静态根节点，说明这部分不会被优化。")])]),e._v(" "),s("p",[e._v("Q：为什么子节点的元素类型是静态文本类型，就会给 optimize 过程加大成本呢？")]),e._v(" "),s("p",[e._v("A：optimize 过程中做这个静态根节点的优化目是：在 patch 过程中，减少不必要的比对过程，加速更新。但是需要以下成本")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("维护静态模板的存储对象\n一开始的时候，所有的静态根节点 都会被解析生成 VNode，并且被存在一个缓存对象中，就在 Vue.proto._staticTree 中。\n随着静态根节点的增加，这个存储对象也会越来越大，那么占用的内存就会越来越多\n势必要减少一些不必要的存储，所有只有纯文本的静态根节点就被排除了")])]),e._v(" "),s("li",[s("p",[e._v("多层render函数调用\n这个过程涉及到实际操作更新的过程。在实际render 的过程中，针对静态节点的操作也需要调用对应的静态节点渲染函数，做一定的判断逻辑。这里需要一定的消耗。")])])]),e._v(" "),s("p",[e._v("纯文本直接对比即可，不进行 optimize 将会更高效。")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5e7595c75188252c1f22524a",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考link"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"第-10733-行至第-10915-行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-10733-行至第-10915-行"}},[e._v("#")]),e._v(" 第 10733 行至第 10915 行")]),e._v(" "),s("p",[e._v("// KeyboardEvent.keyCode aliases")]),e._v(" "),s("ul",[s("li",[e._v("keyCodes // 内置按键")]),e._v(" "),s("li",[e._v("keyNames")]),e._v(" "),s("li",[e._v("genGuard // genGuard = condition => "),s("code",[e._v("if(${condition})return null;")])]),e._v(" "),s("li",[e._v("modifierCode //m odifierCode生成内置修饰符的处理")]),e._v(" "),s("li",[e._v("genHandlers")]),e._v(" "),s("li",[e._v("genHandler // 调用genHandler处理events[name]，events[name]可能是数组也可能是独立对象，取决于name是否有多个处理函数。")]),e._v(" "),s("li",[e._v("genKeyFilter // genKeyFilter用于生成一段过滤的字符串：")]),e._v(" "),s("li",[e._v("genFilterCode // 在 genKeyFilter 里被调用")]),e._v(" "),s("li",[e._v("on")]),e._v(" "),s("li",[e._v("bind$1")]),e._v(" "),s("li",[e._v("baseDirectives // CodegenState 里的工具函数")])]),e._v(" "),s("p",[e._v("不管是组件还是普通标签，事件处理代码都在genData的过程中，和之前分析原生事件一致，genHandlers用来处理事件对象并拼接成字符串。")])])}),[],!1,null,null,null);t.default=n.exports}}]);