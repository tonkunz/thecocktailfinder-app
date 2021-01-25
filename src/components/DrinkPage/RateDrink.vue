<template>
  <div class="rate-container">
    <div
      v-for="el in stars"
      :key="el"
      ref="stars"
      @mouseover="handleMouseOverClass(el)"
      @mouseout="handleMouseOutClass(el)"
      @click="rateEvent(el)"
      class="star"
      :class="rate >= el && 'checked'"
    >
      <font-awesome-icon icon="star" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RateDrink",
  data() {
    return {
      stars: [1, 2, 3, 4, 5],
      rate: 0
    };
  },
  /**
   * TODO: Caso a API possuíse alguma lógica para avaliação de um Drink
   * Seria necessário um lifecycle para recuperar o rate inicial do Drink
   */

  methods: {
    /**
     * Método responsável por Adicionar a classe checked,
     * para o efeito visual de preenchimento da estrela
     * @param elRef: Recebe o index de referência do elemento HTML
     */
    handleMouseOverClass(elRef) {
      for (let i=0; i<elRef; i++) {
        this.$refs.stars[i]
          .setAttribute('class', 'star checked');
      }
    },

    /**
     * Método responsável por remover a classe checked,
     * para os elementos que não estão ranqueados, assim que
     * o mouse é removido de cima do elemento.
     * @param elRef: Recebe o index de referência do elemento HTML
     */
    handleMouseOutClass(elRef) {
      // Caso o mouse esteja em cima do rate equivalente, não há nada a ser feito
      if (elRef <= this.rate) 
        return;
        
      // Remove o efeito de checked com base no rate
      for (let i=this.rate; i<elRef; i++) {
        this.$refs.stars[i]
          .setAttribute('class', 'star');
      }
    },

    /**
     * Método que defere a pontuação (rating) e emite esse valor
     */
    rateEvent(rate) {
      this.rate = rate;
      this.$emit('rate', this.rate);
    }
  },
};
</script>

<style scoped>
.rate-container {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.star {
  font-size: 1.5em;
  margin-right: 0.25rem;
  color: #345;
  cursor: pointer;
}

.checked {
  color: orange;
}
</style>