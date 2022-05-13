require("dotenv").config();

const host = process.env.HOST;
const appWritePort = process.env.APPWRITE_PORT;
const projectID = process.env.PROJECT_ID;
const apiKey = process.env.API_KEY;
const linksCollectionID = process.env.LINKS_COLLECTION_ID;
const appPort = process.env.APP_PORT;

module.exports = {
  host,
  appWritePort,
  projectID,
  apiKey,
  linksCollectionID,
  appPort,
};
