<template>
  <div>
    <h1 id="head"> {{ GroupName }} </h1>
    <p> this is da group </p>
  </div>
</template>
<script>
export default {
  name: 'Group',
  data () {
    return {
      GroupName: this.$route.params.Group
    }
  }
}
</script>
<style>
</style>
