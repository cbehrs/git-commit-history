const express = require("express");
const app = express();
const cors = require("cors");
const history = require("connect-history-api-fallback");

const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hi from API!");
});

app.use(history());

app.listen(port, () => console.log("App is running on port 3000!"));
