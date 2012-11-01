class Todo.Models.TodoModel extends Backbone.Model
	
	defaults:
    id: null
    task: null
    done: null

  initialize: ->
  	console.log "initialize model"

  validate: ->
  		
