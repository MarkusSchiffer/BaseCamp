import { fireDb } from '~/plugins/firebase.js'
export default (ctx, inject) => {
  const groupRef = async (gid) => {
    try {
      console.log('hello')
      const groupRef = fireDb.ref(`/groups/${gid}`)
      return await (await communityRef.once('value')).toJSON()
    } catch (e) {
      console.error(e)
    }
    console.log('done')
  }
  inject('getCommunityInfo', groupRef)
}
