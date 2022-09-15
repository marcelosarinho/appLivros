const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/app-livros")
  .then(() => console.log("MongoDB conectado com sucesso!"))
  .catch(err => console.log(err));