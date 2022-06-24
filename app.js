const express = require("express");
const morgan = require("morgan");
const { db, Page, User } = require("./models");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/users");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use("/wiki", wikiRouter);
app.use("/users", userRouter);
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

// const syncPage = async () => {
//     await Page.sync();
//     console.log('page sync done');
// };
// syncPage();

// const syncUser = async () => {
//     await User.sync();
//     console.log('user sync done');
// };
// syncUser();

const syncdb = async () => {
  await db.sync({force: true}); // if model defnition change use db.sync({force: true})
  console.log("db sync done");
};
syncdb();

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});

module.exports = app;