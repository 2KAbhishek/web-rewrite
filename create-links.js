require("dotenv").config();

const sdk = require("node-appwrite");

const client = new sdk.Client();

client
  .setEndpoint(`http://${process.env.HOST}:${process.env.APPWRITE_PORT}/v1`) // Your API Endpoint
  .setProject(process.env.PROJECT_ID) // Your project ID
  .setKey(process.env.API_KEY); // Your secret API key
let database = new sdk.Database(client);

const setupLinksCollection = async () => {
  try {
    const collectionID = process.env.LINKS_COLLECTION_ID;

    await database.createCollection(
      collectionID,
      "Links",
      "collection",
      ["role:all"],
      ["role:all"]
    );
    await database.createUrlAttribute(collectionID, "originalurl", true);
    await database.createStringAttribute(collectionID, "uniquename", 255, true);
    await database.createUrlAttribute(collectionID, "shorturl", true);
    console.log("Links collection created");
  } catch (e) {
    console.log(e);
  }
};

setupLinksCollection();
