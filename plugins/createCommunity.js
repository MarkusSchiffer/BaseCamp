import { fireDb } from '~/plugins/firebase.js'
export default (ctx, inject) => {
  const createCommunity = async (comObj) => {
    try {
      console.log(comObj)
      const communityRef = fireDb.ref('/communities')
      communityRef.push(comObj)
      await (await communityRef.push(comObj)).key()
    } catch (e) {
      console.error(e)
    }
    console.log('done')
  }
  inject('createCommunity', createCommunity)
}
