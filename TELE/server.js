const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const config = require("./src/config/config");

const app = express();
const port = process.env.PORT || 5000;
const routes = require("./src/routes/routes");

app.use(cors());

app.use(cookieParser());
app.use(express.json());

app.use(routes);

app.listen(port, function () {
  console.log(`Server rodando na porta ${port}`);
});
