<template>
  <div class="container">
    <h1>Create a Group!</h1>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label="Group Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="Enter group name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Description:" label-for="input-2">
        <b-form-textarea
          id="input-2"
          v-model="form.description"
          required
          placeholder="Enter something..."
          rows="5"
          max-rows="10"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group-3" label="Skill levels:" label-for="checkboxes-3">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-3">
          <b-form-checkbox value="0">Beginner</b-form-checkbox>
          <b-form-checkbox value="1">Novice</b-form-checkbox>
          <b-form-checkbox value="2">Intermediate</b-form-checkbox>
          <b-form-checkbox value="3">Advanced</b-form-checkbox>
          <b-form-checkbox value="4">Expert (Professional)</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group id="input-group-4" label="Location:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.location"
          required
          placeholder="(Leave blank for anywhere)"
        ></b-form-input>
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
        description: '',
        checked: [],
        location: ''
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
