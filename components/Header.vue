<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <nuxt-link to="/">
        <b-navbar-brand>
          <h1>BaseCamp</h1>
          <h6>Home</h6>
        </b-navbar-brand>
      </nuxt-link>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form v-if="onHome" class="d-flex ">
            <b-form-input id="search" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button
            size="sm"
            class="my-2 my-sm-0"
            type="submit"
            @click.stop.prevent="comSearch()">Search</b-button>
          </b-nav-form>

          <b-nav-item href="#">
            Start a new Group!!
          </b-nav-item>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">
              Profile
            </b-dropdown-item>
            <b-dropdown-item href="#">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <v-btn outline fab @click="googleSignIn" color="#4285F4"><v-icon>Sign in</v-icon></v-btn>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Header',
  computed: {
    onHome () {
      return this.$route.path === '/'
    }
  },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    googleSignIn () {
      this.provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(this.provider).then((result) => {
      // store the user ore wathever
        this.$router.push('/home')
      }).catch((e) => {
        this.$snotify.error(e.message)
        console.log(e)
      })
    },
    comSearch () {
      const word = document.getElementById('search').value
      this.$router.push('/communities/' + word)
    }
  }
}
</script>

<style scoped>
.nav-link.nuxt-link-exact-active {
  font-weight: bolder;
  color: white;
}
</style>
