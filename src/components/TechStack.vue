<template>
  <div class="aboutMe">
    <h3>/* TECHNOLOGY STACK */</h3>
    <ul>
      <li>
        C
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 90%"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </li>
      <li>
        JavaScript
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 70%"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </li>
      <li>
        Git
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 60%"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </li>
      <li>
        Vue.js
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 55%"
            aria-valuenow="55"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </li>
      <li>
        Express.js
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 35%"
            aria-valuenow="35"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </li>
      <li>
        Matlab
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 30%"
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </li>
      <li>
        Python
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </li>
      <li>
        SQL
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 20%"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </li>
      <li>
        C++
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 15%"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

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
  font-family: "Courier New", monospace;
  font-size: 20px;
  margin: 20px 10px;
}

a {
  color: #6699ff;
}

.progress {
  width: 50vw;
  margin: 0 25vw;
  height: 5px;
}

.progress-bar {
  background-color: #6699ff;
}

@media screen and (max-width: 576px) {
  .progress {
    width: 100%;
    margin: 0 0;
  }
}

.progress .progress-bar {
  animation: animate-positive 2s;
}

@-webkit-keyframes animate-positive {
  0% {
    width: 0;
  }
}
@keyframes animate-positive {
  0% {
    width: 0;
  }
}
</style>
