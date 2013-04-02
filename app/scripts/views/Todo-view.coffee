class Todo.Views.TodoView extends Backbone.View

  template: JST['app/scripts/templates/todo_view.ejs']

  events:
    "submit #new_task_form": "create"

  initialize: ->
    @collection.on("reset", @render, this)
    @collection.on("add", @appendTodo, this)

  create: (event) ->
    event.preventDefault()
    @collection.create({task: $("#task").val(), done:false })
    $("#task").val("")

  appendTodo: (entry) ->
    single_todo = new Todo.Views.Todo({model: entry})
    @$("#todo-list").append(single_todo.render().el)

  render: ->
    console.log "Todo.Views.TodoView"
    $(@el).html(@template())
    $("#todoapp").html(@el)
    @collection.each @appendTodo
    this
