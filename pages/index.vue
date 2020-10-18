<template>
  <div class="container">
    <div>
      <img id="logo" src="~/static/images/logo.png" />
      <Community :cardTitle="'Card Title'" :cardImage="'https://picsum.photos/600/300/?image=25'"/>
    </div>
  </div>
</template>

<script>
import Community from '~/components/Community'

export default {
  name: 'index',
  components: {
    Community
  }
}
</script>

<style>
  #logo {
    width: 200px;
    height: 200px;
    margin: 10px;
    bottom: 0;
    right: 0;
  }
</style>
