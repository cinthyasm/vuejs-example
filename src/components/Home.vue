<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <img class="animated bounce" src="../assets/logo.png">
          <h1>{{ msg }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-offset-3 col-md-6">
          <strong>Cinthya Salazar - Dilan Quesada</strong>
          <p>Immersive Program 3</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Vue.js App'
    }
  }
}
</script>

<style>
.animated { 
    background-repeat: no-repeat;
    background-position: left top; 
    padding-top:95px;
    margin-bottom:60px;
    -webkit-animation-duration: 1s;
    animation-duration: 1s; 
    -webkit-animation-fill-mode: both; 
    animation-fill-mode: both; 
  }
  
  @-webkit-keyframes bounce { 
    0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);} 
    40% {-webkit-transform: translateY(-30px);} 
    60% {-webkit-transform: translateY(-15px);} 
  } 
  
  @keyframes bounce { 
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
    40% {transform: translateY(-30px);} 
    60% {transform: translateY(-15px);} 
  }
  
  .bounce { 
    -webkit-animation-name: bounce; 
    animation-name: bounce; 
  }

</style>