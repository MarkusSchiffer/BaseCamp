<template>
  <div id="hob">
    <nuxt-link :to="'/Group/' + cardTitle">
      <b-card
        no-body
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-img :src="cardImage" alt="Image" rounded="circle" class="image-card"></b-card-img>
        <b-card-body>
          <b-card-title>{{ cardTitle }}</b-card-title>
          <b-card-text>
            <p>{{ cardDesc }}</p>
          </b-card-text>
        </b-card-body>
        <div class="mb-4">
            <b-avatar></b-avatar>
            <b-avatar variant="primary" text="BV"></b-avatar>
            <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
        </div>
      </b-card>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Hobbycard',
  props: {
    cardTitle: { type: String, required: true },
    cardImage: { type: String, required: true, default: '~/static/images/logo.png' },
    cardDesc: { type: String, required: false, default: 'Check out this Group!' }
    // members: { type: Array, required: false, default: [{ profile: 'https://placekitten.com/300/300' }, { profile: 'https://placekitten.com/300/300' }, { profile: 'https://placekitten.com/300/300' }] }
  }
}
</script>

<style scoped>
.image-card {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}

#hob a{
  text-decoration: none;
  color: inherit;
}

#hob:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 16px 24px 0 rgba(0,0,0,0.19);
}

.mb-4 {
    align-content: center;
}
</style>
