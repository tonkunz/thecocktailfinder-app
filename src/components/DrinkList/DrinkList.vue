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
import { inicialFetch } from "@/services/api.js";

export default {
  name: "DrinkList",
  components: {
    ListHeader,
    ListFilter
  },
  data() {
    return {
      drinkList: []
    };
  },
  /** LifeCycle Hook com uma lista inicial de drinks */
  beforeMount () {
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
    }
  }
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