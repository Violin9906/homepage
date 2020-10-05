<template>
  <div class="ta">
    <h2>助教工作</h2>
    <hr/>
    <div class="section">
      <h3>/* LIST */</h3>
      <ul>
        <li><a href="#/ta/c">2019秋：计算机程序设计A 主讲：王嵩</a></li>
        <li><a href="#/ta/actuator">2020秋：执行器技术 主讲：尚伟伟 王大欣</a></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style scoped lang="less">
.ta {
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
