<template>
  <div class="actuator">
    <h3>微机原理与嵌入式系统</h3>
    <p>(210076.10)</p>
    <div class="section">
      <h3>/* RESOURCES */</h3>
    </div>
    <div class="section">
      <h3>/* FAQ */</h3>
    </div>
    <div class="section">
      <h3>/* LINKS */</h3>
    </div>
  </div>
</template>

<style scoped lang="less">
.actuator {
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
.qa {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 150%;
  font-weight: bolder;
}
</style>
