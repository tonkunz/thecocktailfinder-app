<template>
  <div>
    <div class="header">
      <div class="text-header">
        <h1>Este é o Header</h1>
      </div>
    </div>

    <!-- APENAS PARA TESTE -->
    <div class="spacer"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>

<style scoped>
.header {
  background: url("../assets/images/header_bg_1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.text-header {
  min-height: 750px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

/** Apenas para teste, PS: Remover depois */
.spacer {
  height: 2000px;
}
</style>
