(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Todo.Models.TodoModel = (function(_super) {

    __extends(TodoModel, _super);

    function TodoModel() {
      return TodoModel.__super__.constructor.apply(this, arguments);
    }

    TodoModel.prototype.defaults = {
      id: null,
      task: null,
      done: null
    };

    TodoModel.prototype.initialize = function() {
      return console.log("initialize model");
    };

    TodoModel.prototype.validate = function() {};

    return TodoModel;

  })(Backbone.Model);

}).call(this);
