<template>
  <div class="container">
    <div>
      <Community :cardTitle="'Card Title'" :cardImg="'https://picsum.photos/600/300/?image=25'"/>
    </div>
  </div>
</template>

<script>
import Community from '~/components/Community'

export default {
  name: 'index',
  components: {
    Community
  }
}
</script>

<style>

</style>
