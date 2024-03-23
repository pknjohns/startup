const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const historiesCollection = db.collection('score');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});

function getUser(email) {
    return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
    // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      email: email,
      password: passwordHash,
      token: uuid.v4(),
    };
    await userCollection.insertOne(user);
  
    return user;
}

function addDate(date) {
    historiesCollection.insertOne(date);
}

function getHistory() {
    const options = {
        sort: { date: -1 },
        limit: 20
    }

    const cursor = historiesCollection.find(options);
    return cursor.toArray();

    /* old getHistory func from index.js
    // updateTable includes a newly committed date in the table
    // The 20 most recent dates are saved in memory and disappear whenever the service is restarted.
    let histories = [];
    function updateTable(newDate, histories) {
    histories.unshift(newDate);
    
    if (histories.length > 20) {
        histories.length = 20;
    }
    
    return histories;
    }
    */
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    addDate,
    getHistory,
  };