<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p id="intro">get started learning a new Hobby with BaseCamp!</p>
        <button id="start" onClick="document.location='.'">Start Now</button>
      </div>
      <div class="col">
        <img id="logo" src="~/static/images/logo.png" />
      </div>
    </div>
    <Communities />
  </div>
</template>

<script>
import Communities from '~/pages/communities'

export default {
  name: 'index',
  components: {
    Communities
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
    color: #007189;
  }

  #intro {
    font-size: 30px;
    text-align: center;
    margin-top: 20px;
  }

  #start {
    align: center;
    font-size: 20px;
  }
</style>
