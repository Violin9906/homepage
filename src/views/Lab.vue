<template>
  <div class="lab">
    <h2>实验室工作</h2>
    <hr/>
    <div class="section">
      <h3>/* RECRUIT */</h3>
      <p>
        我们多智能体实验室主要做Robotics与人工智能方向，在这儿你可以收获激动人心的第一手科研经历与论文发表机会（一作也有可能！），为你的学业助力，现在需要信、计、工等学院的同志们在强化学习、深度学习、电路与硬件设计等方向搬砖。
      </p>
      <p>
        多智能体实验室
        (MASL实验室)主要开展以人工智能和自主机器人的研究，现有教授1人（陈小平老师），副教授2人（吉建民老师，吴锋老师）。实验室多年来在多智能体系统，智能机器人，服务机器人软硬件平台等领域的瓶颈问题中进行了长期探索，并取得了一系列重大成果。
      </p>
      <ul>
        <li>
          <a href="http://www.robotics-kejia.com/">可佳服务机器人</a>
        </li>
        <li>
          <a href="https://zsb.ustc.edu.cn/2017/0904/c12990a191129/page.htm">机器人柔性手爪</a>
        </li>
      </ul>
      <p>
        实验室现有来自信院，计院，工院的20多名本科生参与研究。承担重要工作的本科生将会与研究生，博士生学长共同完成论文的撰写，甚至可能以第一作者的身份发表论文，为你的学业添砖加瓦。
      </p>
      <p>
        以下是我们组当前的研究方向：
      </p>
      <ul>
        <li>
          1. 强化学习在多自由度机器人复杂控制问题的理论和应用
        </li>
        <li>
          2. 多传感器数据融合和感知
        </li>
        <li>
          3. 结合人工示教(demonstration)的半自主遥控控制
        </li>
        <li>
          4. 用于紧凑空间的精密传动结构和嵌入式系统设计
        </li>
      </ul>
      <p>
        我们期望和具有如下品质的同学一起合作（这些要求并不是硬性的，但以下条件成立得越多的同学，被录取的几率也越大。）
      </p>
      <ul>
        <li>
          1. 有兴趣和热情，愿意每周投入一定的时间
        </li>
        <li>
          2. 具有相关的理论功底，吸收新知识能力较强
        </li>
        <li>
          3. 熟悉强化学习、深度学习相关理论
        </li>
        <li>
          4. 具有较强的工程能力或编程能力（例如，能熟练应用Python，ROS, TensorFlow, Pytorch等语言和工具）
        </li>
        <li>
          5. 别被上面的条件吓倒了！很少有人能够样样精通！一技之长就足以让你在我们的团队闪光,从零开始也并非不可能！至少你得自信，自信到足够愿意展示你的闪光点！
        </li>
      </ul>
      <p>
        请联系:
      </p>
      <p>
        林楠学长:<a href="mailto:fhln@mail.ustc.edu.cn">fhln@mail.ustc.edu.cn</a> 或者QQ:609353626
      </p>
      <p>
        王若麟学长:<a href="mailto:violinwang@mail.ustc.edu.cn">violinwang@mail.ustc.edu.cn</a> 或者QQ:2423431728
      </p>
      <p>
        <b>Join us to make best robots.</b>
      </p>
    </div>
    <div class="section">
      <h3>/* PRESENTATIONS */</h3>
      <ul>
        <li>
          <a
            href="http://home.ustc.edu.cn/~violinwang/lab/presentations/TSC0716.pdf"
          >过渡状态聚类(TSC)算法实现轨迹分段</a
          >
        </li>
        <li>
          <a
            href="http://home.ustc.edu.cn/~violinwang/lab/presentations/PoWER0628.pdf"
          >Policy learning by Weighting Exploration with the
            Returns(PoWER)算法</a
          >
        </li>
        <li>
          <a
            href="http://home.ustc.edu.cn/~violinwang/lab/presentations/DMP0622.pdf"
          >动态运动基元(DMP)算法调研</a
          >
        </li>
      </ul>
    </div>

    <div class="section">
      <h3>/* LINKS */</h3>
      <ul>
        <li><a href="http://ai.ustc.edu.cn">中国科大多智能体系统实验室</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.lab {
  h2 {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
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

  p {
    margin: 20px 5px;
    font-family: "Microsoft YaHei", STHeiti, SimHei, sans-serif;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    margin: 20px 10px;
  }
}
</style>
