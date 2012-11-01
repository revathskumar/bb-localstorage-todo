
window.Todo =
	Routers: {}
	Models: {}
	Collections: {}
	Views: {}
	init: ->
		app = new Todo.Routers.TodoRouter();
		Backbone.history.start({pushState: true});