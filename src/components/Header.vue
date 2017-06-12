<template>
  <div class="header">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
            <router-link to="/" class="navbar-brand">
                <img src="../assets/logo.png">
            </router-link>
        </div>
        <ul class="nav navbar-nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/todo-list">Tasks</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
      return{}
  }
}
</script>

<style>
    img {
        width: 30px;
    }
</style>



