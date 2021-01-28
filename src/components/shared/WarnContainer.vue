<template>
  <div class="error-container">
    <div class="icon-title">
      <font-awesome-icon icon="exclamation-circle" class="icon" />
      <h3 class="title">
        <slot name="title"> Default Title </slot>
      </h3>
    </div>

    <p class="body">
      <slot name="body"> Default Body </slot>
    </p>
  </div>
</template>

<style scoped>
.error-container {
  background-color: #d64161;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin-top: 1rem;
  padding: 1rem;
}

.icon-title {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.icon {
  font-size: 3em;
  margin-right: .5rem;
}

.title {
  text-align: center;
  font-size: 2em;
}
.body {
  margin: 0 1rem 1rem 1rem;
  text-align: justify;
}
</style>