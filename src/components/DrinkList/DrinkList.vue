<template>
  <div class="container">
    <div class="wide-container">
      <ListHeader />
      <div class="content-container">
        <!-- Filtros da busca -->
        <ListFilter />
        <!-- Listagem dos drinks -->
        <div class="drink-list">
          <div
            v-for="drink in drinkList"
            :key="drink.idDrink"
            class="list-item"
          >
            <DrinkCard :drink="drink" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListHeader from "./ListHeader.vue";
import ListFilter from "./ListFilter.vue";
import DrinkCard from "./DrinkCard";
import { inicialFetch } from "@/services/api.js";

export default {
  name: "DrinkList",
  components: {
    ListHeader,
    ListFilter,
    DrinkCard,
  },
  data() {
    return {
      drinkList: [],
    };
  },
  /** LifeCycle Hook com uma lista inicial de drinks */
  beforeMount() {
    this.fetchInitialData();
  },
  methods: {
    async fetchInitialData() {
      try {
        const result = await inicialFetch();
        this.drinkList = result;
      } catch (ex) {
        console.log("err: ", ex);
      }
    },
  },
};
</script>

<style escoped>
.container {
  display: flex;
  margin: 2rem 1rem;
  justify-content: center;
}

.wide-container {
  display: flex;
  flex-direction: column;
  max-width: 1750px; /** Ajuste p/ telas muito grandes (ultra-wide) */
}

.content-container {
  margin-top: 1rem;
  display: flex;
}

.drink-list {
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.list-item {
  margin: 0.5rem;
}

/** Responsividade */
@media (max-width: 1025px) {
  .content-container {
    flex-direction: column;
  }
}
</style>