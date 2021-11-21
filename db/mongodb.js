const { MongoClient } = require('mongodb');
const uri = require('./config.js');

async function addUser({firstName, lastName, email, password}) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const database = client.db("journal");
        const collection = database.collection("users");
        const product = await collection.insertOne({
            firstName,
            lastName,
            email,
            password
        });
        return product;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function findUser({email}) {
    
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const database = client.db("journal");
        const collection = database.collection("users");
        const product = await collection.findOne({'email': email});
        return product;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function findAllUsers() {
    
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const database = client.db("journal");
        const collection = database.collection("users");
        const product = await collection.find().toArray();
        return product;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

module.exports = {
    addUser,
    findUser,
    findAllUsers
};