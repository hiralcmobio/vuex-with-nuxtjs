<template>
  <section class="recipes">
    <Recipe v-for="recipe in recipes" :key="recipe.id"
            :thumbnail="recipe.thumbnail"
            :title="recipe.title"
            :id="recipe.id"
            :previewText="recipe.previewText"
    />
  </section>
</template>

<script>
  import Recipe from '~/components/Recipe'

  export default {
    components: {
      Recipe
    },
    asyncData() {
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve({
            recipes: [
              {
              id: "1",
              title: "Khaman dhokla",
              previewText: "My Delicious Khaman dhokla recipe is here!",
              thumbnail: "https://www.swatirecipe.com/wp-content/uploads/2018/06/khaman-recipe.jpg"
              },
              {
                id: "2",
                title: "Handavo",
                previewText: "My Delicious Handavo recipe is here!",
                thumbnail: "https://nishamadhulika.com/imgpst/featured/sooji-handvo.jpg"
              },
              {
                id: "3",
                title: "Patra",
                previewText: "My Delicious Patra recipe is here!",
                thumbnail: "https://i.ndtvimg.com/i/2018-02/patra_620x330_51518071961.jpg"
              },
              {
                id: "4",
                title: "Khandavi",
                previewText: "My Delicious Khandavi recipe is here!",
                thumbnail: "https://smedia2.intoday.in/aajtak/images/stories/102015/khandvi-pakwangali_520_100115063522.jpg"
              }

            ]
          })
        },100)
      }, )
    }
  }
</script>

<style scoped>
  .recipes {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }


</style>



