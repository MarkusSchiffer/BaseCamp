<template>
  <div>
    <nuxt-link to="/">
      <b-card
        no-body
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-img :src="cardImage" alt="Image" class="image-card"></b-card-img>
        <b-card-body>
          <b-card-title>{{ cardTitle }}</b-card-title>
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
        </b-card-body>
      </b-card>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Community',
  props: {
    cardTitle: { type: String, required: true },
    cardImage: { type: String, required: true }
  }
}
</script>

<style scoped>
.image-card {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}

</style>
