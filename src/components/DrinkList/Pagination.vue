<template>
  <ul class="container">
    <button
      type="button"
      class="chevron-btn"
      @click="onClickPreviousPage"
      :disabled="currentPage === 1"
    >
      <font-awesome-icon icon="chevron-circle-left" />
    </button>

    <li v-for="page in pages" :key="page.pageNumber">
      <button
        type="button"
        class="page-btn"
        @click="onClickPage(page.pageNumber)"
        :disabled="page.isDisabled"
      >
        {{ page.pageNumber }}
      </button>
    </li>

    <button
      type="button"
      class="chevron-btn"
      @click="onClickNextPage"
      :disabled="currentPage === numberOfPages"
    >
      <font-awesome-icon icon="chevron-circle-right" />
    </button>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: ["totalElements"],
  data() {
    return { currentPage: 1 };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.totalElements / 20);
    },
    /** Computed que irá montar o array de páginas */
    pages() {
      const range = [];

      for (let i = 1; i <= Math.ceil(this.totalElements / 20); i++) {
        range.push({
          pageNumber: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
  },
  methods: {
    onClickPreviousPage() {
      this.currentPage--;
      this.$emit("page-changed", this.currentPage);
    },
    onClickNextPage() {
      this.currentPage++;
      this.$emit("page-changed", this.currentPage);
    },
    onClickPage(number) {
      this.currentPage = number;
      this.$emit("page-changed", this.currentPage);
    },
  },
};
</script>

<style scoped>
.container button {
  color: #583d72;
  font-size: 1.75em;
  margin: 0.3rem;
  background: none;
  border: none;
  cursor: pointer;
}

.container button:focus {
  outline: none;
  outline-offset: none;
}

.page-btn:hover,
.chevron-btn:hover {
  color: #ff8e71;
}

.page-btn:disabled {
  color: #ff8e71;
}

.chevron-btn:disabled {
  color: #c9c9c9;
  cursor: initial;
}
</style>