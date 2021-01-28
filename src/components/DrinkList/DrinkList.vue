<template>
  <div class="container">
    <div class="wide-container">
      <ListHeader />
      <div class="content-container">
        <!-- Filtros da busca -->
        <ListFilter @search="fetchRouter($event)" />
        <!-- Listagem dos drinks -->
        <div class="results">
          <div class="loading-container" v-if="loading">
            <h3>Carregando...</h3>
            <CircularLoader />
          </div>

          <div v-else class="drink-list">
            <WarnContainer v-if="!drinkList">
              <template #title>Ops...</template>
              <template #body>
                Não foram encontrados resultados para sua busca.
              </template>
            </WarnContainer>

            <div
              v-else
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
  </div>
</template>

<script>
import ListHeader from "./ListHeader.vue";
import ListFilter from "./ListFilter.vue";
import DrinkCard from "./DrinkCard";
import CircularLoader from "@/components/shared/CircularLoader.vue";
import WarnContainer from "@/components/shared/WarnContainer.vue";
import {
  inicialFetch,
  searchByCocktailName,
  filterCocktails,
} from "@/services/api.js";

export default {
  name: "DrinkList",
  components: {
    ListHeader,
    ListFilter,
    DrinkCard,
    CircularLoader,
    WarnContainer
  },
  data() {
    return {
      drinkList: [],
      loading: false,
    };
  },
  /** LifeCycle Hook com uma lista inicial de drinks */
  beforeMount() {
    this.fetchInitialData();
  },
  methods: {
    /** Faz a requisição com os drinks iniciais */
    async fetchInitialData() {
      this.loading = true;

      try {
        const result = await inicialFetch();
        this.drinkList = result;
        this.loading = false;
      } catch (ex) {
        console.log("err: ", ex);
      }
    },
    /** Método responsável por direcionar a busca para
     * o endpoint correto baseado no filtro recebido
     */
    fetchRouter(data) {
      this.loading = true;

      switch (data.typeSelected) {
        case "nome":
          this.fetchByName(data.filterContent);
          break;
        case "teor":
          this.filterCocktail("a", data.filterContent);
          break;
        case "categoria":
          this.filterCocktail("c", data.filterContent.replace(/ /g, "_"));
          break;
        case "copo":
          this.filterCocktail("g", data.filterContent.replace(/ /g, "_"));
          break;
        case "ingrediente":
          // TODO: fetch by ingrediente
          console.log("Fetch by [ingrediente]");
          break;
      }
    },
    async fetchByName(name) {
      this.drinkList = await searchByCocktailName(name);
      this.loading = false;
    },
    async filterCocktail(type, param) {
      this.drinkList = await filterCocktails(type, param);
      this.loading = false;
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
  width: 100%;
  min-height: 750px;
}

.content-container {
  margin-top: 1rem;
  display: flex;
}

.results {
  flex: 3;
  justify-content: center;
}

.loading-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
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