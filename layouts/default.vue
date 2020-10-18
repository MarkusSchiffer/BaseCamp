<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  name: 'DefaultLayout',
  components: {
    Header
  },
  mounted () {
    console.log('hi')
  }
}
</script>

<style>
body {
  color: #007189;
}
</style>
