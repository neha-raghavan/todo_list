const express = require("express");
const app = express();
const path = require('path'); 
const port = 3000;
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
  res.json({ message: "ok" });
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