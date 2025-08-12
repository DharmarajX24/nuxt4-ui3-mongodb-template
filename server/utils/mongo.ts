import { Db, MongoClient } from 'mongodb';

export let db: Db;

export const initializeDb = async () => {
  try {
    const { MONGODB_URI, MONGODB_NAME } = useRuntimeConfig();

    if (!MONGODB_URI || !MONGODB_NAME) {
      // noinspection ExceptionCaughtLocallyJS
      throw new Error('MongoDB URI or database name is not defined in runtime config.');
    }

    if (!db) {
      const mClient = await new MongoClient(MONGODB_URI, {
        connectTimeoutMS: 10000,
        maxIdleTimeMS: 10000,
      }).connect();

      db = mClient.db(MONGODB_NAME);
    }
    return db;
  } catch (e) {
    console.error(`Failed to connect to MongoDB:`, e);
  }
};
