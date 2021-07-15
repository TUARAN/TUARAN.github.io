(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{614:function(n,e,s){"use strict";s.r(e);var t=s(2),a=Object(t.a)({},(function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v("正如《你不知道的 JavaScript》书中所言：")]),n._v(" "),s("blockquote",[s("p",[n._v("闭包就好像从 JavaScript 中分离出来的一个充满神秘色彩的未开化世界，只有最勇敢的人才能到达那里！")])]),n._v(" "),s("p",[n._v("在实际的开发工作中也确实如此，除了在面试的场景下，或其它几个少数特定的场景下（如“防抖节流”函数），咱意识到了 —— 这就是“闭包”！其它时候基本不用，或者是用了却不知道。")]),n._v(" "),s("p",[s("strong",[n._v("多么可惜！！这么好的东西用了却不自知。")])]),n._v(" "),s("p",[n._v("本篇借助 medium 上的五万赞好文 "),s("a",{attrs:{href:"https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8",target:"_blank",rel:"noopener noreferrer"}},[n._v("I never understood JavaScript closures"),s("OutboundLink")],1),n._v(" 带你一次吃透“闭包”！")]),n._v(" "),s("p",[s("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52da417e6f484ab99acb6c6116bcd23d~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),n._v(" "),s("p",[n._v("看完本篇，你会惊奇的发现，竟然连以下这段代码都存在着闭包？！")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("let a = 1\nfunction b(){\n    return a\n}\nconsole.log(b())\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br")])]),s("blockquote",[s("p",[s("span",{staticStyle:{color:"orange","font-weight":"700"}},[n._v("“我永远不懂 JS 闭包，因为它无处不在！”")])])]),n._v(" "),s("h2",{attrs:{id:"执行上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文"}},[n._v("#")]),n._v(" 执行上下文")]),n._v(" "),s("p",[n._v("认知“闭包”前，咱得了解一个重要的概念 —— "),s("strong",[n._v("“执行上下文”")]),n._v("！")]),n._v(" "),s("p",[n._v("执行上下文分为：")]),n._v(" "),s("ul",[s("li",[n._v("全局执行上下文（Global execution context）：当 JS 文件加载进浏览器运行的时候，进入的就是全局执行上下文。全局变量都是在这个执行上下文中。代码在任何位置都能访问。")]),n._v(" "),s("li",[n._v("函数执行上下文（Functional execution context）：定义在具体某个方法中的上下文。只有在该方法和该方法中的内部方法中访问。")])]),n._v(" "),s("p",[n._v("比如我们在全局执行上下文中调用一个函数的时候，JS 解析的流程大概会是这样的：")]),n._v(" "),s("ol",[s("li",[n._v("JS 创建一个新的函数执行上下文（可以理解为一个临时的“执行上下文”），它有局部可访问的变量集；")]),n._v(" "),s("li",[n._v("该执行上下文将被放到【执行栈】里去执行（这里将【执行栈】视为一种跟踪程序执行位置的机制）；")]),n._v(" "),s("li",[n._v("当遇到 "),s("code",[n._v("return")]),n._v(" 或 "),s("code",[n._v("}")]),n._v(" 时,判定为执行结束。")]),n._v(" "),s("li",[n._v("该执行上下文在执行栈弹出；")]),n._v(" "),s("li",[n._v("被执行的函数会将返回值发送给调用它的执行上下文，这里就是发送给全局执行上下文;")]),n._v(" "),s("li",[n._v("函数执行上下文将被销毁，它的变量集将不能再被访问到，这也是为什么它被称为临时的“执行上下文”的原因；")])]),n._v(" "),s("p",[n._v("关于执行栈的操作，可见下面的动图理解：")]),n._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/17/16102a4fc0cee383?imageslim",alt:""}})]),n._v(" "),s("p",[n._v("我们再结合下面这段代码举例解析，来看看更多细节：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("1: let a = 3\n2: function addTwo(x) {\n3:   let ret = x + 2\n4:   return ret\n5: }\n6: let b = addTwo(a)\n7: console.log(b)\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br")])]),s("ol",[s("li",[s("p",[n._v("第一行，在全局执行上下文声明了一个变量 a，赋值为 3；")])]),n._v(" "),s("li",[s("p",[n._v("第二行到第五行是函数执行上下文。是在全局执行上下文声明了一个 addTwo 的函数，函数内部的代码不做执行，只是存储着以供后面调用；")])]),n._v(" "),s("li",[s("p",[n._v("第六行，声明了一个变量 b，赋值 b 为 addTwo 函数执行的返回值；")])]),n._v(" "),s("li",[s("p",[n._v("在全局执行上下文找到 addTwo 函数进行执行，并传入参数 3 ；")])]),n._v(" "),s("li",[s("p",[n._v("此时，执行上下文会进行切换！创建一个临时的名为 addTwo 的函数执行上下文，推到执行栈当中；")])]),n._v(" "),s("li",[s("p",[n._v("到第三行，然后是怎样？创建一个变量 ret 吗？不对，实际上，是先创建一个变量 x 然后赋值为 3 ；")])]),n._v(" "),s("li",[s("p",[n._v("第三行，声明一个变量 ret ，然后赋值为 x + 2 的运算结果。")])]),n._v(" "),s("li",[s("p",[n._v("JS 会找加法的项 x 在哪？原来 x 在 addTwo 这个函数执行上下文就已经有了，它的值是 3 ，接着与 2 执行加法运算，然后赋给 ret。")])]),n._v(" "),s("li",[s("p",[n._v("然后来到了第四行，将 ret 进行 return 返回；")])]),n._v(" "),s("li",[s("p",[n._v("第四、第五行，addTwo 函数执行结束，临时的执行上下文被销毁；变量 x 和变量 ret 都会被清除；函数执行上下文将被在调用栈被推出，然后把函数返回给调用它的执行上下文，这里也就是全局执行上下文；")])]),n._v(" "),s("li",[s("p",[n._v("然后回到第 4 点，将函数返回值赋值给 b；")])]),n._v(" "),s("li",[s("p",[n._v("第七行，进行打印；")])])]),n._v(" "),s("p",[n._v("这里虽然是一段非常冗长的解释，且还并未涉及到“闭包”，但是却是我们必须要写在前面并且理解透彻的。")]),n._v(" "),s("h2",{attrs:{id:"词法作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域"}},[n._v("#")]),n._v(" 词法作用域")]),n._v(" "),s("p",[n._v("接着“执行上下文”，还有一个概念我们需要理解，它就是 "),s("strong",[n._v("“词法作用域”")]),n._v("！")]),n._v(" "),s("p",[n._v("来看下面这段代码示例：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("1: let val1 = 2\n2: function multiplyThis(n) {\n3:   let ret = n * val1\n4:   return ret\n5: }\n6: let multiplied = multiplyThis(6)\n7: console.log('example of scope:', multiplied)\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br")])]),s("p",[n._v("你能参照上一节的解释对这段代码进行描述吗？")]),n._v(" "),s("ol",[s("li",[s("p",[n._v("第一行，在全局执行上下文声明了一个变量 vall，赋值为 2；")])]),n._v(" "),s("li",[s("p",[n._v("第二行至第五行声明一个 multiplyThis 函数执行上下文，内部代码不做执行，存储以供调用；")])]),n._v(" "),s("li",[s("p",[n._v("第六行，声明一个变量 multiplied，赋值为 multiplyThis 函数执行的返回值；")])]),n._v(" "),s("li",[s("p",[n._v("在全局执行上下文找到 multiplyThis 函数进行执行，并传入参数 6 ；")])]),n._v(" "),s("li",[s("p",[n._v("此时，执行上下文会进行切换！创建一个临时的名为 multiplyThis 的函数执行上下文，推到执行栈当中；")])]),n._v(" "),s("li",[s("p",[n._v("到第三行，在函数执行上下文声明一个变量 n ,并赋值为 6；")])]),n._v(" "),s("li",[s("p",[n._v("第三行，声明一个变量 ret ，然后赋值为 n 与 vall 做乘法的运算结果。n 为 6，vall 呢？在当前函数执行上下文并未找到 vall！")])]),n._v(" "),s("li",[s("p",[n._v("此时，JS 会去调用 multiplyThis 函数的全局执行上下文寻找 vall！找到了!它的值是 2，6 * 2 = 12。赋给 ret；")])]),n._v(" "),s("li",[s("p",[n._v("然后来到了第四行，将 ret 进行 return 返回；")])]),n._v(" "),s("li",[s("p",[n._v("第四、第五行，multiplyThis 函数执行结束，临时的执行上下文被销毁，变量 n 和变量 ret 都会被清除，但是 vall 没有被销毁，因为它存在于全局函数执行上下文；")])]),n._v(" "),s("li",[s("p",[n._v("回到第六行，将返回值 12 赋给变量 multiplied；")])]),n._v(" "),s("li",[s("p",[n._v("最后打印输出；")])])]),n._v(" "),s("p",[n._v("这段描述中，置灰的步骤就是和上一节的描述基本一致，未置灰的是")]),n._v(" "),s("p",[n._v("最重要的是：JS 在当前执行上下文寻找变量的时候，如果找不到，就会去调用这个执行上下文的上一执行上下文去寻找。")]),n._v(" "),s("p",[n._v("这并不难理解，这样链式查找变量的过程，就是 JS 的【作用域链】。")]),n._v(" "),s("h2",{attrs:{id:"函数返回函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数返回函数"}},[n._v("#")]),n._v(" 函数返回函数")]),n._v(" "),s("p",[n._v("函数可以返回任何东西，当然也就包括返回另一个函数了。")]),n._v(" "),s("p",[n._v("让我们再按照一遍以下代码：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v(" 1: let val = 7\n 2: function createAdder() {\n 3:   function addNumbers(a, b) {\n 4:     let ret = a + b\n 5:     return ret\n 6:   }\n 7:   return addNumbers\n 8: }\n 9: let adder = createAdder()\n10: let sum = adder(val, 8)\n11: console.log('example of function returning a function: ', sum)\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br")])]),s("ol",[s("li",[s("p",[n._v("第一行，在全局执行上下文声明了一个变量 val，赋值为 7；")])]),n._v(" "),s("li",[s("p",[n._v("第二行至第八行声明一个 createAdder 函数执行上下文，内部代码不做执行，存储以供调用；")])]),n._v(" "),s("li",[s("p",[n._v("第十一行，声明一个变量 adder，赋值为 createAdder 函数执行的返回值；")])]),n._v(" "),s("li",[s("p",[n._v("在全局执行上下文找到 createAdder 函数进行执行，它在第二行，ok，调用；")])]),n._v(" "),s("li",[s("p",[n._v("来到第二行，创建一个新的临时的函数执行上下文，将其推倒执行栈；")])]),n._v(" "),s("li",[s("p",[n._v("由于 createAdder 函数没有传参，直接进入函数体内，这里声明了一个函数 addNumbers，只做声明，不做执行；")])]),n._v(" "),s("li",[s("p",[n._v("来到第七行，将 addNumbers 返回到全局执行上下文，它是一个函数；然后将临时 createAdder 函数执行的上下文推出执行栈；")])]),n._v(" "),s("li",[s("p",[n._v("createAdder 函数执行上下文被销毁，此时 addNumbers 也将不存在；")])]),n._v(" "),s("li",[s("p",[n._v("再到第十行，在全局执行上下文声明一个变量 sum，它的值为 adder(val, 8) 执行的返回值；")])]),n._v(" "),s("li",[s("p",[n._v("我们再到全局执行上下文寻找 adder ，找到了，它正好是一个函数，我们可以调用它；")])]),n._v(" "),s("li",[s("p",[n._v("他有两个传参，第一个是 val，它在第一行声明了并复制了，为 7，第二个参数是 8；")])]),n._v(" "),s("li",[s("p",[n._v("然后我们来到第三行到第五行，创建两个变量 a 和 b ，为他们赋值分别为 8 和 7；")])]),n._v(" "),s("li",[s("p",[n._v("第四行，声明一个变量 ret ，赋值为 8 + 7，为 15；")])]),n._v(" "),s("li",[s("p",[n._v("ret 变量被 return ，临时的函数执行上下文被销毁，a ，b ，ret 变量都将被销毁；")])]),n._v(" "),s("li",[s("p",[n._v("adder 函数执行的返回值赋给 sum 变量；")])]),n._v(" "),s("li",[s("p",[n._v("最后打印输出；")])])]),n._v(" "),s("h2",{attrs:{id:"主角-闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主角-闭包"}},[n._v("#")]),n._v(" 主角-闭包")]),n._v(" "),s("p",[n._v("看了以上三段详细分析，我相信再给你一段类似的调用代码，你也一定能通晓其中端倪！")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v(" 1：let counter\n 2: function createCounter() {\n 3:   let counter = 0\n 4:   const myFunction = function() {\n 5:     counter = counter + 1\n 6:     return counter\n 7:   }\n 8:   return myFunction\n 9: }\n 10: const increment = createCounter()\n11: const c1 = increment()\n12: const c2 = increment()\n13: const c3 = increment()\n14: console.log('example increment', c1, c2, c3)\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br")])]),s("p",[n._v("来试试吧？")]),n._v(" "),s("ol",[s("li",[s("p",[n._v("第一行，声明一个变量 counter ，赋值为 undefined ；")])]),n._v(" "),s("li",[s("p",[n._v("第二行至第九行，在全局执行上下文声明了一个函数 createCounter ，不做执行，存储以供调用；")])]),n._v(" "),s("li",[s("p",[n._v("第十行，在全局执行上下文声明了一个变量 increment ，赋值为 createCounter 函数执行的返回值；")])]),n._v(" "),s("li",[s("p",[n._v("调用 createCounter 函数，它在第 2 步已经声明了，执行它！")])]),n._v(" "),s("li",[s("p",[n._v("第二到九行，创建一个新的临时的函数执行上下文；")])]),n._v(" "),s("li",[s("p",[n._v("在这个临时的函数执行上下文声明一个变量 counter，赋值为 0；")])]),n._v(" "),s("li",[s("p",[n._v("第四到七行，声明一个 myFunction 函数，不做执行，存储以供调用；")])]),n._v(" "),s("li",[s("p",[n._v("将 myFunction 进行返回，赋给变量 increment。createCounter 函数执行上下文被销毁，myFunction 和 counter 都将被销毁；")])]),n._v(" "),s("li",[s("p",[n._v("此时的全局执行上下文没有 myFunction 函数了，只有 increment 函数；")])]),n._v(" "),s("li",[s("p",[n._v("第十一行，声明一个变量 c1 , 赋值为 increment 函数执行的返回值；")])]),n._v(" "),s("li",[s("p",[n._v("increment 函数是 createCounter 函数执行的返回值，它在第四行到第七行被定义；")])]),n._v(" "),s("li",[s("p",[n._v("创建一个新的函数执行上下文，没有传参，直接进入函数内部进行执行；")])]),n._v(" "),s("li",[s("p",[n._v("第五行，"),s("code",[n._v("counter = counter + 1")]),n._v("，counter 变量在新创建的函数执行上下文找的到吗？找不到！只得回到调用它的全局执行上下文去寻找，在全局执行上下文 counter 为 undefined，所以执行 "),s("code",[n._v("counter = undefined + 1")]),n._v("；")])]),n._v(" "),s("li",[s("p",[n._v("第六行，返回 counter，值为 1，销毁新函数执行上席文；")])]),n._v(" "),s("li",[s("p",[n._v("回到第十一行，c1 赋值为 1；")])]),n._v(" "),s("li",[s("p",[n._v("第十二行，重复步骤第 10 到第 14 步，c2 同理赋值为 1；")])]),n._v(" "),s("li",[s("p",[n._v("第十三行，重复步骤第 10 到第 14 步，c3 同理赋值为 1；")])]),n._v(" "),s("li",[s("p",[n._v("最终打印输出；")])])]),n._v(" "),s("p",[n._v("是这样的吗？我们在控制台打印：")]),n._v(" "),s("p",[s("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/60ee59c41a9140b685a13a08de7d79a5~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),n._v(" "),s("p",[n._v("结果竟然与我们分析的期望打印相悖！")]),n._v(" "),s("p",[n._v("发生了什么？")]),n._v(" "),s("p",[n._v("一定还有一个神秘的东西在作用！它就是 “闭包”！"),s("strong",[n._v("the missing piece ！")])]),n._v(" "),s("span",{staticStyle:{color:"orange"}},[s("p",[n._v("它的原理是这样的：")]),n._v(" "),s("p",[n._v("当我们声明一个函数时，存储以供调用，存储的不仅仅是这个函数的定义，同时还有这个函数的“闭包”，闭包包括了这个函数执行上下文所有变量的词法作用域。这些在函数被创建时就已经确定下来了。")])]),n._v(" "),s("p",[n._v("做个不太恰当的比喻，把函数理解为一个人，当这人生下来的时候（函数创建时），也附赠了一个背包（闭包），这个背包包括了家庭环境（词法作用域）。")]),n._v(" "),s("p",[n._v("所以我们上一段的逐步分析是错的！")]),n._v(" "),s("p",[n._v("我们来进行一次正确的分析！")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v(" 1：let counter\n 2: function createCounter() {\n 3:   let counter = 0\n 4:   const myFunction = function() {\n 5:     counter = counter + 1\n 6:     return counter\n 7:   }\n 8:   return myFunction\n 9: }\n 10: const increment = createCounter()\n11: const c1 = increment()\n12: const c2 = increment()\n13: const c3 = increment()\n14: console.log('example increment', c1, c2, c3)\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br")])]),s("ol",[s("li",[s("p",[n._v("第一行，声明一个变量 counter ，赋值为 undefined ；"),s("span",{staticStyle:{color:"gray"}},[n._v("（同上）")])])]),n._v(" "),s("li",[s("p",[n._v("第二行至第九行，在全局执行上下文声明了一个函数 createCounter ，不做执行，存储以供调用；"),s("span",{staticStyle:{color:"gray"}},[n._v("（同上）")])])]),n._v(" "),s("li",[s("p",[n._v("第十行，在全局执行上下文声明了一个变量 increment ，赋值为 createCounter 函数执行的返回值；"),s("span",{staticStyle:{color:"gray"}},[n._v("（同上）")])])]),n._v(" "),s("li",[s("p",[n._v("调用 createCounter 函数，它在第 2 步已经声明了，执行它！"),s("span",{staticStyle:{color:"gray"}},[n._v("（同上）")])])]),n._v(" "),s("li",[s("p",[n._v("第二到九行，创建一个新的临时的函数执行上下文；"),s("span",{staticStyle:{color:"gray"}},[n._v("（同上）")])])]),n._v(" "),s("li",[s("p",[n._v("在这个临时的函数执行上下文声明一个变量 counter，赋值为 0；"),s("span",{staticStyle:{color:"gray"}},[n._v("（同上）")])])]),n._v(" "),s("li",[s("p",[n._v("第四到七行，声明一个 myFunction 函数，"),s("span",{staticStyle:{color:"orange"}},[s("strong",[n._v("同时还会创建一个闭包，包括这个函数执行上下文所有变量的词法作用域。此例中就是 counter，通过作用域链查找，它的值为 0")]),n._v("。")]),n._v("这里同样不做执行，存储以供调用；")])]),n._v(" "),s("li",[s("p",[n._v("将 myFunction "),s("span",{staticStyle:{color:"orange"}},[s("strong",[n._v("和它的闭包")])]),n._v(" 一起进行返回，赋值给 变量 increment。createCounter 函数执行上下文被销毁，myFunction 和 counter 都将被销毁；")])]),n._v(" "),s("li",[s("p",[n._v("此时的全局执行上下文没有 myFunction 函数了，只有 increment 函数；"),s("span",{staticStyle:{color:"gray"}},[n._v("（同上）")])])]),n._v(" "),s("li",[s("p",[n._v("第十一行，声明一个变量 c1 , 赋值为 increment 函数执行的返回值；"),s("span",{staticStyle:{color:"gray"}},[n._v("（同上）")])])]),n._v(" "),s("li",[s("p",[n._v("increment 函数是 createCounter 函数执行的返回值，它在第四行到第七行被定义；"),s("span",{staticStyle:{color:"gray"}},[n._v("（同上）")])])]),n._v(" "),s("li",[s("p",[n._v("创建一个新的函数执行上下文，没有传参，直接进入函数内部进行执行；"),s("span",{staticStyle:{color:"gray"}},[n._v("（同上）")])])]),n._v(" "),s("li",[s("p",[n._v("第五行，"),s("code",[n._v("counter = counter + 1")]),n._v("，counter 变量在新创建的函数执行上下文找的到吗？找不到！"),s("span",{staticStyle:{color:"orange"}},[s("strong",[n._v("我们要去它的“闭包”里面找一找！")])]),n._v("，竟然是有的！它的值为 0 ，那么就可以执行 counter = 0 + 1，等于 1；")])]),n._v(" "),s("li",[s("p",[n._v("第六行，返回 counter，值为 1，销毁新函数执行上席文；"),s("span",{staticStyle:{color:"gray"}},[n._v("（同上）")])])]),n._v(" "),s("li",[s("p",[n._v("回到第十一行，c1 赋值为 1；"),s("span",{staticStyle:{color:"gray"}},[n._v("（同上）")])])]),n._v(" "),s("li",[s("p",[n._v("第十二行，重复步骤第 10 到第 14 步，"),s("span",{staticStyle:{color:"orange"}},[s("strong",[n._v("我们再去“闭包”里找的时候，因为经过上一步的操作 counter 已经变为 1 了，所以再执行加法运算，counter 结果为 2")])]),n._v("；")])]),n._v(" "),s("li",[s("p",[n._v("第十三行，重复步骤第 10 到第 14 步，c3 同理赋值为 3；")])]),n._v(" "),s("li",[s("p",[n._v("最终打印输出；")])])]),n._v(" "),s("p",[n._v("噢~原来是这样！")]),n._v(" "),s("blockquote",[s("p",[s("strong",[n._v("当一个函数声明的时候不单单只做了声明，后面还带着个“闭包”呢！闭包里装的是这个函数执行上下文所有变量的词法作用域！")])])]),n._v(" "),s("p",[n._v("原来这就是闭包！")]),n._v(" "),s("p",[n._v("你可能会疑问：只要一个函数进行了声明，就包含了闭包，那全局函数是不是也有闭包呢？")]),n._v(" "),s("p",[n._v("答案是：YES !")]),n._v(" "),s("p",[n._v("全局函数声明时，也有闭包！只不过它的变量词法作用域就是全局的，所以不是“闭”的不是很明显。")]),n._v(" "),s("p",[n._v("当一个函数返回另外一个函数时，“闭包”是最明显的！返回的函数的变量词法作用域可以访问非全局范围的变量，它们仅放在其闭包中！")]),n._v(" "),s("h2",{attrs:{id:"闭包测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包测试"}},[n._v("#")]),n._v(" 闭包测试")]),n._v(" "),s("p",[n._v("这里再放几道闭包测试题目，供大家自查测试：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// 题目一\nlet c = 4\nfunction addX(x) {\n  return function(n) {\n     return n + x\n  }\n}\nconst addThree = addX(3)\nlet d = addThree(c)\nconsole.log('example partial application', d)\n\n\n// 题目二\n\nfunction multiply(number1, number2) {\n  if (number2 !== undefined) {\n    return number1 * number2;\n  }\n  return function doMultiply(number2) {\n    return number1 * number2;\n  };\n}\n\nmultiply(4, 5); \nconst double = multiply(2);\ndouble(5);\n\n// 题目三\n\nfunction showBiBao() {\n    for (var i = 0; i < 5; i++) {\n      setTimeout( timer => () {\n          console.log(i);\n      }, 1000 );\n    }\n    console.log(i)\n}\n\nshowBiBao()\n\nfunction showListNumber() {\n    for(var i = 0; i < 5; i++) {\n        let ret = function(i) {\n            setTimeout(function timerr() {\n                console.log(i)\n            }, 1000)\n        }\n        ret(i)\n    }\n    console.log(i)\n}\nshowListNumber()\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br")])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[n._v("#")]),n._v(" 总结")]),n._v(" "),s("p",[n._v("闭包就是这么神奇！它无处不在！只要有函数申明的地方就有闭包！（只不过有时候“闭”的不那么明显）")]),n._v(" "),s("p",[n._v("你以为本篇是在讲闭包？错！本篇是在讲函数申明！")]),n._v(" "),s("p",[n._v("你以为本篇是在讲函数申明？错！本篇是在讲词法作用域！")]),n._v(" "),s("p",[n._v("你以为本篇是在讲词法作用域？错！本篇是在讲 JS 是动态语言!")]),n._v(" "),s("p",[n._v("你一问本篇是在讲 JS 是动态语言？错！本篇是在讲 JS 运行是单线程的！")]),n._v(" "),s("p",[n._v("......")]),n._v(" "),s("p",[n._v("就是玩儿~")]),n._v(" "),s("p",[n._v("关注公众号【掘金安东尼】，关注前端技术，也关注生活，持续输出ing！")])])}),[],!1,null,null,null);e.default=a.exports}}]);