import { fireDb } from '~/plugins/firebase.js'
export default (ctx, inject) => {
  const updateGroupList = async (data) => {
    try {
      const ref = fireDb.ref('/groupMap/')
      await ref.push(data).then((x) => {
        console.log(x)
      })
    } catch (e) {
      // TODO: error handling
      console.error(e)
    }
    console.log('done')
  }
  inject('updateGroupList', updateGroupList)
}
