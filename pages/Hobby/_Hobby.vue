<template>
  <div>
    <h1>{{ HobbyName }}</h1>
    <p> hobby page </p>
  </div>
</template>
<script>
export default {
  name: 'Hobby',
  props: {
    HobbyName: {
      type: String,
      required: false,
      default: 'Hiking'
    },
    Numusers: {
      type: Number,
      required: false,
      default: 0
    },
    Numgroups: {
      type: Number,
      required: false,
      default: 0
    },
    imgurl: {
      type: String,
      required: false,
      default: '~/static/images/logo.png'
    }
  }
}
</script>
<style>
</style>
