<template>
  <div>
    <h1 id="head">{{ HobbyName }}</h1>
    <p> hobby page </p>
  </div>
</template>
<script>
export default {
  name: 'Hobby',
  data () {
    return {
      HobbyName: this.$route.params.Hobby
    }
  }
}
</script>
<style scoped>
  #head {
    text-align: left;
    margin-top: 30px;
    margin-left: 15px;
    font-size: 60px;
    color: black;
  }
</style>
