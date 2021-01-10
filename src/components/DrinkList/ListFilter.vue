<template>
  <div class="filter-section">
    <h3>Filtros</h3>

    <select
      name="tipo-filtro"
      id="tipo-filtro"
      v-model="typeSelected"
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
      v-if="typeSelected === 'nome'"
      type="text"
      placeholder="Digite o nome do Drink"
      v-model="filterContent"
    />

    <select
      v-if="typeSelected === 'teor'"
      name="teor Alcoólico"
      id="ter-alcoolico"
      v-model="filterContent"
      class="select"
    >
      <option value="">Nada Selecionado</option>
      <option value="Não Alcoólico">Não Alcoólico</option>
      <option value="Alcoólico">Alcoólico</option>
      <option value="Álcool Opcional">Álcool Opcional</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "ListFilter",
  data() {
    return {
      typesFilter: [
        { type: "nome", text: "Filtrar por Nome" },
        { type: "teor", text: "Filtrar por teor Alcoólico" },
        { type: "categoria", text: "Filtrar por Categoria" },
        { type: "copo", text: "Filtrar por Tipo do Copo" },
        { type: "ingrediente", text: "Filtrar por Ingrediente" },
      ],
      typeSelected: "",
      filterContent: "",
    };
  },
};
</script>

<style scoped>
.filter-section {
  flex: 1;
  margin: 1rem 3rem;
  display: flex;
  flex-direction: column;
}

.filter-section h3 {
  font-size: 1.5em;
  font-weight: 300;
  margin-bottom: 1rem;
}

.select {
  display: block;
  margin-bottom: 1rem;
  padding: .6rem 1.4rem .5rem .6rem;
  font-size: .9em;

  box-sizing: border-box;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
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
  box-shadow: 0 0 2px 3px #9F5F80;
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222; 
  outline: none;
}

.select option {
  font-size: 1.1em;
}
</style>