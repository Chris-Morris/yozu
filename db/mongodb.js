const { MongoClient } = require('mongodb');
const { uri } = require('./config');

async function checkUserExists({ type, colour }) {
    

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const database = client.db("sample_mflix");
        const collection = database.collection("comments");
        // const query = { "product_title": { '$regex': `${type} - ${colour}`, '$options': 'i' } };
        const product = await collection.find().toArray();
        return product;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

module.exports = {
    checkUserExists
};