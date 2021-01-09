<template>
  <div id="app">
    <TheNavigation />
    <main id="main">
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation";
import TheFooter from "@/components/TheFooter";

export default {
  name: 'App',
  components: {
    TheNavigation,
    TheFooter
  }
}
</script>

<style>
/** Estilos Globais da aplicação */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main {
  flex: 1;
}

body, ul, li, h1, h2, p {
  margin: 0px;
}

* {
  box-sizing: border-box;
}

ul {
  list-style: none;
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #345;
}
</style>
