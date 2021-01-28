<template>
  <nav>
    <router-link to="/" class="logo">
      <img src="@/assets/logo.svg" alt="The CocktailFinder Logo" />
    </router-link>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  display: flex;
  margin-top: 20px;
  padding: 0 20px 0 50px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background: #583d72;
}

.logo img {
  width: 135px;
  transition: transform 0.2s;
  margin: 1rem 2rem;
  width: 125px;
}

.logo img:hover {
  transform: scale(1.1);
}
</style>