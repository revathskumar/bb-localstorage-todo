class Todo.Views.Todo extends Backbone.View

  tagName: "tr"
  template: JST['app/scripts/templates/todo.ejs']

  events:
    "click #done": "updateStatus"

  updateStatus: ->
    @model.set({done: !@model.get("done")})
    @model.save()

  render: ->
    checked =  if @model.get('done') then "checked='checked'" else ""
    $(@el).html(@template({ todo: @model, checked: checked }))
    this
