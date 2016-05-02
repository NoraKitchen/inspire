app.controller('TodoController', function(TodoService){
	var tc = this;
	tc.todos = TodoService.getTodos();
	// DO NOT EDIT ABOVE
	
	tc.addTodos = function(newItem){
		tc.todos.push(newItem);
		tc.updateTodos();
		tc.newListItem = "";
	};
	
	tc.removeItem = function(index){
		tc.todos.splice(index, 1);
		tc.updateTodos();
	}
	
	tc.updateTodos = function(){
		TodoService.saveTodos(tc.todos);
	};
	
})