let express = require('express'),
	app = express(),
	port = 3000,
	bodyParser = require('body-parser')

let todoRoutes = require('./routes/todos')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(express.static(__dirname + '/views'))

app.listen(port,()=>console.log("WE UP!"))

app.get("/",(req,res)=>
	res.sendFile("index.html"))

app.use('/api/todos',todoRoutes)