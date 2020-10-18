<template>
<section class="container">
<div>
      <h2>
        Write to Firestore.
      </h2>
      <div>
        <button @click="getCommunityInfo" :disabled="writeSuccessful">
          <span v-if="!writeSuccessful">get community</span>
          <span v-else>Successful!
          </span>
        </button>
      </div>

      <div>
        <button @click="createCommunityInfo" :disabled="writeSuccessful">
          <span v-if="!createCommunityInfo">create community</span>
          <span v-else>Successful!
          </span>
        </button>
      </div>
    </div>
</section>
</template>
<script>
const community = {
        name: '10',
        numUsers: '4',
        numGroups: 1,
        description: 'Hackathons',
        groupIDs: [{
          groupOne: 'hack1',
          groupTwo: 'hack2',
          groupThree: 'hack3'
        }],
        cumExp: 7,
        popRank: 5,
        imgurl: 'http://www.clker.com/cliparts/e/d/8/2/1314062692434832210campfire.png'
      }
export default {

  data () {
    return {
      writeSuccessful: false
    }
  },
  methods: {
    async getCommunityInfo () {
      try {
        await this.$getCommunityInfo('-MJv5n-b4hVQgcvOVaAn').then((res) => {
          console.log('inside testing page, result = ' + res)
        })
      } catch (e) {
        console.log(e)
      }
    },
    async createCommunityInfo () {
       try {
        await this.$createCommunityInfo(community).then((res) => {
          console.log(res.key)
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
