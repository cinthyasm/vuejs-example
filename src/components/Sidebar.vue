<template>
  <div class="col-md-2 sidebar aligner">
    <ul class="tags"> 
      <li @click="all()">All <i class="pull-right fa fa-chevron-right" aria-hidden="true"></i></li>
      <li @click="active()">Active <i class="pull-right fa fa-chevron-right" aria-hidden="true"></i></li>
      <li @click="completes()">Completed <i class="pull-right fa fa-chevron-right" aria-hidden="true"></i></li>
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

<style>
.tags li{
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}
.tags li i{
  cursor: pointer;
  color:#ccc;
}
</style>