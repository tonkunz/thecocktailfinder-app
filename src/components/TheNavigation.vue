<template>
  <nav>
    <router-link to="/" class="logo">
      <img src="@/assets/logo.svg" alt="The CocktailFinder Logo">
    </router-link>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  display: flex;
  margin-top: 20px;
  padding: 15px 15px 15px 50px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background: #583D72;
}

.logo img {
  width: 150px;
  transition: transform .2s;
}

.logo img:hover {
  transform: scale(1.1);
}
</style>