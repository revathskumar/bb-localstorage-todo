(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Todo.Views.TodoView = (function(_super) {

    __extends(TodoView, _super);

    function TodoView() {
      return TodoView.__super__.constructor.apply(this, arguments);
    }

    TodoView.prototype.template = function(options) {
      return new EJS({
        url: "scripts/templates/todo_view.ejs"
      }).render(options);
    };

    TodoView.prototype.events = {
      "submit #new_task_form": "create"
    };

    TodoView.prototype.initialize = function() {
      this.collection.on("reset", this.render, this);
      return this.collection.on("add", this.appendTodo, this);
    };

    TodoView.prototype.create = function(event) {
      event.preventDefault();
      this.collection.create({
        task: $("#task").val(),
        done: false
      });
      return $("#task").val("");
    };

    TodoView.prototype.appendTodo = function(entry) {
      var single_todo;
      single_todo = new Todo.Views.Todo({
        model: entry
      });
      return this.$("#todo-list").append(single_todo.render().el);
    };

    TodoView.prototype.render = function() {
      $(this.el).html(this.template());
      $("#todoapp").html(this.el);
      this.collection.each(this.appendTodo);
      return this;
    };

    return TodoView;

  })(Backbone.View);

}).call(this);
