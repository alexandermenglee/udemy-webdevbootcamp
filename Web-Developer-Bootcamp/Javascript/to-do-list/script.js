var todos = ["Buy turtle"];

var input = prompt("What would you like to do?");

function listToDos(){
	if(input === "list"){
		todos.forEach(function(td, i){
			console.log("*******");
			console.log(i + ": " + td);
			console.log("*******");
		});
	} 
}

function addToDos(){
	{
		var newTodo = prompt("Enter new task");
		todos.push(newTodo);
		console.log("Added todo");
		}
}

function deleteTodos(){
	//ask user for index
	  	//delete todo at the index
	  	var index = prompt("Enter index of todo that you want to delete");
	  	//splice()
	  	todos.splice(index, 1); 
	  	console.log("Deleted todo");
}

while(input !=="quit"){
	if(input === "list"){
		listToDos();
	} else if(input === "new"){
		addToDos();
	}
	  else if(input === "delete"){
	  	deleteTodos();
	  }	

	input = prompt("What would you like to do?");
}
console.log("Ok you quit the app");











