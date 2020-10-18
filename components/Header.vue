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
        <!-- <b-navbar-nav>
          <b-nav-item href="#">
            Link
          </b-nav-item>
          <b-nav-item href="#" disabled>
            Disabled
          </b-nav-item>
        </b-navbar-nav> -->
        <!-- Left aligned items here. -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form v-if="onHome">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
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
      // return this.$route.name.includes('index')
      return true
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
