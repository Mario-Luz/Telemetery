const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://desenv:desenv2021@cluster0.cwlj4.mongodb.net/telemetria?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoDB Conectado");
    }
  }
);
