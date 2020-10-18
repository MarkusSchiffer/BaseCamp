import { fireDb } from '~/plugins/firebase.js'
export default (ctx, inject) => {
  const createGroup = async (group) => {
    try {
      const groupRef = fireDb.ref('/groups/')
      console.log(group['name']);
      
      return await (await groupRef.push(group)).key
    } catch (e) {
      console.error(e)
    }
    console.log('done')
  }
  inject('createGroup', createGroup)
}
