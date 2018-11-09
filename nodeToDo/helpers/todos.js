var db = require('../models')

exports.getTodos = (req,res)=>{
	db.Todo.find()
	.then((todos)=>
		res.json(todos))
	.catch((err)=>
		res.send(err))
}

exports.createTodo = (req,res)=>{
	db.Todo.create(req.body)
	.then((newTodo)=>
		res.json(newTodo))
	.catch((err)=>
		res.send(err))
}

exports.findTodo = (req,res)=>{
	db.Todo.findById(req.params.todoId)
	.then((foundtodo)=>
		res.json(foundtodo))
	.catch((err)=>
		res.send(err))
}

exports.updateTodo = (req,res)=>{
	db.Todo.findOneAndUpdate(
		{_id: req.params.todoId},
		req.body, {new: true})
	.then((todo)=>
		res.json(todo)
		.catch((err)=>
			res.send(err)))
}

exports.deleteTodo =  (req,res)=>{
	db.Todo.remove({_id: req.params.todoId})
	.then(()=>
		res.send("Deleted!"))
	.catch((err)=>
	res.send(err))
}

module.exports = exports;







