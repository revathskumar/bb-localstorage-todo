class Todo.Routers.TodoRouter extends Backbone.Router
	initialize:  ->
		console.log "initialize"

	routes:
		"": "index"

	initialize: ->
		@collection = new Todo.Collections.TodosCollection();
		@collection.fetch()

	index: ->
		todos = new Todo.Views.TodoView({collection: @collection});
		todos.render()
