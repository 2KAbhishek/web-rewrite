const { linksCollectionID } = require("./env");

const { sdk, client } = require("./client");

const db = new sdk.Database(client);
let promise = db.createIndex(linksCollectionID, "primary", "key", [
  "uniqueName",
]);

promise.then(
  function (response) {
    console.log(response);
  },
  function (error) {
    console.log(error);
  }
);
