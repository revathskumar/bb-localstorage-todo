class Todo.Routers.TodoRouter extends Backbone.Router
  routes: {
    "index": "index"
    "": "index"
  }

  initialize: ->
    @collection = new Todo.Collections.TodosCollection();
    @collection.fetch()

  index: ->
    console.log "Router index"
    todos = new Todo.Views.TodoView({collection: @collection});
    todos.render()
