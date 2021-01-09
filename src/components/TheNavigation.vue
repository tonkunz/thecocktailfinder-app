<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">Sobre</router-link>
  </nav>
</template>

<style scoped>
#nav {
  display: flex;
  justify-content: center;
  padding: 30px;
  background: #583D72;
}
#nav a {
  font-weight: bold;
  color: #fff;
  padding: 0 10px;
}
#nav a.custom-active-route-class {
  color: #cfcfcf;
}
</style>