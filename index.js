const express = require('express');
const port = 8000;
const db = require('./config/mongoose');
const Todo = require('./models/todo');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('assets'));

taskList = [
    {
        description: "complete app",
        type: "work"
    },
    {
        description: "to homework",
        type: "school"
    }
]

app.get('/', function (req, res) {
    res.render('home', {
        task_list: taskList
    });
});



app.listen(port, function (err) {
    if (err) {
        console.log("error in starting the server");
        return;
    }
    console.log(`server started on port: ${port}`);
});