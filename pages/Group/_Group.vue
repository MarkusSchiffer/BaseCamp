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
      chats: [{ author: 'alpha', content: 'fkljsadoip woijkajf opiwej.jfpk lwejkldsjf;ajfkd;a  sjf;dsjfld;sjafk;ldsfjkl; sjfl;dsjl;fjasdfj; lasdkjkl;sdfjk;lsfj;kldsa jf;alsdjoisd' }, { author: 'beta', content: 'fldksjf;ldsjf lsfjwop' }, { author: 'gamma', content: 'xyz,xyz' }, { author: 'omega', content: 'xyz,xyz' }],
      author: 'beta',
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
