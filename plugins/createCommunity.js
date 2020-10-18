import { fireDb } from '~/plugins/firebase.js'
export default (ctx, inject) => {
  const createCommunity = async (community_obj) => {
    try {
      console.log(community_obj)
      const communityRef = fireDb.ref('/communities')
      communityRef.push(community);
      await (await communityRef.push(community)).key()
    } catch (e) {
      console.error(e)
    }
    console.log('done')
  }
  inject('createCommunity', createCommunity)
}
