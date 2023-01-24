/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
'use strict';

const dotenv = require('dotenv');
dotenv.config();

const { MongoClient } = require('mongodb');

const MONGO_HOST = process.env.MONGO_HOST;
const dbName = process.env.DATABASE;
const table = process.env.NOTIFICATION_TABLE;

const randomNames = [
    'Priyanka',
    'David',
    'Sarah',
    'Jenny',
    'May',
    'Arjun',
    'Adeel',
    'Nour',
];
const randomNotificationText = [
    (name) =>
        `To suppose justice to do this, is to destroy the principle of its existence, which is the thing itself, ${name}.`,
    (name) => `Joy is the experience of a relaxing day with ${name}.`,
    (name) => `${name} is playing tennis.`,
    (name) => `${name} didn't go out last weekend.`,
    (name) => `You've got to do something about this soon, ${name}.`,
    (name) => `${name}, I'm really am unlucky!`,
    (name) => `All the best to ${name}!`,
    (name) => `${name}, It hasn't been that long.`,
    (name) => `${name} and I ate way too much last night.`,
    (name) => `Never mind what ${name} said.`,
    (name) => `I'm here because I need ${name}'s help.`,
    (name) => `I was thinking about ${name}.`,
    (name) => `${name} has been putting aside a little money each month.`,
];

async function seed() {
    const client = new MongoClient(MONGO_HOST);
    await client.connect();
    for (let seedCount = 0; seedCount < 20; seedCount++) {
        try {
            const name = _randomItemFromArray(randomNames);
            const message = _randomItemFromArray(randomNotificationText)(name);
            await client.db(dbName).collection(table).insertOne({ message, read: false });
            console.log(`${seedCount}: Inserting ${message}`);
        } catch (error) {
            console.log('Unable to create a random notification.', error);
        }

    }
}

function _randomItemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

seed().then(() => {
    console.log('Finished seeding notifications in the database');
    process.exit(0);
});
