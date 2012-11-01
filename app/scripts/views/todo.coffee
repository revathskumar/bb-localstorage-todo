class Todo.Views.Todo extends Backbone.View

  tagName: "tr"
  template: (options) ->
    new EJS({url: "scripts/templates/todo.ejs"}).render(options)

  events:
    "click #done": "updateStatus"

  updateStatus: ->
    @model.set({done: !@model.get("done")})
    @model.save()

  render: ->
    checked =  if @model.get('done') then "checked='checked'" else ""
    $(@el).html(@template({ todo: @model, checked: checked }))
    this