<template>
<section class="container">
<div>
      <h2>
        Write to Firestore.
      </h2>
      <div>
        <button @click="getCommunityInfo" :disabled="writeSuccessful">
          <span v-if="!writeSuccessful">Write now</span>
          <span v-else>Successful!
          </span>
        </button>
      </div>
    </div>
</section>
</template>
<script>

export default {
  data () {
    return {
      writeSuccessful: false
    }
  },
  methods: {
    async getCommunityInfo () {
      await this.$getCommunityInfo('-MJv5n-b4hVQgcvOVaAn').then((res) => {
        console.log('inside testing page, result = ' + res)
      })
    }
  }
}
</script>
<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
