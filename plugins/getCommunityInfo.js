import { fireDb } from '~/plugins/firebase.js'
export default (ctx, inject) => {
  const getCommunityInfo = async (cid) => {
    try {
      console.log('hello')
      console.log(cid)
      const communityRef = fireDb.ref(`/communities/${cid}`)
      await communityRef.once('value').then((response) => {
        console.log(response.toJSON())
        return response.key
      })
    } catch (e) {
      console.error(e)
    }
    console.log('done')
  }
  inject('getCommunityInfo', getCommunityInfo)
}
