<template>
  <div class="col-md-2 sidebar aligner">
    <ul class="tags"> 
      <li @click="all()">All</li>
      <li @click="completes()">Active</li>
      <li @click="active()">Completed</li>
      <button class="btn todos__clear" @click.prevent="clearCompleted()" v-show="itemsDone">Clear completed tasks</button>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      all: Function,
      completes: Function,
      active: Function,
      clearCompleted: Function,
      itemsDone: Number
    }
  }
</script>