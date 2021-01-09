<template>
  <div class="home-page-container">
    <HelloWorld msg="Bem vindo ao The Cocktail Finder!"/>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomePage",
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.home-page-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>