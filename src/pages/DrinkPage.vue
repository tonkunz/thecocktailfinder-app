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

          <IngredientList :ingredients="ingredientsMeasures" />

          <div class="footer-btns">
            <SocialShare :drinkName="result.strDrink" />
            <AppBtn
              btnText="Avaliar Drink"
              fontSize="1em"
              @btn-clicked="showAvaliationModal = true"
            />
          </div>

          <AvaliationModal
            v-if="showAvaliationModal"
            @close="showAvaliationModal = false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CircularLoader from "@/components/shared/CircularLoader.vue";
import IngredientList from "@/components/DrinkPage/IngredientList.vue";
import AvaliationModal from "@/components/DrinkPage/AvaliationModal.vue";
import SocialShare from "@/components/DrinkPage/SocialShare.vue";
import AppBtn from "@/components/shared/AppBtn.vue";
import { getCocktailDetails } from "@/services/api.js";
import { handleIngredients } from "@/utils/drinkDataHelpers.js";

export default {
  name: "DrinkPage",
  components: {
    CircularLoader,
    IngredientList,
    AvaliationModal,
    SocialShare,
    AppBtn
  },
  /** Prop id recebida pela rota */
  props: ["id"],
  data() {
    return {
      loading: false,
      result: {},
      ingredientsMeasures: [],
      showAvaliationModal: false,
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
      this.ingredientsMeasures = handleIngredients(this.result);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 7em;
}

.loading-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.drink-container {
  display: flex;
  flex-direction: column;
  align-content: center;
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
  justify-content: space-around;
  margin-bottom: 1.5rem;
  background: #583d72;
  color: #fff;
  padding: 0.5rem;
  border-radius: 20px;
}

.instructions {
  width: 750px;
}

.footer-btns {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 1025px) {
  .content-container {
    align-items: center;
  }
}

/** Responsividade */
@media (max-width: 875px) {
  .drink-preview {
    margin: 0;
  }
  .category-alcoholic {
    margin-top: 1rem;
  }
  .instructions {
    width: auto;
  }
}

@media (max-width: 500px) {
  .category-alcoholic {
    font-size: 0.8em;
    justify-content: space-between;
  }
}
</style>