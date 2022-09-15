const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const bookRouter = require("./src/routes/book");
const rootRouter = require("./src/routes/index");
require("./config/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
app.use("/books", bookRouter);
app.use("/", rootRouter);

app.listen(PORT, () => {
  console.log(`Servidor funcionando! Está conectado no PORT ${PORT}`)
})