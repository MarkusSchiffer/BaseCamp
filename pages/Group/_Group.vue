<template>
  <div class="w-100 d-flex flex-column align-items-center">
    <h1> {{ groupName }} </h1>
    <div id='chatHolder'>
      <div v-for="(chat, index) in chats" :key="index" class="chat my-3 d-flex flex-column">
        <div v-if="chat.author.toLowerCase() === author" class="me align-self-end">
          <p>{{ chat.author + ": " + " " + chat.content }}</p>
        </div>
        <div v-else class="other align-self-start">
          <p>{{ chat.author + ": " + " " + chat.content }}</p>
        </div>
      </div>
    </div>
    <b-form @submit="onSubmit">
      <div class="d-flex flex-row">
        <b-form-input
          id="input-1"
          v-model="form.post"
          required
          placeholder="Message"
        ></b-form-input>
        <b-button type="submit" variant="primary">Send</b-button>
      </div>
    </b-form>
  </div>
</template>
<script>
export default {
  name: 'Group',
  data () {
    return {
      groupName: this.$route.params.Group,
      chats: [{ author: 'Karen', content: 'Amazing weekend ladies! Baker was beautiful! We should hit the slopes again some time! Hope to see you next season!' }, { author: 'Rebecca', content: 'I agree completely!' }, { author: 'Gemma', content: 'Just remember to lean forward into those ski boots next time! :)' }, { author: 'Karen', content: 'Of course!' }],
      author: 'karen',
      form: {
        post: ''
      }
    }
  }
}
</script>
<style scoped>
#chatHolder {
  width: 50%;
  overflow-y: auto;
  height: 50vh;
}

.other {
  background-color: #d3d3d3;
  border: 2px solid black;
  border-radius: 12px;
  margin-right: 10px;
  max-width: 40%;
}

.me {
  background-color: #00c6ff;
  border: 2px solid black;
  border-radius: 12px;
  margin-left: 10px;
  max-width: 40%;
}

#input-1 {
  width: 500px;
}
</style>
