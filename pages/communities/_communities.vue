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
      cars: [{ car: 'Hiking', i: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80' }, { car: 'Climbing', i: 'https://images.unsplash.com/photo-1583623010148-9c00f6b12efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }, { car: 'WeSki', i: 'https://images.unsplash.com/photo-1582865479066-02795b318a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }, { car: 'Bartending', i: 'https://img.grouponcdn.com/deal/caf13b5ccf0441949424504a7a22cc8b/8b/v1/c700x420.jpg' }, { car: 'ScubaDiving', i: 'https://www.scubadiving.com/sites/scubadiving.com/files/styles/500_1x_/public/scuba-myths-shutterstock_208265431.jpg?itok=sv5KIWuo' }, { car: 'Chess', i: 'https://images.theconversation.com/files/346395/original/file-20200708-47-mexhsj.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop' }, { car: 'Running', i: 'https://pocket-syndicated-images.s3.amazonaws.com/5f68d5792407a.jpg' }, { car: 'Weight Lifting', i: 'https://www.mensjournal.com/wp-content/uploads/mf/_main_liftlift.jpg?w=1200&h=1200&crop=1&quality=86&strip=all' }, { car: 'Knitting', i: 'https://i.ytimg.com/vi/lsrAA4djRlA/maxresdefault.jpg' }],
      param: this.$route.params.communities
    }
  }
}
</script>

<style scoped>
</style>
