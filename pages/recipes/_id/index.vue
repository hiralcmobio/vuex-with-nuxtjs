<template>
  <section class="single-recipe">
    <h1>{{ recipe.title }}</h1>
    <div>
      <img class="recipe-image" :src="recipe.thumbnail" :alt="recipe.title">
    </div>
    <p>{{ recipe.descriptionText }}</p>
  </section>
</template>

<script>
  export default {
    asyncData(context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            recipe: [
              {
                id: "1",
                title: "Khaman dhokla",
                previewText: "My Delicious Khaman dhokla recipe is here!",
                descriptionText: "My recipe for Khaman dhokla!",
                thumbnail: "https://www.swatirecipe.com/wp-content/uploads/2018/06/khaman-recipe.jpg"
              },
              {
                id: "2",
                title: "Handavo",
                previewText: "My Delicious Handavo recipe is here!",
                descriptionText: "My recipe for Handavo!",
                thumbnail: "https://nishamadhulika.com/imgpst/featured/sooji-handvo.jpg"
              },
              {
                id: "3",
                title: "Patra",
                previewText: "My Delicious Patra recipe is here!",
                descriptionText: "My recipe for Patra!",
                thumbnail: "https://i.ndtvimg.com/i/2018-02/patra_620x330_51518071961.jpg"
              },
              {
                id: "4",
                title: "Khandavi",
                previewText: "My Delicious Khandavi recipe is here!",
                descriptionText: "My recipe for Khandavi!",
                thumbnail: "https://smedia2.intoday.in/aajtak/images/stories/102015/khandvi-pakwangali_520_100115063522.jpg"
              }

            ].find(el => el.id === context.params.id)
          })
        }, 100)
      },)
    }
  }
</script>

<style scoped>
  .single-recipe {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px;
    flex-flow: column;
  }

  .recipe-image {
    width: 100%;
  }

</style>
