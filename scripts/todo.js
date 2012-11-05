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
        pushState: true
      });
    }
  };

}).call(this);
