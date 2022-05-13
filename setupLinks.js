const {
  host,
  appWritePort,
  projectID,
  apiKey,
  linksCollectionID,
} = require("./src/util/env.js");

const sdk = require("node-appwrite");

const client = new sdk.Client();

client
  .setEndpoint(`http://${host}:${appWritePort}/v1`)
  .setProject(projectID)
  .setKey(apiKey);

let database = new sdk.Database(client);

const setupLinksCollection = async () => {
  try {
    await database.createCollection(
      linksCollectionID,
      "Links",
      "collection",
      ["role:all"],
      ["role:all"]
    );
    await database.createUrlAttribute(linksCollectionID, "originalUrl", true);
    await database.createStringAttribute(
      linksCollectionID,
      "uniqueName",
      255,
      true
    );
    await database.createUrlAttribute(linksCollectionID, "shortUrl", true);
    console.log("Links collection created");
  } catch (e) {
    console.log(e);
  }
};

setupLinksCollection();
