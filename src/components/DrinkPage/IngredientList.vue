<template>
  <div class="ingredients">
    <h3>Ingredientes e Medidas</h3>

    <table class="styled-table">
      <!-- Table Cabeçalho -->
      <thead>
        <tr>
          <th>Ingrediente</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <!-- Table body -->
      <tbody>
        <tr v-for="(ing, key) in ingredients" :key="key">
          <td>{{ ing.ingredient }}</td>
          <td>{{ ing.measure || "Não informado" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "IngredientList",
  props: {
    ingredients: {
      type: Array,
      default: new Array(),
    },
  },
};
</script>

<style scoped>
.ingredients {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.ingredients h3 {
  font-size: 1.25em;
  text-align: center;
}

/** Table styles*/
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
  background-color: #583d72;
  color: #ffffff;
  text-align: left;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #583d72;
}
</style>