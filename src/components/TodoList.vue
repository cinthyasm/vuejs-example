<template>
  <div class="todo-list">
    <div class="container">
      <div class="row">
        <div class="col-md-2 sidebar aligner">
          <ul class="tags"> 
            <li @click="getAll">All</li>
            <li @click="getActive">Active</li>
            <li @click="getCompletes">Completed</li>
            <button class="btn todos__clear" @click.prevent="clearCompleted" v-show="itemsDone.length">Clear completed tasks</button>
          </ul>
        </div>
        <div class="col-md-10">
          <h2>New Task</h2>
          <p>Type a task and press enter</p>
          <span v-show="itemsTodo.length">{{ itemsTodo.length }} pending</span>
          <input class="form-control" type="text" @keyup.enter="addTodo" v-model="newTodo"/>
          <div class="todos__block">
            <ul class="todos__list">
                <li class="todos__item" v-for="(todo,index) in filteredList" :class="{ 'todos__completed': todo.completed }" @click="todo.completed = !todo.completed" transition="fade"> 
                <span class="todos__delete" @click.stop="removeTodo(index)">
                    <i class="fa fa-times" aria-hidden="true"></i></span>{{ todo.text }}
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//https://vuejs.org/v2/guide/computed.html
export default {
  name: 'todo-list',
  data () {
    return {
      title: 'Todo List',
      newTodo: '',
      filteredList: [],
      todos: [
          {text: 'drink coffee', completed: true},
          {text: 'eat breakkie', completed: false},
          {text: 'check e-mails', completed: false},
          {text: 'hang in slack', completed: false},
          {text: 'do some work', completed: false},
          {text: 'check twitter', completed: false},
          {text: 'seriously dude, work!', completed: false},
          {text: 'drink coffee', completed: false},
          {text: 'play in CodePen', completed: false}
      ]
    }
  },
  computed: {
    itemsDone() {
      return this.todos.filter(todo => todo.completed)
    },
    itemsTodo() {
      return this.todos.filter(todo => !todo.completed)
    }
  },
   methods: {
    addTodo() {
      // create new todo object
      const newEntry = {
        text: this.newTodo,
        completed: false
      }
      // if input field not empty...
      if (this.newTodo.length) {
        // ...push to todos array 
        this.todos.push(newEntry)
        // ...reset input field
        this.newTodo = '' 
      }
    },
    getCompletes(){
      this.filteredList =  this.todos.filter(todo => todo.completed);
    },
    getActive(){
      this.filteredList = this.todos.filter(todo => !todo.completed);
    },
    removeTodo(index) {
      // remove todo item
      this.todos.splice(index, 1)
    },
    getAll(){
      this.filteredList = this.todos;
    },
    clearCompleted() {
      // only keep todo items not completed (see computed data)
      this.filteredList = this.itemsTodo
    }
  },//methods
  created(){
    this.filteredList = this.todos;
  }
  
}
</script>
<style>


.sidebar{
  height: calc(100vh - 70px);
  border-right: 1px solid #CCC;
}

.tags{
  padding: 50px 0 0 0; 
  list-style-type: none;
}
.tags li{
  font-size: 3rem;
  text-align: left;
}
.todos__block{
  height: 100vh;
}
.todos__title {
  margin-bottom: 1rem;
}
.todos__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.todos__item {
  position: relative;
  list-style: none;
  padding: 0.5rem;
  margin: 0 0.3rem 0.3rem 0;
  background: #fff;
  display: inline-block;
  color: #999;
  font-size: 16px;
}
.todos__item:hover {
  cursor: pointer;
  color: #354C5F;
}
.todos__delete {
 margin-right: 10px;
}
.todos__delete:hover {
 color:red;
}
.todos__completed {
  background: #f6feff;
  text-decoration: line-through;
  color: #41B883;
}
.todos__completed:hover {
  color: #008290;
}
.todos__clear {
    margin-top: 30px;
    color: #fff;
    background-color: #41B883;
}
.todos__clear:hover {
    color: #fff;
}
.todos__empty {
  font-size: 0.9rem;
  color: #666;
}
/* ##### transitions ##### */
.fade-transition {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  display: none;
}

</style>