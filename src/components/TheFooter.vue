<template>
  <footer>
    <div class="about">
      <div class="about-content">
        <img src="@/assets/logo.svg" alt="The CocktailFinder Logo" />

        <div class="text">
          <p>
            <strong>The Cocktail Finder</strong> é um projeto com o objetivo de
            treinar/testar algumas tecnologias e técnicas relativas a front-end.
            <br /><br />
            Totalmente construído no poderoso framework VueJS e consumindo a API
            gratuíta:
            <a href="https://www.thecocktaildb.com/api.php" target="_blank"
              >https://www.thecocktaildb.com/api.php</a
            >. <br /><br />
            Fique a vontade para conferir o código, forkar e se divertir
            alterando este projeto (se você desejar)
          </p>
        </div>
      </div>
    </div>
    <p class="footer">The Cocktail Finder.
      Criado por <a href="https://github.com/tonkunz" target="_blank">Everton Kunz.</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
footer {
  color: #fff;
}

a {
  color: #f1ccc2;
  font-weight: bold;
  text-decoration: inherit;
}

.about {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background: linear-gradient(98.48deg, #583d72 0.29%, #ff8e71 126.1%);
}

.about-content {
  max-width: 1000px;
  display: flex;
}

.about-content img {
  width: 275px;
  height: auto;
  margin-right: 3rem;
}

.text {
  max-width: 300px;
  font-size: 1em;
  text-align: justify;
}

.footer {
  padding: 0.5rem;
  font-size: 0.8em;
  background: #242424;
  text-align: center;
}

@media (max-width: 675px) {
  .about-content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .about-content img {
    width: 150px;
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .text {
    font-size: 0.8em;
  }
}
</style>