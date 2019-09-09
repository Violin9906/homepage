<template>
  <div class="myProjects">
    <h3>/* MY PROJECTS */</h3>
    <div class="projectDetail">
      [{<br>
      "name": "<a href="//ustcaaa.club">ustcaaa.club</a>",<br>
      "description": "A website for USTC's Association of Amateur Astronomers.",<br>
      "state": "<span class="text-success">complete</span>",<br>
      "repository": "<a href="//github.com/Violin9906/ustcaaa">Violin9906/ustcaaa</a>"<br>
      },{<br>
      "name": "<a href="//home.ustc.edu.cn/~violinwang/phex">PHEX</a>",<br>
      "description: "Auto Calculator for USTC Physics Experiments.",<br>
      "state": "<span class="text-warning">developing(gugugu~)</span>",<br>
      "repository": "<a href="//dev.tencent.com/u/violinwang/p/phex/git">violinwang/phex</a>"<br>
      },{<br>
      "name": "My-IME",<br>
      "description": "A Shuangpin IME for Chrome OS, based on Baidu Cloud Input API.",<br>
      "state": "<span class="text-danger">pause</span>",<br>
      "repository": "<a href="//github.com/Violin9906/my-ime">Violin9906/my-ime</a>"<br>
      }]
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyProjects'
}
</script>

<style scoped lang="less">
h3 {
  margin: 40px 0 0;
  font-family: Courier, monospace;
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
.projectDetail {
  font-family: Courier, monospace;
  font-size: medium;
}
</style>
