(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Todo.Collections.TodosCollection = (function(_super) {

    __extends(TodosCollection, _super);

    function TodosCollection() {
      return TodosCollection.__super__.constructor.apply(this, arguments);
    }

    TodosCollection.prototype.localStorage = new Backbone.LocalStorage("Todos");

    return TodosCollection;

  })(Backbone.Collection);

}).call(this);
