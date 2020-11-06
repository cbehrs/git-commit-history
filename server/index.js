const express = require("express");
const app = express();
const cors = require("cors");
const history = require("connect-history-api-fallback");

const repo = require("./routes/repo");
const port = process.env.PORT || 3000;

app.use(cors());

app.use("/api", repo);

app.use(history());

app.listen(port, () => console.log("App is running on port 3000!"));
