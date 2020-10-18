import { fireDb } from '~/plugins/firebase.js'
export default (ctx, inject) => {
  const results = []
  const searchCommunities = async (query) => {
    try {
      // debugging purposes
      console.log('hello')
      console.log(query)
      const communities = fireDb.ref('/communties')
      await communities.once('value').then((res) => {
        const community = res.toJSON
        console.log(community)
      })
      await communities.once('value').then((res) => {
        console.log(res.toJSON)
        if (query === null) {
          topCommunities(res)
        } else {
          matchCommunities(res, query)
        }
        return res.key
      })
    } catch (e) {
      console.error(e)
    }
    console.log('done')
    return results
  }

  function topCommunities (community) {
    if (results.length < 7) {
      results.push(community)
    } else {
      for (let i = 0; i < results.length; i++) {
        if (results[i].numUsers < community.numUsers) {
          results[i] = community
        }
      }
    }
  }

  function matchCommunities (community, query) {
    if (community.name.includes(query)) {
      results.push(community)
    }
  }
  inject('searchCommunities', searchCommunities)
}
