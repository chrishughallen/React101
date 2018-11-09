$(document).ready(function(){
	$.getJSON("/api/todos")
	.then(getTodos)
	.catch((err)=>alert('ERROR!'))

	$('#todoInput').keypress(function(e){
		if(e.which == 13){
			addTodo()
		}
	})

	$('.list').on('click','li',function(e){
		updateTodo($(this))
	})

	$('.list').on('click', 'span',function(e){
		e.stopPropagation();
		removeTodo($(this).parent());
	})
});


const getTodos = (todos) => {
	todos.forEach((todo) => {
		appendToDo(todo)
	})
}

const appendToDo=(todo)=>{
		let newTodo = $("<li class=\"task\">" + todo.name + "<span>X</span></li>");
		newTodo.data('id',todo._id)
		newTodo.data('completed', todo.completed)
		if(todo.completed){
			newTodo.addClass('done')
		}
		$('.list').append(newTodo)
}

const addTodo = () =>{
	let newTodo = $('#todoInput').val();
	$.post('/api/todos',{name: newTodo})
	.then((newToDo)=>{
		appendToDo(newToDo)
		$('#todoInput').val('')
	}).catch((err)=>console.log(error))
}

const removeTodo = (todo) =>{
		let clickedId = todo.data('id')
		let deleteUrl = "/api/todos/" + clickedId
		$.ajax({
			method: 'DELETE',
			url: deleteUrl 
		})
		.then((data)=>todo.remove())
		.catch((err) =>console.log(err))
}

const updateTodo = (todo) =>{
	let updateUrl = "/api/todos/" + todo.data('id')
	let isDone = !todo.data('completed')
	let updateData = {completed: isDone}
		$.ajax({
		method: "PUT",
		url:updateUrl,
		data: updateData
	})
	.then((updatedTodo) =>{
		todo.toggleClass('done')
		todo.data('completed', isDone)
	})


}