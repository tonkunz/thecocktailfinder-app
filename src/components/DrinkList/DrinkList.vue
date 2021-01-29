<template>
  <div class="container">
    <div class="wide-container">
      <ListHeader />

      <div class="content-container">
        <!-- Filtros da busca -->
        <ListFilter @search="fetchRouter($event)" />

        <div class="loading-container" v-if="loading">
          <h3>Carregando...</h3>
          <CircularLoader />
        </div>

        <!-- Listagem dos drinks -->
        <div v-else class="results">
          <!-- Caso não tenha resultados -->
          <WarnContainer v-if="!drinkList">
            <template #title>Ops...</template>
            <template #body>
              Não foram encontrados resultados para sua busca.
            </template>
          </WarnContainer>

          <!-- Caso possua resultados -->
          <div v-else class="drink-list">
            <div
              v-for="drink in paginateDrinkList"
              :key="drink.idDrink"
              class="list-item"
            >
              <DrinkCard :drink="drink" />
            </div>
          </div>

          <div class="pagination-container" v-if="!loading && drinkList">
            <Pagination
              :totalElements="totalElements"
              @page-changed="currentPage = $event"
            />
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
import Pagination from "./Pagination.vue";
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
    WarnContainer,
    Pagination,
  },
  data() {
    return {
      drinkList: [],
      loading: false,
      currentPage: 1,
    };
  },
  /** LifeCycle Hook com uma lista inicial de drinks */
  beforeMount() {
    this.fetchInitialData();
  },
  computed: {
    /** Tratamento do length de DrinkList para enviar ao componente filho Pagination */
    totalElements() {
      return (this.drinkList && this.drinkList.length) || 0;
    },
    /** Retorna um array de drinks baseado na paginação */
    paginateDrinkList() {
      const lastDrinkIndex = this.currentPage * 20;
      const firstDrinkIndex = lastDrinkIndex - 20;
      const paginateDrinkList = this.drinkList.slice(
        firstDrinkIndex,
        lastDrinkIndex
      );
      return paginateDrinkList;
    },
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
      this.currentPage = 1;
    },
    async filterCocktail(type, param) {
      this.drinkList = await filterCocktails(type, param);
      this.loading = false;
      this.currentPage = 1;
    },
    /** Influencia na computed property de paginação */
    setCurrentPage(currentPage) {
      this.currentPage = currentPage;
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

.loading-container {
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.results {
  flex: 3;
  justify-content: center;
}

.drink-list {
  flex: 3;
  margin-right: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
}

.pagination-container {
  display: flex;
  justify-content: center;
}

/** Responsividade */
@media (max-width: 1025px) {
  .content-container {
    flex-direction: column;
  }
  .drink-list {
    margin-right: 0;
  }
}

/** Ajuste na apresentação dos cards dependendo do tamanho da tela */
@media (max-width: 1275px) {
  .drink-list {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 725px) {
  .drink-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 600px) {
  .drink-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>