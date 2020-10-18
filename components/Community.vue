<template>
  <div>
    <nuxt-link to="/">
      <b-card
        :title="cardTitle"
        :img-src="cardImage"
        :img-alt="cardTitle"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          {{ cardDesc }}
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
    cardImage: { type: String, required: true },
    cardDesc: { type: String, required: false, placeholder: 'Check out this community!' }
  }
}
</script>

<style scoped>

</style>
