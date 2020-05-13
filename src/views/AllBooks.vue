<template>
  <main>
    <h1>8 Classic Childrens Books</h1>
    <div class="all-books">

            
      <!-- <p> {{ book }}</p> -->
      <!-- <p> {{ allBooks }} </p> -->
      <!-- <p v-for="book in allBooks"
        v-bind:key="book.id"> {{ book }} </p> -->

      <!-- <p v-for="book in allBooks"
        v-bind:key="book.id"
        v-bind:title="book.title"
        v-bind:author="book.author"> {{ book }} </p> -->


      <BookFront v-for="book in allBooks"
        v-bind:key="book.id"
        v-bind:title="book.title"
        v-bind:author="book.author"
        v-bind:bgColor="book.color"    

      />

    </div>
  </main>
</template>

<script>
// @ is an alias to /src

import BookFront from '@/components/BookFront.vue'

export default {
  name: 'AllBooks',
  components: {
      BookFront
  },
  methods: {

    //   console.log (this.$root.booksJson )
  },
  computed: {
      book() {
          return this.$root.getBook(1)
      },
      allBooks() {
        return this.$root.getAllBooks()
      }
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
div .all-books {

    // display: flex;
    // flex-direction: column;
    // justify-content: flex-end;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);

    padding: 2vh;

    
}
</style>