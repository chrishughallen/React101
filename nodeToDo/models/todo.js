let mongoose = require('mongoose')


// Schema creation
let todoSchema = new mongoose.Schema({

	name:{
		type: String,
		required: 'Name cannot be blank'
	},
	completed:{
		type: Boolean,
		default: false
	},
	created_date:{
		type: Date,
		default: Date.now
	}
})

// This complies the schema to a model
let Todo = mongoose.model('Todo',todoSchema)

// This exports the model as "ToDo"
module.exports = Todo