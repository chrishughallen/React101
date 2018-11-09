let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/todo')


mongoose.Promise = Promise

module.exports.Todo = require("./todo")


const letter = () => "a"

