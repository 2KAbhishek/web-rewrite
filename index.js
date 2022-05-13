require("dotenv").config();
const express = require("express");
const { appPort } = require("./src/util/env");
const urlController = require("./src/urlController");

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.post("/", urlController.createLink);

app.get("/:uniqueId", urlController.getLink);

app.listen(appPort, () => {
  console.log(`Server started on PORT ${appPort}`);
});
