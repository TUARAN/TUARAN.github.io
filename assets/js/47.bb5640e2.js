(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{542:function(e,t,s){"use strict";s.r(t);var n=s(2),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),s("p",[e._v("源码阅读可能会迟到，但是一定不会缺席！")]),e._v(" "),s("p",[e._v("众所周知，以下代码就是 vue 的一种直接上手方式。通过 cdn 可以在线打开 vue.js。一个文件，一万行源码，能让万千开发者赖以生存，它究竟做了什么？让人品味。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<html>\n<head></head>\n<body>\n    <div id=\"app\">\n        {{ message }}\n    </div>\n</body>\n<script src=\"https://cdn.jsdelivr.net/npm/vue/dist/vue.js\"><\/script>\n<script>\n    var app = new Vue({\n        el: '#app',\n        data: {\n            message: 'See Vue again!'\n        },\n    })\n<\/script>\n</html>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br")])]),s("p",[e._v("源码cdn地址："),s("a",{attrs:{href:"https://cdn.jsdelivr.net/npm/vue/dist/vue.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cdn.jsdelivr.net/npm/vue/dist/vue.js"),s("OutboundLink")],1),e._v("，当下版本：v2.6.11")]),e._v(" "),s("p",[e._v("选择生啃的原因是，自认为已经有一定的基础，且可以更自主地选择代码段分轻重来阅读，一方面测试自己的掌握程度，一方面追求更直观的源码阅读。")]),e._v(" "),s("p",[e._v("当然你也可以选择在 "),s("a",{attrs:{href:"https://github.com/vuejs/vue/tree/dev/src",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/tree/dev/src"),s("OutboundLink")],1),e._v(" 分模块的阅读，也可以看各路大神的归类整理。")]),e._v(" "),s("p",[e._v("笔者尽量按 500 行作为一个模块来形成一个 md 文件，结合注释、自己的理解、以及附上对应查询链接来逐行细读源码。")]),e._v(" "),s("p",[e._v("目的：自我梳理，分享交流。")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（1/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc2.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（2/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc3.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（3/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc4.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（4/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc5.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（5/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc6.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（6/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（7/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc8.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（8/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc9.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（9/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc10.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（10/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc11.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（11/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc12.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（12/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc13.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（13/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc14.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（14/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc15.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（15/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc16.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（16/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc17.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（17/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc18.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（18/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc19.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（19/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（20/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（21/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（22/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（23/24）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tuaran.github.io/views/2020/studyVuesc20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js v2.6.11 生啃一万行源码（24/24）"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"正文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正文"}},[e._v("#")]),e._v(" 正文")]),e._v(" "),s("h3",{attrs:{id:"第-904-行至第-1073-行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-904-行至第-1073-行"}},[e._v("#")]),e._v(" 第 904 行至第 1073 行")]),e._v(" "),s("p",[s("strong",[e._v("Vue核心：数据监听最重要之一的 Observer")])]),e._v(" "),s("ul",[s("li",[e._v("核心的核心！Observer（发布者） => Dep（订阅器） => Watcher（订阅者）")])]),e._v(" "),s("p",[e._v("类比一个生活场景：报社将各种时下热点的新闻收集，然后制成各类报刊，发送到每家门口的邮箱里，订阅报刊人们看到了新闻，对新闻作出评论。")]),e._v(" "),s("p",[e._v("在这个场景里，报社==发布者，新闻==数据，邮箱==订阅器，订阅报刊的人==订阅者，对新闻评论==视图更新")]),e._v(" "),s("ul",[s("li",[e._v("Observer//Observer的调用过程：initState()--\x3eobserve(data)--\x3enew Observer()")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var Observer = function Observer (value) {\n  this.value = value;\n  this.dep = new Dep();\n  this.vmCount = 0;\n  def(value, '__ob__', this);\n  if (Array.isArray(value)) {\n    if (hasProto) {\n      protoAugment(value, arrayMethods);\n    } else {\n      copyAugment(value, arrayMethods, arrayKeys);\n    }\n    this.observeArray(value);\n  } else {\n    this.walk(value);\n  }\n};\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br")])]),s("ul",[s("li",[e._v("※※ defineReactive 函数，定义一个响应式对象，给对象动态添加 getter 和 setter ，用于依赖收集和派发更新。")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function defineReactive (\n  obj: Object,\n  key: string,\n  val: any,\n  customSetter?: ?Function,\n  shallow?: boolean\n) {\n  const dep = new Dep()// 1. 为属性创建一个发布者\n\n  const property = Object.getOwnPropertyDescriptor(obj, key)\n  if (property && property.configurable === false) {\n    return\n  }\n\n  // cater for pre-defined getter/setters\n  const getter = property && property.get // 依赖收集\n  const setter = property && property.set // 派发更新\n  if ((!getter || setter) && arguments.length === 2) {\n    val = obj[key]\n  }\n\n  let childOb = !shallow && observe(val)// 2. 获取属性值的__ob__属性\n  Object.defineProperty(obj, key, {\n    enumerable: true,\n    configurable: true,\n    get: function reactiveGetter () {\n      const value = getter ? getter.call(obj) : val\n      if (Dep.target) {\n        dep.depend()// 3. 添加 Dep\n        if (childOb) {\n          childOb.dep.depend()//4. 也为属性值添加同样的 Dep \n          if (Array.isArray(value)) {\n            dependArray(value)\n          }\n        }\n      }\n      return value\n    },\n    set: function reactiveSetter (newVal) {\n      const value = getter ? getter.call(obj) : val\n      /* eslint-disable no-self-compare */\n      if (newVal === value || (newVal !== newVal && value !== value)) {\n        return\n      }\n      /* eslint-enable no-self-compare */\n      if (process.env.NODE_ENV !== 'production' && customSetter) {\n        customSetter()\n      }\n      if (setter) {\n        setter.call(obj, newVal)\n      } else {\n        val = newVal\n      }\n      childOb = !shallow && observe(newVal)\n      dep.notify()\n    }\n  })\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br"),s("span",{staticClass:"line-number"},[e._v("45")]),s("br"),s("span",{staticClass:"line-number"},[e._v("46")]),s("br"),s("span",{staticClass:"line-number"},[e._v("47")]),s("br"),s("span",{staticClass:"line-number"},[e._v("48")]),s("br"),s("span",{staticClass:"line-number"},[e._v("49")]),s("br"),s("span",{staticClass:"line-number"},[e._v("50")]),s("br"),s("span",{staticClass:"line-number"},[e._v("51")]),s("br"),s("span",{staticClass:"line-number"},[e._v("52")]),s("br"),s("span",{staticClass:"line-number"},[e._v("53")]),s("br"),s("span",{staticClass:"line-number"},[e._v("54")]),s("br"),s("span",{staticClass:"line-number"},[e._v("55")]),s("br"),s("span",{staticClass:"line-number"},[e._v("56")]),s("br"),s("span",{staticClass:"line-number"},[e._v("57")]),s("br"),s("span",{staticClass:"line-number"},[e._v("58")]),s("br")])]),s("p",[e._v("第 4 步非常重要。为对象的属性添加 dep.depend(),达到监听对象（引用的值）属性的目的")]),e._v(" "),s("h3",{attrs:{id:"重点备注"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重点备注"}},[e._v("#")]),e._v(" 重点备注")]),e._v(" "),s("p",[e._v("Vue对数组的处理跟对象还是有挺大的不同，length是数组的一个很重要的属性，无论数组增加元素或者删除元素（通过splice，push等方法操作）length的值必定会更新，为什么不直接操作监听length呢？而需要拦截splice，push等方法进行数组的状态更新？")]),e._v(" "),s("p",[e._v("原因是：在数组length属性上用defineProperty拦截的时候，会报错。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Uncaught TypeError: Cannot redefine property: length\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("再用Object.getOwnPropertyDescriptor(arr, 'length')查看一下：//（Object.getOwnPropertyDescriptor用于返回defineProperty.descriptor）")]),e._v(" "),s("p",[e._v("{\nconfigurable: false\nenumerable: false\nvalue: 0\nwritable: true\n}\nconfigurable为false，且MDN上也说重定义数组的length属性在不同浏览器上表现也是不一致的，所以还是老老实实拦截splice，push等方法，或者使用ES6的Proxy。")]),e._v(" "),s("h3",{attrs:{id:"第-1075-行至第-1153-行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-1075-行至第-1153-行"}},[e._v("#")]),e._v(" 第 1075 行至第 1153 行")]),e._v(" "),s("ul",[s("li",[e._v("set //在对象上设置一个属性。如果是新的属性就会触发更改通知（旧属性也会触发更新通知，因为第一个添加的时候已经监听了，之后自动触发，不再手动触发）")]),e._v(" "),s("li",[e._v("del //删除一个属性，如果必要触发通知")]),e._v(" "),s("li",[e._v("dependArray // 收集数组的依赖\n"),s("a",{attrs:{href:"http://qjzd.net:3000/topic/57cd26dad703dbd15b10c707",target:"_blank",rel:"noopener noreferrer"}},[e._v("link"),s("OutboundLink")],1)])]),e._v(" "),s("h3",{attrs:{id:"第-1157-行至第-1568-行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-1157-行至第-1568-行"}},[e._v("#")]),e._v(" 第 1157 行至第 1568 行")]),e._v(" "),s("p",[e._v("// 配置选项合并策略")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ar strats = config.optionMergeStrategies;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("mergeData")]),e._v(" "),s("li",[e._v("strats.data")]),e._v(" "),s("li",[e._v("mergeDataOrFn")]),e._v(" "),s("li",[e._v("mergeHook")]),e._v(" "),s("li",[e._v("mergeAssets")]),e._v(" "),s("li",[e._v("strats.watch")]),e._v(" "),s("li",[e._v("strats.computed")]),e._v(" "),s("li",[e._v("defaultStrat")]),e._v(" "),s("li",[e._v("checkComponents")]),e._v(" "),s("li",[e._v("validateComponentName")]),e._v(" "),s("li",[e._v("normalizeProps")]),e._v(" "),s("li",[e._v("normalizeInject")]),e._v(" "),s("li",[e._v("normalizeDirectives")]),e._v(" "),s("li",[e._v("assertObjectType")]),e._v(" "),s("li",[e._v("mergeOptions")])]),e._v(" "),s("p",[e._v("这一部分代码写的就是父子组件配置项的合并策略，包括：默认的合并策略、钩子函数的合并策略、filters/props、data合并策略，且包括标准的组件名、props写法有一个统一化规范要求。")]),e._v(" "),s("p",[e._v("一图以蔽之")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/mergeoption.jpg",alt:""}})]),e._v(" "),s("p",[e._v("强烈推荐阅读："),s("a",{attrs:{href:"https://segmentfault.com/a/1190000014738314#item-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("link"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"阶段小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阶段小结"}},[e._v("#")]),e._v(" 阶段小结")]),e._v(" "),s("p",[e._v("这一部分最重要的就是 Observer（观察者） ，这也是 Vue 核心中的核心！其次是 mergeOptions（组件配置项的合并策略），但是通常在用的过程中，就已经了解到了大部分的策略规则。")])])}),[],!1,null,null,null);t.default=r.exports}}]);