<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>{{ msg }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-offset-3 col-md-6">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
          In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
          Nullam dictum felis eu pede mollis pretium. Integer tincidunt. </p>
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
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>