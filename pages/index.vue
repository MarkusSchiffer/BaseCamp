<template>
  <div class="container">
    <div class="row">
      <div class="col col-12 col-md-6 d-flex justify-content-center flex-column">
        <p id="intro">Get started learning a new Hobby with BaseCamp!</p>
        <button id="start-now" onClick="document.location='groups/create'">Create a Group</button>
      </div>
      <div class="col-12 col-md-6 d-flex justify-content-center">
        <img id="logo" src="~/static/images/logo.png" />
      </div>
    </div>
    <div class="container">
    <div class="d-flex flex-row justify-content-around flex-wrap">
      <div v-for="car in cars" :key="car.car">
        <Community :cardTitle="car.car" :cardImage="car.i" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Community from '../components/Community'
export default {
  name: 'index',
  components: {
    Community
  },
  data () {
    return {
      cars: [{ car: 'Hiking', i: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80' }, { car: 'Climbing', i: 'https://images.unsplash.com/photo-1583623010148-9c00f6b12efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }, { car: 'WeSki', i: 'https://images.unsplash.com/photo-1582865479066-02795b318a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }, { car: 'Saab', i: 'img' }, { car: 'Volvo', i: 'img' }, { car: 'BMW', i: 'img' }, { car: 'Saab', i: 'img' }, { car: 'Volvo', i: 'img' }, { car: 'BMW', i: 'img' }]
    }
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
    font-size: 25px;
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
