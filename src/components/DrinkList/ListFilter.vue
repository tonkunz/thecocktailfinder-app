<template>
  <div class="filter-section">
    <h3>Filtros</h3>
    <p class="help-text">
      Caso deseje ser mais específico, experimente escolher um filtro para
      melhorar sua busca.
    </p>

    <!-- Select tipo de filtro -->
    <select
      name="tipo-filtro"
      id="tipo-filtro"
      v-model="search.typeSelected"
      @change="handleChangeType"
      class="select"
    >
      <option value="">Nenhum filtro selecionado</option>
      <option v-for="(t, key) in typesFilter" :key="key" :value="t.type">
        {{ t.text }}
      </option>
    </select>

    <!-- Inputs condicionais, ou seja,que aparecerão
      baseados no tipo de filtro selecionado -->
    <input
      v-if="search.typeSelected === 'nome'"
      type="text"
      placeholder="Digite o nome do Drink"
      v-model="search.filterContent"
      class="input-name"
    />

    <!-- Select de teor alcoólico -->
    <select
      v-if="search.typeSelected === 'teor'"
      name="teor Alcoólico"
      id="teor-select"
      v-model="search.filterContent"
      class="select"
    >
      <option value="">Selecione o teor Alcoólico</option>
      <option value="non_alcoholic">Não Alcoólico</option>
      <option value="alcoholic">Alcoólico</option>
      <option value="optional_alcohol">Álcool Opcional</option>
    </select>

    <!-- Select de categoria -->
    <select
      v-if="search.typeSelected === 'categoria'"
      name="categoria select"
      id="categoria-select"
      v-model="search.filterContent"
      class="select"
    >
      <option value="">Selecione uma categoria</option>
      <option
        v-for="(cat, key) in categories"
        :key="key"
        :value="cat.strCategory"
      >
        {{ cat.strCategory }}
      </option>
    </select>

    <!-- Select de Tipo de Copo -->
    <select
      v-if="search.typeSelected === 'copo'"
      name="glass select"
      id="glass-select"
      v-model="search.filterContent"
      class="select"
    >
      <option value="">Selecione um tipo de Copo</option>
      <option
        v-for="(glass, key) in glasses"
        :key="key"
        :value="glass.strGlass"
      >
        {{ glass.strGlass }}
      </option>
    </select>

    <!-- Select de ingrediente -->
    <select
      v-if="search.typeSelected === 'ingrediente'"
      name="ingrediente select"
      id="ingrediente-select"
      v-model="search.filterContent"
      class="select"
    >
      <option value="">Selecione o ingrediente</option>
      <option
        v-for="(ing, key) in ingredients"
        :key="key"
        :value="ing.strIngredient1"
      >
        {{ ing.strIngredient1 }}
      </option>
    </select>

    <AppBtn
      v-if="search.typeSelected !== ''"
      btnText="Buscar"
      fontSize="1em"
      @btn-clicked="$emit('search', search)"
      :disabled="!(search.typeSelected && search.filterContent)"
    />
  </div>
</template>

<script>
import AppBtn from "@/components/shared/AppBtn.vue";
import { getFilterList } from "@/services/api.js";

export default {
  name: "ListFilter",
  components: {
    AppBtn,
  },
  data() {
    return {
      typesFilter: [
        { type: "nome", text: "Filtrar por Nome" },
        { type: "teor", text: "Filtrar por teor Alcoólico" },
        { type: "categoria", text: "Filtrar por Categoria" },
        { type: "copo", text: "Filtrar por Tipo do Copo" },
        { type: "ingrediente", text: "Filtrar por Ingrediente" },
      ],
      categories: [],
      glasses: [],
      ingredients: [],
      search: {
        typeSelected: "",
        filterContent: "",
      },
    };
  },
  beforeMount() {
    this.fetchInitialData();
  },
  methods: {
    async fetchInitialData() {
      // Pega as categorias dos drinks
      this.categories = await getFilterList("c");
      this.glasses = await getFilterList("g");
      this.ingredients = await getFilterList("i");
    },
    handleChangeType() {
      this.search.filterContent = "";
    }
  },
};
</script>

<style scoped>
.filter-section {
  flex: 1;
  margin: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
}

.filter-section h3 {
  font-size: 2em;
  font-weight: 300;
  margin-bottom: 1rem;
}

.help-text {
  margin-bottom: 1rem;
}

.select {
  display: block;
  margin-bottom: 1rem;
  padding: 0.6rem 1.4rem 0.5rem 0.6rem;
  font-size: 1em;
  box-sizing: border-box;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 1em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
}

.select:hover {
  border-color: #888;
}

.select:focus {
  border-color: #aaa;
  box-shadow: 0 0 2px 3px #9f5f80;
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}

.select option {
  font-size: 1.1em;
}

/** Estilos do input de nome do drink */
.search-by-name {
  display: flex;
  flex-direction: column;
}

.input-name {
  display: block;
  margin-bottom: 1rem;
  padding: 0.6rem 1.4rem 0.5rem 0.6rem;
  box-sizing: border-box;
  border-radius: 1em;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.6);
  font-size: 1em;
}

.input-name:focus {
  border-color: #aaa;
  box-shadow: 0 0 2px 3px #9f5f80;
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}
</style>