<template>
  <div id="main app">
    <!--<h1>{{ title  }}</h1>-->
    <nav>
      <router-link :to="{name: 'default'}">Default</router-link>
      <router-link :to="{name: 'create'}">Create</router-link>
      <!--<router-link></router-link>-->
    </nav>
    <hr>
    <router-view></router-view>
  </div>
</template>
<style>
.raw {
  background: yellow;
  padding: .1em;
  white-space: pre-line;
}

.raw::after {
  content: ' ';
}
</style>
<script>
export default {
  name: 'app',
  data(){
    return {
      title: 'Capture Me - Vue'
    }
  },
  created () {
    // this.$router.replace('/create')
  }
}
</script>

