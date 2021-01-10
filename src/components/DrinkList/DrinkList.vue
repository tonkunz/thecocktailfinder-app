<template>
  <div class="container">
    <ListHeader />

    <div class="content-container">
      <ListFilter />
      <div class="result-section">
        Resultados virão aqui
      </div>
    </div>
  </div>
</template>

<script>
import ListHeader from "./ListHeader.vue";
import ListFilter from "./ListFilter.vue";

export default {
  name: "DrinkList",
  components: {
    ListHeader,
    ListFilter
  },
  data() {
    return {
      typesFilter: [
        "Filtrar por Nome",
        "Filtrar por teor Alcoólico",
        "Filtrar por Categoria",
        "Filtrar por Tipo do Copo",
        "Filtrar por Ingrediente",
      ],
      typeSelected: "Nenhum Selecionado",
    };
  },
};
</script>

<style escoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;
}

.content-container {
  margin-top: 1rem;
  display: flex;
}

.result-section {
  flex: 3;
  min-height: 1000px; /** Apenas para teste */
}
</style>