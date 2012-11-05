(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Todo.Views.Todo = (function(_super) {

    __extends(Todo, _super);

    function Todo() {
      return Todo.__super__.constructor.apply(this, arguments);
    }

    Todo.prototype.tagName = "tr";

    Todo.prototype.template = function(options) {
      return new EJS({
        url: "scripts/templates/todo.ejs"
      }).render(options);
    };

    Todo.prototype.events = {
      "click #done": "updateStatus"
    };

    Todo.prototype.updateStatus = function() {
      this.model.set({
        done: !this.model.get("done")
      });
      return this.model.save();
    };

    Todo.prototype.render = function() {
      var checked;
      checked = this.model.get('done') ? "checked='checked'" : "";
      $(this.el).html(this.template({
        todo: this.model,
        checked: checked
      }));
      return this;
    };

    return Todo;

  })(Backbone.View);

}).call(this);
