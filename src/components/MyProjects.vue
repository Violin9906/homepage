<template>
  <div class="myProjects">
    <h3>/* MY PROJECTS */</h3>
    <div class="projectDetail">
      [{<br>
      "name": "My-IME2",<br>
      "description": "A Shuangpin IME for Chrome OS.",<br>
      "state": "<span class="text-warning">developing</span>",<br>
      "repository": "<a href="//github.com/Violin9906/my-ime2">Violin9906/my-ime2</a>"<br>
      },
      {<br>
      "name": "USTCAAA2",<br>
      "description": "New website for Association of Amateur Astronomers of USTC.",<br>
      "state": "<span class="text-warning">developing</span>",<br>
      "repository": "<a href="//github.com/Violin9906/ustcaaa2">Violin9906/ustcaaa2</a>"<br>
      },
      {<br>
      "name": "<a href="//violin9906.github.io/phex">PHEX</a>",<br>
      "description: "USTC Physics Experiments Auto Calculator.",<br>
      "state": "<span class="text-warning">developing</span>",<br>
      "repository": "<a href="//github.com/Violin9906/phex">Violin9906/phex</a>"<br>
      },
      {<br>
      "name": "USTCAAA",<br>
      "description": "Website for Association of Amateur Astronomers of USTC.",<br>
      "state": "<span class="text-success">complete</span>",<br>
      "repository": "<a href="//github.com/Violin9906/ustcaaa">Violin9906/ustcaaa</a>"<br>
      },
      {<br>
      "name": "My-IME",<br>
      "description": "A simple Shuangpin IME for Chrome OS, based on Baidu Cloud Input API.",<br>
      "state": "<span class="text-danger">abandoned</span>",<br>
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
  font-family: "Courier New", monospace;
}
a {
  color: #6699ff;
}
.badge {
  margin-left: 1vw;
  margin-right: 1vw;
}
.projectDetail {
  font-family: "Courier New", monospace;
  font-size: medium;
  margin: 20px 5px;
}
</style>
