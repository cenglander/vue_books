<template>
  <div class="book-summary">
    <h1>{{ title }}</h1>
    <h5>By {{ author}}</h5>
    <p>{{ plot }}</p>
    <div class="info">
      <p>Audience: {{ audience }}</p>
      <p>First published: {{ year }}</p>
      <p>Pages: {{ pages }}</p>
      <p>Publisher: {{ publisher }}</p>
    </div>
    <button>Oh, I want to read it!</button>
  </div>
</template>

<script>
export default {
  name: 'BookSummary',
  props: {
    title: String,
    author: String,
    plot: String,
    audience: String,
    year: Number,
    pages: Number,
    publisher: String,
  },
  
}
</script>

<style scoped lang="scss">

 div .book-summary {
      width: 400px;
      height: 600px;
      background: inherit;

      display: grid;
      grid-template-rows: 1fr 1fr 4fr 1fr 2fr;
      padding: 1vw;
      margin: 1vw;
      
      .info {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        background: #333;
        padding: 0.5vw 0.5vw 0 0.5vw;

        p {
          padding: 0;
          margin: 0;
          
        }
      }
      h1 {
          font-size: 2rem;
          padding-left: 0;
      }
      h5 {
        font-size: 1rem;
      }
      p {
        font-size: 0.9rem;
      }
      h1, h5, p {
        color: #fff;
      }
      button {
        border-radius: 4px;
        border: 0;
        font-weight: bold;
        margin-top: 3vh;
        width: fit-content;
        height: fit-content;
        padding: 1.5vh 2vw;
        align-self: flex-end;
      }
  }
</style>