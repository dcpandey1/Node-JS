//Create a free cluster 
// Create user
// Get the connection String
// Install MongoDB compass

const { MongoClient } = require('mongodb');

const url = "mongodb+srv://dheerajsde0:ATVJlWvTxC9ptdfC@namastenode.jjkk3.mongodb.net/";

const client = new MongoClient(url);

const dbName = 'Hello_World';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    // the following code examples can be pasted here...

    // Insert The Data
    const data = {
        "first_name": "Nikhil",
        "last_name": "Koshi",
        "age": 23,
        "company": "odoo",
    }
    const insertResult = await collection.insertMany([data]);
    console.log('Inserted documents =>', insertResult);

    // Read the Data
    const findResult = await collection.find({}).toArray();
    // console.log('Found documents =>', findResult);

    // Count Documents
    const count = await collection.countDocuments({});
    console.log("Count", count)

    // Find all ducuments with first name Nikhil
    const doc = await collection.find({first_name:"Nikhil"})
    console.log(doc);


    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());