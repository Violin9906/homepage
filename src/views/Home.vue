<template>
  <div class="home">
    <h2>王若麟的个人主页</h2>
    <AboutMe></AboutMe>
    <TechStack></TechStack>
    <MyProjects></MyProjects>
  </div>
</template>

<script>
import AboutMe from '@/components/AboutMe.vue'
import TechStack from '@/components/TechStack.vue'
import MyProjects from '@/components/MyProjects.vue'

export default {
  name: 'home',
  components: {
    AboutMe,
    TechStack,
    MyProjects
  }
}
</script>
