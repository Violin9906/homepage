<template>
  <div class="program">
    <h2>计算机程序设计A</h2>
    <p>(210522.05)</p>
    <hr>
    <div id="program_parent">
      <div class="section">
        <a data-toggle="collapse" href="#resources_content" aria-expanded="false" aria-controls="resources_content"><h3>
          /*
          RESOURCES */</h3></a>
        <div id="resources_content" class="collapse">
          <h4>Chapter 1</h4>
          <ul>
            <li><a href="//home.ustc.edu.cn/~violinwang/resources/c/Chapter1.pdf" download="Chapter1.pdf">下载讲义</a></li>
          </ul>
          <h4>Chapter 2</h4>
          <ul>
            <li><a href="//home.ustc.edu.cn/~violinwang/resources/c/Chapter2.pdf" download="Chapter2.pdf">下载讲义</a></li>
          </ul>
          <h4>Chapter 3</h4>
          <ul>
            <li><a href="//home.ustc.edu.cn/~violinwang/resources/c/Chapter3.pdf" download="Chapter3.pdf">下载讲义</a></li>
          </ul>
        </div>
      </div>

      <div class="section">
        <a data-toggle="collapse" href="#ide_content" aria-expanded="false" aria-controls="ide_content"><h3>/* IDE
          */</h3></a>
        <div id="ide_content" class="collapse">
          <p>
            <del>如何安装C语言集成开发环境</del>
          </p>
          <p>如何优雅的劝说一个人放弃windows</p>
          <h4>Mac OS</h4>
          <p>
            <del>苹果爸爸万岁</del>
          </p>
          <p>
            <del>为什么要给我划掉</del>
          </p>
          <p>最简单省事的办法：App Store里面安装Xcode</p>
          <p>Xcode自带编译环境，如果你觉得Xcode太臃肿，可以装好以后再装个vscode之类的</p>
          <p>或者也可以不装Xcode，用Homebrew安装gcc/clang和gdb/lldb也行</p>
          <p>也可以试试<a href="//www.jetbrains.com/clion/">CLion</a>，它对学生是免费的，不嫖白不嫖</p>

          <h4>Linux</h4>
          <p>你在逗我吗？都会用Linux了还要我教你装gcc？</p>
          <p>还是教一下吧：Ubuntu/Debian系的，sudo apt-get install build-essential</p>
          <p>用其他系列发行版的（比如Cent/Arch），我敬你是条汉子Orz</p>
          <p>写代码的话用gedit或者vscode就行</p>
          <p>啥？你说你没装图形界面？Vim，请</p>

          <h4>Windows</h4>
          <p>与其在windows下写C，不如装个双系统（一脸嫌弃）</p>
          <p>或者用WSL也行</p>
          <p>实在不行装个虚拟机也挺好（就是有点吃配置哈）</p>
          <p>嗯嗯，说正经的</p>
          <p>windows平台下有两套编译器可以选择:MinGW和MSVC</p>
          <p>前者是gnu的，和大多数linux平台下一样，用gcc编译</p>
          <p>后者是微软出的，作为Visual Studio的一部分提供，用cl编译</p>
          <p>如果不是打算用Visual Studio的话，建议用MinGW</p>
          <p>因为傻*微软不知道怎么想的，不把编译环境添加到环境变量里</p>
          <p>MinGW的安装，自己去百度吧</p>
          <p>其实讲道理，MinGW和MSVC没一个好东西</p>
          <p>除了这俩玩意儿，还有一个东西叫clang</p>
          <p>按理说这家伙比gcc和msvc都好用，它的性能是最好的而且有很友好的编译错误提示</p>
          <p>但是鬼畜的是它不带库</p>
          <p>看不懂没关系，总之这个东西装到windows上是个残废
            <del>但是在Mac上很好用啊所以赶紧买Mac吧</del>
            ，必须要再装一个MinGW或者MSVC
          </p>
          <p>喵喵喵？那我图啥？</p>
          <p>行吧，你开心就好</p>
          <p>咳咳，下面我们假设你已经装好了MinGW并且配置好了环境变量</p>
          <p>那么事情就简单多了</p>
          <p>你可以用<a href="//www.geany.org/">Geany</a>，一个超轻量的文本编辑器，并且可以利用MinGW进行编译和运行，缺点是原生不支持调试，必须装插件才行</p>
          <p>想要高级一点的可以用<a href="//www.codeblocks.org/">Code::Blocks</a>，这算是一个真正意义上的IDE(集成开发环境)了</p>
          <p>上面所说的<a href="//www.jetbrains.com/clion/">CLion</a>也有windows版，对学生免费，不过这个IDE对于我们这门课程来说有些臃肿</p>
          <p>不怕麻烦的话可以试着自己去配置Visual Studio Code（不是Visual Studio哦）或者Sublime Text，尤其对于颜控的同学</p>
          <p>因为上面说的Geany和Code::Blocks都太！丑！啦！</p>
          <p>也可以试试Visual Studio，社区版本是免费的。只需要安装C/C++的开发环境就可以了，全部安装的话实在太大了。毕竟Visual Studio号称宇宙最强IDE不是吗: )</p>
          <p>实在不行你可以用命令行编译和调试嘛（#滑稽）要什么IDE，老夫只用记事本！（不过说真的，如果打算用命令行的话，还是装个VSCode或者Notepad++之类的文本编辑器吧，记事本也太寒碜了）</p>
          <p>最后，如果你真的不想折腾的话，就去用祖传的Dev-C++吧，我已经尽力了(这个软件已经4年没有更新了！你真的要用它吗？）</p>
          <p>最后的最后，答应我，无论如何别去用VC6.0好嘛</p>
          <p>我
            <del>偷电瓶车</del>
            装虚拟机养你还不行嘛
          </p>
        </div>
      </div>

      <div class="section">
        <a data-toggle="collapse" href="#faq_content" aria-expanded="false" aria-controls="faq_content"><h3>/* FAQ
          */</h3></a>
        <div id="faq_content" class="collapse">
          <p>这里我会不定期整理同学们的问题，如果你有其他的问题，可以QQ私聊我</p>
          <section>
            <p><span class="qa">Q:</span>小数进制转换时，最后一位如何进行舍入？</p>
            <p><span class="qa">A:</span>根据几位助教商讨的结果，本门课程如无特殊说明，采用"舍入到最近值，偶数优先"的法则。
              也即，将该数舍入到与它最接近的数字。如果两侧一样近，优先舍入到高一位是偶数的数字。
            </p>
          </section>
          <section>
            <p><span class="qa">Q:</span>啥是环境变量</p>
            <p><span class="qa">A:</span>环境变量是操作系统中的一些变量，大多数时候特指PATH这个变量。它存储着系统中默认可执行文件的路径。
              比如，当你敲下gcc这个命令时，操作系统会去PATH变量中存储的文件夹下寻找gcc.exe。如果没有正确设置环境变量，运行gcc命令时就会出现找不到命令的错误。
            </p>
          </section>
        </div>
      </div>

      <div class="section">
        <h3>/* LINKS */</h3>
        <ul>
          <li><a href="//www.gnu.org/software/gnu-c-manual/gnu-c-manual.html">GNU C Reference</a></li>
          <li><a href="//blog.csdn.net/bat67/article/details/76095813">Visual Studio Code配置C/C++环境</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.program {
  h2 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
}

.section {
  margin: auto 20vw;
  width: 60vw;
  @media screen and (max-width: 576px) {
    width: auto;
    margin: auto 2vw;
  }

  h3 {
    margin: 40px 0 0;
    font-family: "Courier New", monospace;
  }

  h4 {
    margin: 30px 0 0;
    font-family: "Courier New", monospace;
  }

  p {
    margin: 20px 5px;
    font-family: "Microsoft YaHei", STHeiti, SimHei, sans-serif;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin: 20px 10px;
  }
}

.qa {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 150%;
  font-weight: bolder;
}

.paraTitle {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 110%;
  font-weight: bolder;
}
</style>
