const { linksCollectionID } = require("./src/util/env.js");

const { sdk, client } = require("./src/util/client.js");

const db = new sdk.Database(client);

const setupLinksCollection = async () => {
  try {
    await db.createCollection(
      linksCollectionID,
      "Links",
      "collection",
      ["role:all"],
      ["role:all"]
    );
    await db.createUrlAttribute(linksCollectionID, "originalUrl", true);
    await db.createStringAttribute(
      linksCollectionID,
      "uniqueName",
      255,
      true
    );
    await db.createUrlAttribute(linksCollectionID, "shortUrl", true);
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
