import { fireDb } from '~/plugins/firebase.js'
export default (ctx, inject) => {
  const updateGroupLists = async () => {
    try {
      console.log('hello')
      const group = fireDb.ref('/users')
      await userRef.once('value').then((data) => {
        console.log(data.toJSON())
      })
    } catch (e) {
      // TODO: error handling
      console.error(e)
    }
    console.log('done')
  }
  inject('updateGroupLists', updateGroupLists)
}
