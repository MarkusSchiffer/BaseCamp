import { fireDb } from '~/plugins/firebase.js'
export default (ctx, inject) => {
  const getGroupsInCommunity = async (cid) => {
    try {
      // debugging purposes
      console.log('hello')
      console.log(cid)
      const communityRef = fireDb.ref('/communities/' + cid + '/groups/')
      await communityRef.once('value').then((res) => {
        console.log(res.toJSON);
        for let k, v in (res.toJSON) {
          getGroupInfo(k or v);
        }
        return res.key
      })
    } catch (e) {
      console.error(e)
    }
    console.log('done')
  }
  inject('getGroupsInCommunity', getGroupsInCommunity)
}
