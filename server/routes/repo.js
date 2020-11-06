const axios = require("axios");
const childProcess = require("child_process");
const express = require("express");

const router = express.Router();

router.get("/repo-name", async (req, res) => {
  const execSync = childProcess.execSync;

  const repoName = execSync("git config --get remote.origin.url").toString();

  if (repoName) return res.send(repoName);
  res.status(404).send("There is no repository!");
});

router.get("/get-commits", async (req, res) => {
  const { repoOwner, repoName } = req.query;

  try {
    const { data } = await axios(
      `https://api.github.com/repos/${repoOwner}/${repoName}/commits`
    );

    if (data) return res.send(data);
    res.status(404).send("There is no data!");
  } catch (error) {
    console.log("Error: ", error); //this can be changed for a logger tool or throw an exception
  }
});

module.exports = router;
