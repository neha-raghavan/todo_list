const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const path = require('path'); 

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }))
const programmingLanguagesRouter = require("./routes/programmingLanguages");
const usersRouter = require('./routes/users');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.use('/user-list', function(req, res, next) {
   
    res.render('list', { title: 'User List', userData: res});
 
});
app.use("/programming-languages", programmingLanguagesRouter);
app.use('/users', usersRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
