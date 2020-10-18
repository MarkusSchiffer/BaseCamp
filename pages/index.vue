<template>
  <div class="container">
    <div class="row">
      <div class="col col-12 col-md-6 d-flex justify-content-center flex-column">
        <p id="intro">Get started learning a new Hobby with BaseCamp!</p>
        <button id="start-now" onClick="document.location='groups/create'">Create a Group</button>
      </div>
      <div class="col-12 col-md-6 d-flex justify-content-center">
        <img id="logo" src="https://toggl.com/blog/wp-content/uploads/2018/10/productive-hobbies.jpg" />
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
      cars: [{ car: 'Hiking', i: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80' }, { car: 'Climbing', i: 'https://images.unsplash.com/photo-1583623010148-9c00f6b12efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }, { car: 'WeSki', i: 'https://images.unsplash.com/photo-1582865479066-02795b318a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }, { car: 'Bartending', i: 'https://img.grouponcdn.com/deal/caf13b5ccf0441949424504a7a22cc8b/8b/v1/c700x420.jpg' }, { car: 'ScubaDiving', i: 'https://www.scubadiving.com/sites/scubadiving.com/files/styles/500_1x_/public/scuba-myths-shutterstock_208265431.jpg?itok=sv5KIWuo' }, { car: 'Chess', i: 'https://images.theconversation.com/files/346395/original/file-20200708-47-mexhsj.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop' }, { car: 'Running', i: 'https://pocket-syndicated-images.s3.amazonaws.com/5f68d5792407a.jpg' }, { car: 'Weight Lifting', i: 'https://www.mensjournal.com/wp-content/uploads/mf/_main_liftlift.jpg?w=1200&h=1200&crop=1&quality=86&strip=all' }, { car: 'Knitting', i: 'https://i.ytimg.com/vi/lsrAA4djRlA/maxresdefault.jpg' }]
    }
  }
}
</script>

<style scoped>
  #logo {
    margin: 10px;
    width: 450px;
    height: 250px;
    border: 5px solid #006958;
  }

  #start-now {
    padding: 12px 26px;
    color: white;
    font-size: 25px;
    background-color: #006958;
    border: 4px solid #006958;
    text-shadow: 1px 1px 2px #ffffff;
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
    text-shadow: 1px 1px 2px #006958;
    margin-top: 20px;
  }

</style>
