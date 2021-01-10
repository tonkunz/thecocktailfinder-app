<template>
  <div>
    <TheHeader />
    <DrinkList />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import DrinkList from "@/components/DrinkList/DrinkList.vue";

export default {
  name: "HomePage",
  components: {
    TheHeader,
    DrinkList
  }
}
</script>
