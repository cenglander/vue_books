<template>
  <main>

    <h1>8 Classic Childrens Books</h1>

    <div class="all-books">

      <router-link 
        v-for="(book, index) in allBooks" 
        v-bind:key="index" 
        :to="'/books/' + book.id">

        <BookFront
          v-bind:bookId="book.id"
          v-bind:title="book.title"
          v-bind:author="book.author"
          v-bind:bgColor="book.color"
        />

      </router-link>

    </div>

  </main>
</template>

<script>
// @ is an alias to /src

import BookFront from "@/components/BookFront.vue";

export default {
  name: "AllBooks",
  components: {
    BookFront
  },
  methods: {},
  computed: {
    allBooks() {
      return this.$root.getAllBooks();
    }
  }
};
</script>

<style lang="scss">

h1 {
  padding-left: 3vh;
  margin-bottom: 0;
}
div .all-books {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);

  padding: 2vh;
}
 div .book-front {
      width: 200px;
      height: 300px;
      background: lightskyblue;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 1vw;
      margin: 1vw;

      h3, h5 {
        padding: 1vh;
        margin: 0;
        color: #fff;
        text-decoration: none;
      }

  }
</style>