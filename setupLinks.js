const { linksCollectionID } = require("./src/util/env.js");

const { sdk, client } = require("./src/util/client.js");

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
    if (e.message.includes("already exists")) {
      console.log("Links collection already exists");
    } else {
      console.log(e);
    }
  }
};

setupLinksCollection();
