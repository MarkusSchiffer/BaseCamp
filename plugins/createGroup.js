import { fireDb } from '~/plugins/firebase.js'
export default (ctx, inject) => {
  const createGroup = async (group) => {
    try {
      const groupRef = fireDb.ref('/groups/')
      console.log('name:" ' + group.name)
      const result = await (await groupRef.push(group)).key
      return {
        name: group.name,
        key: result
      }
    } catch (e) {
      console.error(e)
    }
    console.log('done')
  }
  inject('createGroup', createGroup)
}
