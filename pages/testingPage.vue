<template>
<section class="container">
<div>
  <h2>
    Write to Firestore.
  </h2>
  <div>
    <button @click="createGroup" :disabled="writeSuccessful">
      <span v-if="!writeSuccessful">Create Group</span>
      <span v-else>Successful!
      </span>
    </button>
  </div>
</div>
</section>
</template>
<script>
const group = {
  cid: '312312312asda123',
  communityName: 'Hiking',
  size: '4',
  description: 'Hackathons',
  userID: [{
    userOne: 'hack1',
    userTwo: 'hack2',
    userThree: 'hack3'
  }],
  cumExp: '10',
  location: 'Anywhere',
  imgurl: 'http://www.clker.com/cliparts/e/d/8/2/1314062692434832210campfire.png'
}
export default {
  data () {
    return {
      writeSuccessful: false
    }
  },
  methods: {
    async createGroup () {
      try {
        console.log('trying to create a community:')
        await this.$createGroup(group).then((res) => {
          console.log(res)
        })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
