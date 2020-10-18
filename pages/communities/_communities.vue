<template>
  <div class="container">
    <p>{{ param }}</p>
    <div class="d-flex flex-row justify-content-around flex-wrap">
      <div v-for="car in cars" :key="car.car">
        <Community :cardTitle="car.car" :cardImage="car.i" />
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import Community from '~/components/Community'

export default {
  name: 'Communities',
  components: {
    Community
  },
  mounted () {
    // axios
    //   .get(pathImage)
    //   .then(response => (this.image = response.data.photos[0].image.web))
    //   .catch((error) => {
    //     this.errored = true
    //     this.errorMessage = error
    //   })
    //   .finally(() => (this.loadingImage = false))
  },
  data () {
    return {
      cars: [{ car: 'Hiking', i: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80' }, { car: 'Climbing', i: 'https://images.unsplash.com/photo-1583623010148-9c00f6b12efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }, { car: 'WeSki', i: 'https://images.unsplash.com/photo-1582865479066-02795b318a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }, { car: 'Saab', i: 'img' }, { car: 'Volvo', i: 'img' }, { car: 'BMW', i: 'img' }, { car: 'Saab', i: 'img' }, { car: 'Volvo', i: 'img' }, { car: 'BMW', i: 'img' }],
      param: this.$route.params.communities
    }
  }
}
</script>

<style scoped>
</style>
