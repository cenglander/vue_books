<template>
    <main>
        <h1>8 Classic Childrens Books</h1>
        <div class="one-book">

            

            <BookFront title="This is the title" 
            author="This is the author"

            />
            <BookSummary title="Summary title"

            />

    </div>
  </main>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import BookFront from '@/components/BookFront.vue'
import BookSummary from '@/components/BookSummary.vue'

export default {
  name: 'Book',
  components: {
      BookFront,
      BookSummary,
  },
  methods: {
    //   console.log (this.$root.booksJson )
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

    // display: flex;
    // flex-direction: column;
    // justify-content: flex-end;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);

    padding: 2vh;

    
}
</style>