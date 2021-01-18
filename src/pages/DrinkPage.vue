<template>
  <div class="container">
    <h1>Drink Page</h1>
    <div class="content-container">
      Id: {{ id }}
      Coquetel Name: {{ result.strDrink }}
      <p class="instructions">
        {{ result.strInstructions}}
      </p>
    </div>
  </div>
</template>

<script>
import { getCocktailDetails } from "@/services/api.js";

export default {
  name: "DrinkPage",
  /** Prop id recebida pela rota */
  props: ['id'],
  data () {
    return {
      loading: false,
      result: {}
    }
  },
  /** Lifecycle Hook onCreate */
  created () {
    this.fetchDrinkData();
  },
  methods: {
    async fetchDrinkData () {
      this.loading = true;
      // TODO: Fecth by props.id
      console.log("Fetch by id: ", this.id);
      this.result = await getCocktailDetails(this.id);
      console.log("cocktails details: ", this.result);
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.instructions {
  max-width: 500px;
}
</style>