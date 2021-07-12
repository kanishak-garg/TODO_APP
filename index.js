const express = require('express');
const port =process.env.PORT || 8000;
const db = require('./config/mongoose');
const { findOneAndDelete } = require('./models/todo');
const Todo = require('./models/todo');
const app = express();
app.use(express.urlencoded());


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
    Todo.find({}, function (err, todos) {
        if (err) {
            console.log("error finding the todos");
            return;
        }
        res.render('home', {
            task_list: todos
        });
    })
});

app.post("/add_task", function (req, res) {
    // console.log(req.body);
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.date
    }, function (err, newTodo) {
        if (err) {
            console.log("error in creating the contact", err);
            return;
        }
        return res.redirect('back');
    });

});


app.post("/delete_task", function (req, res) {

    let completed = req.body.completed;
    if (typeof (completed) == "string") {
        Todo.findByIdAndDelete(completed, function (err) {
            if (err) {
                console.log(id);
                console.log("error deleting the data");
                return;
            }
            return res.redirect('back');
        });
    }
    else {
        for (let id of completed) {
            Todo.findByIdAndDelete(id, function (err) {
                if (err) {
                    console.log(id);
                    console.log("error deleting the data");
                    return;
                }
            });
        }
        return res.redirect('back');
    }
});

app.listen(port, function (err) {
    if (err) {
        console.log("error in starting the server");
        return;
    }
    console.log(`server started on port: ${port}`);
});