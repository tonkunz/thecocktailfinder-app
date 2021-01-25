<template>
  <ModalLayout @close="$emit('close')">
    <template #header>
      <h2>Avaliar Drink</h2>
    </template>

    <template #body>
      <p>Por favor, deixe sua opinião e uma pontuação para este Drink.</p>
      <RateDrink @rate="rateReceived($event)" class="rating-section" />
    </template>

    <template #footer>
      <AppBtn
        btnText="OK"
        fontSize="1em"
        minWidth="100%"
        @btn-clicked="$emit('close')"
      />
    </template>
  </ModalLayout>
</template>

<script>
import ModalLayout from "@/components/shared/ModalLayout.vue";
import RateDrink from "@/components/DrinkPage/RateDrink.vue";
import AppBtn from "@/components/shared/AppBtn.vue";

export default {
  name: "AvaliationModal",
  components: {
    ModalLayout,
    RateDrink,
    AppBtn
  },
  methods: {
    rateReceived(e) {
      console.log("Rate recebido: ", e);
    },
  },
};
</script>

<style scoped>
.rating-section {
  justify-content: center;
  padding: 0.5em;
  margin-top: 0.5em;
}
</style>