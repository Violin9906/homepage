<template>
  <div class="aboutMe">
    <h3>/* ABOUT ME */</h3>
    <ul>
      <li>王若麟</li>
      <li>中国科学技术大学 化学物理系转自动化系 PB1703</li>
      <li>现任中国科大学生天文爱好者协会会长</li>
      <li>
        <span class="badge badge-dark">钢琴</span>
        <span class="badge badge-dark">前端</span>
        <span class="badge badge-dark">看星星</span>
      </li>
      <li>
        <span class="badge badge-dark">
          <del>Overwatch</del>
        </span>
        <span class="badge badge-dark">Minecraft</span>
        <span class="badge badge-dark">Kerbal Space Program</span>
        <span class="badge badge-dark">
          <del>Arknights</del>
        </span>
      </li>
      <li>
        <span class="badge badge-dark">SOLO</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
  font-family: "Courier New", monospace;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 20px 10px;
}
a {
  color: #6699ff;
}
.badge {
  margin-left: 1vw;
  margin-right: 1vw;
}
</style>
