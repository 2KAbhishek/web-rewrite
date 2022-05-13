const { linksCollectionID } = require("./env");

const { sdk, client } = require("./client");

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
    await db.createIndex(linksCollectionID, "uniqueName", "key", ["uniqueName"]);
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
