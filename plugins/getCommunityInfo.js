import { fireDb } from '~/plugins/firebase.js'
export default (ctx, inject) => {
  const getCommunityInfo = async (cid) => {
    try {
      console.log('hello')
      console.log(cid)
      const communityRef = fireDb.ref(`/communities/${cid}`)
      return await (await communityRef.once('value')).toJSON()
    } catch (e) {
      console.error(e)
    }
    console.log('done')
  }
  inject('getCommunityInfo', getCommunityInfo)
}
