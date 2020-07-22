<template>
  <div class="aboutMe">
    <h3>/* ABOUT ME */</h3>
    <ul>
      <li>中国科学技术大学 自动化系 1710</li>
      <li>业余天文爱好者</li>
      <li>喜欢前端开发、机器人、嵌入式</li>
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
