const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');

// Create express app
const app = express();

// Initialize Firebase admin to access Firestore from the server
admin.initializeApp();

app.get('/', async (request, response) => {
  functions.logger.info('Triggering get notes request', { structuredData: true });

  // Use admin to access a reference to the notes collection in Firestore
  const notesRef = admin.firestore().collection('notes');

  // Get all notes from the notes collection
  const notesCollection = await notesRef.get();

  // Add notes document data to an array
  let notes = [];
  notesCollection.forEach((note) => {
    notes.push(note.data());
  });

  // return notes array as a json response
  response.json(notes);
});

exports.notes = functions.https.onRequest(app);