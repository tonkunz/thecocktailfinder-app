<template>
  <div class="header">
    <div class="apresentation">
      <div class="titles">
        <h3>Seja Bem Vindo ao</h3>
        <h1>The Cocktail Finder</h1>
      </div>

      <div class="text">
        <p>
          Esta aplicação trata-se de uma avaliação de habilidades de front-end.
          Mas isso não significa que você não possa se divertir aqui buscando e
          encontrando receitas de deliciosos coquetéis.
        </p>

        <div class="btn-container">
          <AppBtn btnText="Coquetéis" class="mg-bt" />
          <AppBtn btnText="Sobre" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBtn from "@/components/shared/AppBtn.vue";

export default {
  name: "TheHeader",
  components: {
    AppBtn,
  },
};
</script>

<style scoped>
.header {
  background: linear-gradient(to left, #000000bd, #520b02bd),
    url("../assets/images/header_bg_1.jpg") no-repeat center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.apresentation {
  min-height: 750px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.titles {
  margin: 0 1rem;
}
.titles h1 {
  font-size: 3em;
  margin-bottom: 1rem;
}
.titles h3 {
  font-weight: 300;
  font-size: 1.5em;
}

.text p {
  max-width: 500px;
  margin: 1rem;
  display: flex;
  text-align: justify;
}

.btn-container {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
}

/** Responsivity */
@media (max-width: 600px) {
  .titles h1 {
    font-size: 1.75em;
  }

  .btn-container {
    flex-direction: column;
    margin: 0 1rem;
  }

  .mg-bt {
    margin-bottom: 1rem;
  }
}
</style>
