
window.Todo =
  Routers: {}
  Models: {}
  Collections: {}
  Views: {}
  init: ->
    app = new Todo.Routers.TodoRouter();
    app.index();
    Backbone.history.start({pushState: true});
