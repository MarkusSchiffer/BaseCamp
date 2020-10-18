<template>
  <div class="container">
    <div>
      <img id="logo" src="~/static/images/logo.png" />
      <p>get started learning a new Hobby with BaseCamp!</p>
      <button id="start" onClick="document.location='.'">Start Now</button>
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
  }

  body {
    color: red;
  }
</style>
