<template>
  <div class="card">
    <img
      :src="`${drink.strDrinkThumb}/preview`"
      :alt="`${drink.strDrink} thumbnail`"
    />
    <div class="card-content">
      <h1 class="card-title">{{ drink.strDrink }}</h1>
      <span class="card-category">{{ drink.strCategory }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DrinkCard",
  /** Recebe um objeto com os dados do Drink em específico */
  props: {
    drink: Object
  }
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.123);
  max-width: 200px;
  border-radius: 15px;
  height: 275px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform .2s; /* Zoom effect */
}

/** Hover effect */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  transform: scale(1.01); /* Zoom effect */
}

.card img {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  max-width: 200px;
  height: auto;
}

.card-content {
  padding: .5em;
}

.card-title {
  font-size: 1.2em;
  font-weight: bold;
}

.card-category {
  font-size: .85em;
}
</style>