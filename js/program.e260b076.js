(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["program"],{"6ec4":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},n=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"program"},[e("h2",[a._v("计算机程序设计A")]),e("p",[a._v("(210522.05)")]),e("hr"),e("div",{attrs:{id:"program_parent"}},[e("div",{staticClass:"section"},[e("a",{attrs:{"data-toggle":"collapse",href:"#resources_content","aria-expanded":"false","aria-controls":"resources_content"}},[e("h3",[a._v("\n        /*\n        RESOURCES */")])]),e("div",{staticClass:"collapse",attrs:{id:"resources_content"}},[e("h4",[a._v("Chapter 1")]),e("ul",[e("li",[e("a",{attrs:{href:"//home.ustc.edu.cn/~violinwang/resources/c/Chapter1.pdf",download:"Chapter1.pdf"}},[a._v("下载讲义")])])]),e("h4",[a._v("Chapter 2")]),e("ul",[e("li",[e("a",{attrs:{href:"//home.ustc.edu.cn/~violinwang/resources/c/Chapter2.pdf",download:"Chapter2.pdf"}},[a._v("下载讲义")])])]),e("h4",[a._v("Chapter 3")]),e("ul",[e("li",[e("a",{attrs:{href:"//home.ustc.edu.cn/~violinwang/resources/c/Chapter3.pdf",download:"Chapter3.pdf"}},[a._v("下载讲义")])])])])]),e("div",{staticClass:"section"},[e("a",{attrs:{"data-toggle":"collapse",href:"#ide_content","aria-expanded":"false","aria-controls":"ide_content"}},[e("h3",[a._v("/* IDE\n        */")])]),e("div",{staticClass:"collapse",attrs:{id:"ide_content"}},[e("p",[e("del",[a._v("如何安装C语言集成开发环境")])]),e("p",[a._v("如何优雅的劝说一个人放弃windows")]),e("h4",[a._v("Mac OS")]),e("p",[e("del",[a._v("苹果爸爸万岁")])]),e("p",[e("del",[a._v("为什么要给我划掉")])]),e("p",[a._v("最简单省事的办法：App Store里面安装Xcode")]),e("p",[a._v("Xcode自带编译环境，如果你觉得Xcode太臃肿，可以装好以后再装个vscode之类的")]),e("p",[a._v("或者也可以不装Xcode，用Homebrew安装gcc/clang和gdb/lldb也行")]),e("p",[a._v("也可以试试"),e("a",{attrs:{href:"//www.jetbrains.com/clion/"}},[a._v("CLion")]),a._v("，它对学生是免费的，不嫖白不嫖")]),e("h4",[a._v("Linux")]),e("p",[a._v("你在逗我吗？都会用Linux了还要我教你装gcc？")]),e("p",[a._v("还是教一下吧：Ubuntu/Debian系的，sudo apt-get install build-essential")]),e("p",[a._v("用其他系列发行版的（比如Cent/Arch），我敬你是条汉子Orz")]),e("p",[a._v("写代码的话用gedit或者vscode就行")]),e("p",[a._v("啥？你说你没装图形界面？Vim，请")]),e("h4",[a._v("Windows")]),e("p",[a._v("与其在windows下写C，不如装个双系统（一脸嫌弃）")]),e("p",[a._v("或者用WSL也行")]),e("p",[a._v("实在不行装个虚拟机也挺好（就是有点吃配置哈）")]),e("p",[a._v("嗯嗯，说正经的")]),e("p",[a._v("windows平台下有两套编译器可以选择:MinGW和MSVC")]),e("p",[a._v("前者是gnu的，和大多数linux平台下一样，用gcc编译")]),e("p",[a._v("后者是微软出的，作为Visual Studio的一部分提供，用cl编译")]),e("p",[a._v("如果不是打算用Visual Studio的话，建议用MinGW")]),e("p",[a._v("因为傻*微软不知道怎么想的，不把编译环境添加到环境变量里")]),e("p",[a._v("MinGW的安装，自己去百度吧")]),e("p",[a._v("其实讲道理，MinGW和MSVC没一个好东西")]),e("p",[a._v("除了这俩玩意儿，还有一个东西叫clang")]),e("p",[a._v("按理说这家伙比gcc和msvc都好用，它的性能是最好的而且有很友好的编译错误提示")]),e("p",[a._v("但是鬼畜的是它不带库")]),e("p",[a._v("看不懂没关系，总之这个东西装到windows上是个残废\n          "),e("del",[a._v("但是在Mac上很好用啊所以赶紧买Mac吧")]),a._v("\n          ，必须要再装一个MinGW或者MSVC\n        ")]),e("p",[a._v("喵喵喵？那我图啥？")]),e("p",[a._v("行吧，你开心就好")]),e("p",[a._v("咳咳，下面我们假设你已经装好了MinGW并且配置好了环境变量")]),e("p",[a._v("那么事情就简单多了")]),e("p",[a._v("你可以用"),e("a",{attrs:{href:"//www.geany.org/"}},[a._v("Geany")]),a._v("，一个超轻量的文本编辑器，并且可以利用MinGW进行编译和运行，缺点是原生不支持调试，必须装插件才行")]),e("p",[a._v("想要高级一点的可以用"),e("a",{attrs:{href:"//www.codeblocks.org/"}},[a._v("Code::Blocks")]),a._v("，这算是一个真正意义上的IDE(集成开发环境)了")]),e("p",[a._v("上面所说的"),e("a",{attrs:{href:"//www.jetbrains.com/clion/"}},[a._v("CLion")]),a._v("也有windows版，对学生免费，不过这个IDE对于我们这门课程来说有些臃肿")]),e("p",[a._v("不怕麻烦的话可以试着自己去配置Visual Studio Code（不是Visual Studio哦）或者Sublime Text，尤其对于颜控的同学")]),e("p",[a._v("因为上面说的Geany和Code::Blocks都太！丑！啦！")]),e("p",[a._v("也可以试试Visual Studio，社区版本是免费的。只需要安装C/C++的开发环境就可以了，全部安装的话实在太大了。毕竟Visual Studio号称宇宙最强IDE不是吗: )")]),e("p",[a._v("实在不行你可以用命令行编译和调试嘛（#滑稽）要什么IDE，老夫只用记事本！（不过说真的，如果打算用命令行的话，还是装个VSCode或者Notepad++之类的文本编辑器吧，记事本也太寒碜了）")]),e("p",[a._v("最后，如果你真的不想折腾的话，就去用祖传的Dev-C++吧，我已经尽力了(这个软件已经4年没有更新了！你真的要用它吗？）")]),e("p",[a._v("最后的最后，答应我，无论如何别去用VC6.0好嘛")]),e("p",[a._v("我\n          "),e("del",[a._v("偷电瓶车")]),a._v("\n          装虚拟机养你还不行嘛\n        ")])])]),e("div",{staticClass:"section"},[e("a",{attrs:{"data-toggle":"collapse",href:"#faq_content","aria-expanded":"false","aria-controls":"faq_content"}},[e("h3",[a._v("/* FAQ\n        */")])]),e("div",{staticClass:"collapse",attrs:{id:"faq_content"}},[e("p",[a._v("这里我会不定期整理同学们的问题，如果你有其他的问题，可以QQ私聊我")]),e("section",[e("p",[e("span",{staticClass:"qa"},[a._v("Q:")]),a._v("小数进制转换时，最后一位如何进行舍入？")]),e("p",[e("span",{staticClass:"qa"},[a._v("A:")]),a._v('根据几位助教商讨的结果，本门课程如无特殊说明，采用"舍入到最近值，偶数优先"的法则。\n            也即，将该数舍入到与它最接近的数字。如果两侧一样近，优先舍入到高一位是偶数的数字。\n          ')])]),e("section",[e("p",[e("span",{staticClass:"qa"},[a._v("Q:")]),a._v("啥是环境变量")]),e("p",[e("span",{staticClass:"qa"},[a._v("A:")]),a._v("环境变量是操作系统中的一些变量，大多数时候特指PATH这个变量。它存储着系统中默认可执行文件的路径。\n            比如，当你敲下gcc这个命令时，操作系统会去PATH变量中存储的文件夹下寻找gcc.exe。如果没有正确设置环境变量，运行gcc命令时就会出现找不到命令的错误。\n          ")])])])]),e("div",{staticClass:"section"},[e("h3",[a._v("/* LINKS */")]),e("ul",[e("li",[e("a",{attrs:{href:"//www.gnu.org/software/gnu-c-manual/gnu-c-manual.html"}},[a._v("GNU C Reference")])]),e("li",[e("a",{attrs:{href:"//blog.csdn.net/bat67/article/details/76095813"}},[a._v("Visual Studio Code配置C/C++环境")])])])])])])}],c=(e("b5cc"),e("2877")),i={},o=Object(c["a"])(i,s,n,!1,null,"25e2d056",null);t["default"]=o.exports},b5cc:function(a,t,e){"use strict";var s=e("f973"),n=e.n(s);n.a},f973:function(a,t,e){}}]);