const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
let workItems = [];
let tasks = [];
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const daysOfWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
app.set('view engine', 'ejs')
app.use(express.static('public'));
let day = date.getDate();
app.get('/', function (req, res) {

  res.render('list', {listTitle: day, items: tasks});
})

app.get('/work', (req, res) => {
  res.render("list", {listTitle: "Work List", items: workItems})
})
app.get('/about', (req, res) => {
  res.render("about");
})

app.post('/', (req, res) => {
  
  let newTask = req.body.addTask;
  if (req.body.list === "Work") {
    workItems.push(newTask)
    res.redirect('/work');
  } else {
    tasks.push(newTask);
  }
  res.redirect('/');
})

app.post('/work', (req, res) => {
  let newTask = req.body.addTask;
  workItems.push(newTask);
  res.redirect('/work');
})

app.listen(3000, function () {
  console.log("Server is listening on port 3000.");
})
