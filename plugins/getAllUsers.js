import { fireDb } from '~/plugins/firebase.js'
export default (ctx, inject) => {
  const getAllUsers = async () => {
    try {
      console.log('hello')
      const userRef = fireDb.ref('/users')
      await userRef.once('value').then((data) => {
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
