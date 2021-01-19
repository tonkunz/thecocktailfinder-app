<template>
  <div class="container">
    <!-- Loading enquanto é feito o fetch dos dados -->
    <div class="loading-container" v-if="loading">
      <h3>Carregando...</h3>
      <CircularLoader v-if="loading" />
    </div>

    <!-- Conteúdo renderizado após o fetch ser completo -->
    <div v-else class="drink-container">
      <h1 class="drink-name">{{ result.strDrink }}</h1>

      <div class="content-container">
        <img
          class="drink-preview"
          :src="`${result.strDrinkThumb}/preview`"
          :alt="`${result.strDrink} thumbnail`"
        />

        <div class="drink-texts">
          <div class="category-alcoholic">
            <h3>{{ result.strCategory }}</h3>
            <h3>{{ result.strAlcoholic }}</h3>
          </div>
          <p class="instructions">
            <strong>Preparo: </strong>{{ result.strInstructions }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CircularLoader from "@/components/shared/CircularLoader.vue";
import { getCocktailDetails } from "@/services/api.js";

export default {
  name: "DrinkPage",
  components: {
    CircularLoader,
  },
  /** Prop id recebida pela rota */
  props: ["id"],
  data() {
    return {
      loading: false,
      result: {},
    };
  },
  /** Lifecycle Hook onCreate */
  created() {
    this.fetchDrinkData();
  },
  methods: {
    async fetchDrinkData() {
      this.loading = true;
      this.result = await getCocktailDetails(this.id);
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.loading-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.drink-container {
  display: flex;
  flex-direction: column;
}

.drink-name {
  color: #583d72;
  font-size: 2.5em;
  text-align: center;
}

.content-container {
  display: flex;
  widows: 500px;
}

.drink-preview {
  margin-right: 2rem;
  height: 250px;
  width: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
}

.drink-texts {
  display: flex;
  flex-direction: column;
}

.category-alcoholic {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  background: #583d72;
  color: #fff;
  padding: .5rem;
  border-radius: 20px;
}

.instructions {
  width: 750px;
}

/** Responsividade */
@media (max-width: 875px) {
  .category-alcoholic {
    margin-top: 1rem;
  }
  .instructions {
    width: auto;
  }
}
</style>