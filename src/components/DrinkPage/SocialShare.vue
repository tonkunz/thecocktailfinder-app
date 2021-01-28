<template>
  <div class="share-container">
    <h3>Gostou? Compartilhe</h3>

    <div class="btn-container">
      <a
        :href="`https://api.whatsapp.com/send/?phone&text=
                Você já experimentou um ${drinkName}.
                Não? Então veja como fazer este drink em%3A+
                https://localhost:8080/%23${$route.path}
                &app_absent=0`"
        target="_blank"
      >
        <img src="@/assets/icons/whatsapp.svg" alt="Whatsapp Icon" />
      </a>

      <a
        :href="`https://www.facebook.com/sharer/sharer.php?u=
                https://localhost:8080/%23${$route.path}`"
        target="_blank"
      >
        <img src="@/assets/icons/facebook.svg" alt="Facebook Icon" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialShare",
  props: {
    drinkName: String,
  },
};
</script>

<style scoped>
.share-container {
  display: flex;
  flex-direction: column;
}

.btn-container {
  display: flex;
  margin: 0.5rem 0;
}

.btn-container img {
  width: 30px;
  margin-right: 0.7rem;
  transition: transform 0.1s;
}

.btn-container img:hover {
  width: 30px;
  margin-right: 0.7rem;
  transform: scale(1.1);
}
</style>