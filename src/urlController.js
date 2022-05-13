const { linksCollectionID, appPort } = require("./util/env.js");

const { sdk, client } = require("./util/client.js");

const { v4: uuidv4 } = require("uuid");
const { Query } = require("node-appwrite");

const db = new sdk.Database(client);
const baseUrl = `http://localhost:${appPort}`;

const createLink = async (req, res) => {
  let { originalURL, uniqueName } = req.body;

  if (uniqueName) {
    let documents = await db.listDocuments(linksCollectionID, [
      Query.equal("uniqueName", uniqueName),
    ]);
    if (documents.total > 0)
      return res.status(403).send("This unique name is taken");
  } else {
    while (true) {
      uniqueName = uuidv4().substring(0, 6);
      let documents = await db.listDocuments(linksCollectionID, [
        Query.equal("uniqueName", uniqueName),
      ]);
      if (documents.total == 0) break;
    }
  }

  db.createDocument(linksCollectionID, uuidv4(), {
    originalUrl: originalURL,
    uniqueName: uniqueName,
    shortUrl: baseUrl + "/" + uniqueName,
  })
    .then((resp) => {
      return res.status(201).send({ shortUrl: resp.shortUrl });
    })
    .catch(console.log);
};

const getLink = async (req, res) => {
  const { uniqueId } = req.params;

  if (!uniqueId || uniqueId === "undefined")
    return res.status(403).send("Invalid Request");

  console.log(uniqueId);

  let documentsList = await db.listDocuments(linksCollectionID, [
    Query.equal("uniqueName", uniqueId),
  ]);

  if (documentsList.total == 0)
    return res.status(404).send("Unique Name not found");

  res.redirect(documentsList.documents[0].originalUrl);
};

module.exports = {
  createLink,
  getLink,
};
