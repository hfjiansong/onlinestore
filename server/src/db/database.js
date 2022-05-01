const { MongoClient } = require("mongodb");

const connectToDb = async () => {
  const userName = "qqqq";
  const password = "qqqq";
  const dbName = "shopping";
  const url = `mongodb+srv://${userName}:${password}@cluster0-k50sh.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  const client = new MongoClient(url);

  await client.connect();
  console.log("Connected successfully to server");

  return client.db(dbName);
};

module.exports = connectToDb;
