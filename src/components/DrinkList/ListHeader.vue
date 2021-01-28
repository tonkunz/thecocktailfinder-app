<template>
  <div class="list-header">
    <img
      src="@/assets/images/Coqueteis.svg"
      alt="The CocktailFinder Logo"
      class="coqueteis"
    />

    <img src="@/assets/logo.svg" alt="The CocktailFinder Logo" class="logo" />
  </div>
</template>

<style scoped>
.list-header {
  display: flex;
  background: #583d72;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
}

.coqueteis {
  height: 40px;
  margin: 1.25rem 2rem;
}

.logo {
  margin-right: 2rem;
  width: 125px;
}

@media (max-width: 475px) {
  .list-header {
    justify-content: center;
  }
  .logo {
    display: none;
  }
}
</style>