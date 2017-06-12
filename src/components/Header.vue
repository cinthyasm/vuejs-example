<template>
  <header class="header">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/todo-list">Tasks</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
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
   header .navbar-default{
     background-color: #41B883;
     border: 0;
     border-radius: 0;
     font-size: 16px;
   }
   .navbar-default .navbar-nav>li>a{
     color: #fff;
   }
    .navbar-default .navbar-nav>li>a:hover, .navbar-default .navbar-nav>li>a:active,.navbar-default .navbar-nav>li>a:focus{
     color: #81F1BD;
   }
</style>



