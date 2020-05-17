<template>
  <main>
    <router-link to="/">
      <img src="../assets/arrow-back-circle-outline.svg" alt="Back to start" class="back">
    </router-link>
    <div class="one-book">
      <BookFront
        v-bind:bookId="book.id"
        v-bind:title="book.title"
        v-bind:author="book.author"
        v-bind:bgColor="book.color"
      />
      <BookSummary
        v-bind:title="book.title"
        v-bind:author="book.author"
        v-bind:plot="book.plot"
        v-bind:audience="book.audience"
        v-bind:year="book.year"
        v-bind:pages="book.pages"
        v-bind:publisher="book.publisher"
      />
    </div>
  </main>
</template>

<script>
import BookFront from "@/components/BookFront.vue";
import BookSummary from "@/components/BookSummary.vue";

export default {
  name: "Book",
  components: {
    BookFront,
    BookSummary
  },
  computed: {
    book() {
      return this.$root.getBook(this.$route.params.id);
    },
    allBooks() {
      return this.$root.getAllBooks();
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
main {
  background: black;

  h1 {
    font-size: 2rem;
    padding: 2vh;
  }
}
div .one-book {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1;
  padding: 2vh;
}
div .book-front {
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1vw;
  margin: 1vw;
}
.back {
  background: #666;
  margin: 2vw 0 0 3vw;
}


</style>