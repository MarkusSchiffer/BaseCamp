import { fireDb } from '~/plugins/firebase.js'
export default (ctx, inject) => {
  const updateGroupLists = async (data) => {
    try {
      const ref = fireDb.ref('/groups/')
      await ref.push(data).then((x) => {
        console.log(x)
      })
    } catch (e) {
      // TODO: error handling
      console.error(e)
    }
    console.log('done')
  }
  inject('updateGroupLists', updateGroupLists)
}
