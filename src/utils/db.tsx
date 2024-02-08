import { Db, MongoClient } from 'mongodb';

const MONGODB_URI = "mongodb://localhost:27017";
const MONGODB_DB = 'your-database-name';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

const connectToDatabase = async () => {


    try {
        if (cachedClient && cachedDb) {
            return { client: cachedClient, db: cachedDb };
        }


        const client = await MongoClient.connect(MONGODB_URI, );

        const db = await client.db(MONGODB_DB);

        // Cache the client and database for future use
        cachedClient = client;
        cachedDb = db;

        // Return the MongoDB client and connected database
        return { client, db };
    } catch (error) {
        console.log(error);

    }

}

export default connectToDatabase;
