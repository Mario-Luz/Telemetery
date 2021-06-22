const mongoose = require("mongoose");

mongoose.connect(
  "",
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
