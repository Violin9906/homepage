<template>
  <div class="lab">
    <hr>

    <div class="section">
        <h3>/* PRESENTATIONS */</h3>
        <ul>
            <li><a href="http://home.ustc.edu.cn/~violinwang/lab/presentations/TSC0716.pdf">过渡状态聚类(TSC)算法实现轨迹分段</a></li>
            <li><a href="http://home.ustc.edu.cn/~violinwang/lab/presentations/PoWER0628.pdf">Policy learning by Weighting Exploration with the Returns(PoWER)算法</a></li>
            <li><a href="http://home.ustc.edu.cn/~violinwang/lab/presentations/DMP0622.pdf">动态运动基元(DMP)算法调研</a></li>
        </ul>
    </div>

    <div class="section">
      <h3>/* LINKS */</h3>
      <ul>
        <li><a href="http://ai.ustc.edu.cn">中国科大多智能体系统实验室</a></li>
        <li><a href="//ustc-violin.coding.net/p/ingenioushands">智能多指灵巧手项目</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.lab {
  h2 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
}

.section {
  margin: auto 20vw;
  width: 60vw;
  @media screen and (max-width:576px){
    width: auto;
    margin: auto 2vw;
  }

  h3 {
    margin: 40px 0 0;
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
</style>
