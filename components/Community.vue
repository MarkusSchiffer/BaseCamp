<template>
  <div id="com">
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
            <p>{{ cardDesc }}</p>
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
    cardImage: { type: String, required: true, default: '~/static/images/logo.png' },
    cardDesc: { type: String, required: false, default: 'Check out this community!' }
  }
}
</script>

<style scoped>
.image-card {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}

.nuxt-link-active {
  text-decoration: none;
  color: inherit;
}

#com:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 16px 24px 0 rgba(0,0,0,0.19);
}

</style>
