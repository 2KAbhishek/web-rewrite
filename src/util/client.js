const { host, appWritePort, projectID, apiKey } = require("./env.js");

const sdk = require("node-appwrite");

const client = new sdk.Client();

client
  .setEndpoint(`http://${host}:${appWritePort}/v1`)
  .setProject(projectID)
  .setKey(apiKey);

module.exports = {
  sdk,
  client,
};
