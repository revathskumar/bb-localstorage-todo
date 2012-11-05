(function() {

  window.Todo = {
    Routers: {},
    Models: {},
    Collections: {},
    Views: {},
    init: function() {
      var app;
      app = new Todo.Routers.TodoRouter();
      return Backbone.history.start({
        root: '/bb-localstorage-todo/',
        pushState: true
      });
    }
  };

}).call(this);
