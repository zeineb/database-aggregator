'use strict';

const fs = require('fs');
const path = require('path');
const util = require('util');

const yaml = require('js-yaml');
const mongoose = require('mongoose');

const readFile = util.promisify(fs.readFile);

const mongoURL = 'mongodb://localhost/__database-aggregator-test-db';

async function connect() {
  await mongoose.connect(mongoURL);
  await mongoose.connection.db.dropDatabase();
}

async function disconnect() {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
}

async function insertData(filename) {
  const data = await readFile(
    path.join(__dirname, 'mongo-data', `${filename}.yaml`),
    'utf8'
  );
  const parsed = yaml.safeLoad(data);
  for (const collName in parsed) {
    const collection = mongoose.connection.collection(collName);
    await collection.insertMany(parsed[collName]);
  }
}

module.exports = {
  connect,
  disconnect,
  insertData
};
