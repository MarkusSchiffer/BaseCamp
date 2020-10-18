import { fireDb } from '~/plugins/firebase.js'
export default (ctx, inject) => {
  const createCommunity = async (someVar) => {
    try {
      console.log('hello')
      console.log(someVar)
      const communityRef = fireDb.ref('/communities')
      const community = {
        name: '10',
        numUsers: '4',
        numGroups: 1,
        groupIDs: [{
          groupOne: 'hiking',
          groupTwo: 'hiking2',
          groupThree: 'hiking3'
        }],
        cumExp: 7,
        popRank: 1,
        imgurl: 'http://www.clker.com/cliparts/e/d/8/2/1314062692434832210campfire.png'
      }

      await communityRef.push(community).then((res) => {
        console.log(res.key)
        return res.key
      })
    } catch (e) {
      console.error(e)
    }
    console.log('done')
  }
  inject('createCommunity', createCommunity)
}
