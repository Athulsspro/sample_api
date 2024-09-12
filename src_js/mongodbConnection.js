// Load the MongoDB client
const { MongoClient } = require('mongodb');

// Connection URI
const uri = "mongodb://localhost:27017"; // Default MongoDB URI

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Specify the database and collection
        const database = client.db('myDatabase');
        const collection = database.collection('myCollection');

        // Create a document to insert
        const doc = {
            name: "John Doe",
            age: 30,
            email: "johndoe@example.com"
        };

        // Insert the document into the collection
        const result = await collection.insertOne(doc);

        console.log(`Document inserted with _id: ${result.insertedId}`);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Run the main function
main().catch(console.error);
