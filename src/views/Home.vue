<template>
  <div class="home">
    <h2>王若麟的个人主页</h2>
    <hr>
    <AboutMe></AboutMe>
    <TechStack></TechStack>
  </div>
</template>

<script>
import AboutMe from '@/components/AboutMe.vue'
import TechStack from '@/components/TechStack.vue'

export default {
  name: 'home',
  components: {
    AboutMe,
    TechStack
  }
}
</script>
