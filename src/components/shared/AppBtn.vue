<template>
  <button
    class="btn"
    :style="propStyles"
    @click="$emit('btn-clicked')">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: "AppBtn",
  props: {
    btnText: {
      type: String,
      default: "Click me"
    },
    /** Props para permitir a customização dos botões
     * caso algum componente pai venha desejar isto
     */
    minWidth: {
      type: String,
      default: "135px"
    },
    fontSize: {
      type: String,
      default: "1.2em"
    }
  },
  computed: {
    propStyles() {
      return {
        "min-width": this.minWidth,
        "font-size": this.fontSize,
      };
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: #583d72;
  color: #fff;
  font-weight: bold;
  border: none;
  padding: .75rem;
  border-radius: 25px;
  cursor: pointer;
  outline: none;
  font-size: 1.2em;
}

.btn:hover {
  background-color: #9558cf;
}

.btn:disabled {
  background-color: #c9c9c9;
}
</style>