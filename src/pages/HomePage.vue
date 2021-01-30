<template>
  <div>
    <TheHeader @start="scrollToCoqueteisSection()" />
    <DrinkList ref="coqueteis"/>
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
  },
  methods: {
    scrollToCoqueteisSection() {
      const element = this.$refs['coqueteis'];
      const top = element.$el.offsetTop;
      window.scrollTo(0, top - 10);
    }
  }
}
</script>
