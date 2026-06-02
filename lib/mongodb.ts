import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable.");
}

declare global {
  var __mongoClientPromise__: Promise<MongoClient> | undefined;
}

const client = new MongoClient(uri);

const mongoClientPromise =
  global.__mongoClientPromise__ ?? client.connect();

if (process.env.NODE_ENV !== "production") {
  global.__mongoClientPromise__ = mongoClientPromise;
}

export async function getMongoCollection() {
  const databaseName = process.env.MONGODB_DB_NAME;
  const collectionName = process.env.MONGODB_COLLECTION_NAME;

  if (!databaseName) {
    throw new Error("Missing MONGODB_DB_NAME environment variable.");
  }

  if (!collectionName) {
    throw new Error("Missing MONGODB_COLLECTION_NAME environment variable.");
  }

  const connectedClient = await mongoClientPromise;

  return connectedClient.db(databaseName).collection(collectionName);
}
