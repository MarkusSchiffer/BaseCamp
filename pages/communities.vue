<template>
  <div class="container">
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
      cars: [{ car: 'Saab', i: 'img' }, { car: 'Volvo', i: 'img' }, { car: 'BMW', i: 'img' }, { car: 'Saab', i: 'img' }, { car: 'Volvo', i: 'img' }, { car: 'BMW', i: 'img' }, { car: 'Saab', i: 'img' }, { car: 'Volvo', i: 'img' }, { car: 'BMW', i: 'img' }]
    }
  }
}
</script>
