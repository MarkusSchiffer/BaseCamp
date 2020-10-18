<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p id="intro">get started learning a new Hobby with BaseCamp!</p>
        <button onClick="document.location='.'">Start Now</button>
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

  button {
    padding: 14px 30px;
    color: white;
    font-size: 20px;
    background-color: #007189;
    border: 4px solid #007189;
  }

  button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
</style>
