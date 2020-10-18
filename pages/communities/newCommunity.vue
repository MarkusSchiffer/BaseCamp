<template>
  <div class="container">
    <h1>Create a Community</h1>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label="Community" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="What is your community?"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Description" label-for="input-2">
        <b-form-textarea
          id="input-2"
          v-model="form.description"
          required
          placeholder="Enter something..."
          rows="5"
          max-rows="10"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        description: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>
