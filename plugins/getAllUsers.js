import { fireDb } from '~/plugins/firebase.js'
export default (ctx, inject) => {
  const getAllUsers = async () => {
    try {
      console.log('hello')
      const hailMairyRef = fireDb.ref('/users')
      await hailMairyRef.once('value').then((data) => {
        console.log(data.toJSON())
      })
    } catch (e) {
      // TODO: error handling
      console.error(e)
    }
    console.log('done')
  }
  inject('getAllUsers', getAllUsers)
}
