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

    <select
      v-if="search.typeSelected === 'teor'"
      name="teor Alcoólico"
      id="ter-alcoolico"
      v-model="search.filterContent"
      class="select"
    >
      <option value="">Selecione o teor Alcoólico</option>
      <option value="Não Alcoólico">Não Alcoólico</option>
      <option value="Alcoólico">Alcoólico</option>
      <option value="Álcool Opcional">Álcool Opcional</option>
    </select>

    <!--
      - Botão de busca.
      - O botão fica disabled caso não tenha parâmetros para buscar
    -->
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
      search: {
        typeSelected: "",
        filterContent: "",
      },
    };
  },
  methods: {
    handleChangeType() {
      this.search.filterContent = ""
    },
  },
};
</script>

<style scoped>
.filter-section {
  flex: 1;
  margin: 0 1rem;
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