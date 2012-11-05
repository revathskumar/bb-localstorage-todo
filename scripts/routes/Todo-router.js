(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Todo.Routers.TodoRouter = (function(_super) {

    __extends(TodoRouter, _super);

    function TodoRouter() {
      return TodoRouter.__super__.constructor.apply(this, arguments);
    }

    TodoRouter.prototype.initialize = function() {
      return console.log("initialize");
    };

    TodoRouter.prototype.routes = {
      "": "index"
    };

    TodoRouter.prototype.initialize = function() {
      this.collection = new Todo.Collections.TodosCollection();
      return this.collection.fetch();
    };

    TodoRouter.prototype.index = function() {
      var todos;
      todos = new Todo.Views.TodoView({
        collection: this.collection
      });
      return todos.render();
    };

    return TodoRouter;

  })(Backbone.Router);

}).call(this);
