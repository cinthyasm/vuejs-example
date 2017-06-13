<template>
  <div class="col-md-10">
    <slot></slot>
    <span v-show="itemsTodo">{{ itemsTodo}} pending</span>
    <input class="form-control" type="text" @keyup.enter="addTodo" v-model="newTodo"/>
    <div class="todos__block">
      <ul class="todos__list">
        <li class="todos__item" v-for="(todo,index) in todoList" :class="{ 'todos__completed': todo.completed }" @click="todo.completed = !todo.completed" transition="fade"> 
        <span class="todos__delete" @click.stop="removeItem(index)">
            <i class="fa fa-times" aria-hidden="true"></i></span>{{ todo.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      itemsTodo: Number,
      newTodo: String,
      addTodo: Function,
      todoList: Array,
      removeItem: Function
    }
  }
</script>
