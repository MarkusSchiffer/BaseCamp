<template>
  <div class="container">
    <div class="row">
      <div class="col col-12 col-md-6 d-flex justify-content-center flex-column">
        <p id="intro">Get started learning a new Hobby with BaseCamp!</p>
        <button id="start-now" onClick="document.location='.'">Start Now</button>
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

<style scoped>
  #logo {
    width: 200px;
    height: 200px;
    margin: 10px;
  }

  #start-now {
    padding: 12px 26px;
    color: white;
    font-size: 20px;
    background-color: #006958;
    border: 4px solid #006958;
    margin-left: 100px;
    margin-right: 100px;
  }

  #start-now:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 16px 24px 0 rgba(0,0,0,0.19);
  }

  .row {
    margin-top: 30px;
    margin-bottom: 50px;
  }

  #intro {
    font-size: 30px;
    text-align: center;
    margin-top: 20px;
  }

</style>
