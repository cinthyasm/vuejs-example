<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'app',
  components: {
    'header-component': Header
  }
}
</script>

<style>
#app {
  font-family: 'Overpass', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
