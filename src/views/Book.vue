<template>
  <main>

    <div class="one-book">

      <BookFront
          v-bind:bookId="book.id"
          v-bind:title="book.title"
          v-bind:author="book.author"
          v-bind:bgColor="book.color"
        />
      <BookSummary 
          v-bind:title="book.title"

      />

    </div>
    
  </main>
</template>

<script>
import BookFront from '@/components/BookFront.vue'
import BookSummary from '@/components/BookSummary.vue'

export default {
  name: 'Book',
  components: {
      BookFront,
      BookSummary,
  },
  computed: {
    book() {
      return this.$root.getBook(this.$route.params.id);
    },
    allBooks() {
      return this.$root.getAllBooks();
    }
  },
  methods: {
  }
} 
</script>

<style scoped lang="scss">

main {
    background:lightcyan;
    h1 {
        font-size: 2rem;
        padding: 2vh;
    }

}
div .one-book {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 2vh;

}
 div .book-front {
      width: 400px;
      height: 600px;
      background: lightskyblue;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 1vw;
      margin: 1vw;
      

      h3 {
          font-size: 3rem;
      }
  }
</style>