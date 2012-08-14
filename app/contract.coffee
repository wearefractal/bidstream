module.exports =
  
  ## example template for a todos app

  name: "todos"
  goal: "keep track of todos"

  models:
    Todo:
      text: String
      done: Boolean
    User:
      username: String 

  archive:
    todos: 'Todo-list'

  views:
    index:
     route: '/'
     include: 'Todo-crud'