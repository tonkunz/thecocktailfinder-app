<template>
  <div class="container">
    <div class="wide-container">
      <ListHeader />
      <div class="content-container">
        <!-- Filtros da busca -->
        <ListFilter @search="fetchRouter($event)" />
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
import {
  inicialFetch,
  searchByCocktailName,
  filterCocktails
} from "@/services/api.js";

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
    /** Faz a requisição com os drinks iniciais */
    async fetchInitialData() {
      try {
        const result = await inicialFetch();
        this.drinkList = result;
      } catch (ex) {
        console.log("err: ", ex);
      }
    },
    /** Método responsável por direcionar a busca para
     * o endpoint correto baseado no filtro recebido
     */
    fetchRouter(data) {
      switch (data.typeSelected) {
        case "nome":
          this.fetchByName(data.filterContent);
          break;
        case "teor":
          this.filterCocktail("a", data.filterContent);
          break;
        case "categoria":
          // TODO: fetch by categoria;
          console.log("Fetch by [categoria]");
          break;
        case "copo":
          // TODO: fetch by copo
          console.log("Fetch by [copo]");
          break;
        case "ingrediente":
          // TODO: fetch by ingrediente
          console.log("Fetch by [ingrediente]");
          break;
      }
    },
    async fetchByName(name) {
      this.drinkList = await searchByCocktailName(name);
    },
    async filterCocktail(type, param) {
      this.drinkList = await filterCocktails(type, param);
    }
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
  .drink-list {
    margin-top: 2rem;
  }
}
</style>