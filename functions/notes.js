const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  functions.logger.info("Triggering get notes request", {structuredData: true});
  response.send("Here's your notes from express!");
});

exports.notes = functions.https.onRequest(app);