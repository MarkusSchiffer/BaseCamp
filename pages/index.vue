<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 d-flex justify-content-center flex-column">
        <p id="intro">Get started learning a new Hobby with BaseCamp!</p>
        <button onClick="document.location='.'">Start Now</button>
      </div>
      <div class="col-12 col-md-6 d-flex justify-content-center">
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

  .row {
    margin-top: 30px;
    margin-bottom: 50px;
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
    padding: 12px 26px;
    color: white;
    font-size: 20px;
    background-color: #006958;
    border: 4px solid #006958;
  }

  button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 16px 24px 0 rgba(0,0,0,0.19);
  }

</style>
