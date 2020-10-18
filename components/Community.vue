<template>
  <div>
    <nuxt-link to="/">
      <b-card
        title="cardTitle"
        img-src="cardImage"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>
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

</style>
