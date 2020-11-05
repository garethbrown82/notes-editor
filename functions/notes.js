const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');
// Import cors package
const cors = require('cors');

// Create express app
const app = express();

// Bind cors middleware to the app
app.use(cors({ origin: true }));

// Initialize Firebase admin to access Firestore from the server
admin.initializeApp();

app.get('/', async (request, response) => {
  functions.logger.info('Triggering get notes request', { structuredData: true });

  try {
    // Use admin to access a reference to the notes collection in Firestore
    const notesRef = admin.firestore().collection('notes');
  
    // Get all notes from the notes collection in descending order of 'created' field
    const notesCollection = await notesRef.orderBy('created', 'desc').get();
  
    // Add notes document data to an array
    let notes = [];
    notesCollection.forEach((note) => {
      notes.push(note.data());
    });
  
    // return notes array as a json response
    response.json(notes);
  } catch (error) {
    // Log and return error status if things go wrong
    functions.logger.error(error);
    response.status(500).send('Internal server error');
  }
});

app.post('/', async (request, response) => {
  functions.logger.info('Triggering post note request', { structuredData: true });
  
  // Construct the note object to add to Firestore
  const note = { 
    created: admin.firestore.Timestamp.now(),
    title: request.body.title,
    text: request.body.text, 
  }

  try {
    // Save the note to the Firestore notes collection
    await admin.firestore().collection('notes').add(note);
    response.json({ message: 'Note added successfully'});
  } catch (error) {
    // Log and return error status if things go wrong
    functions.logger.error(error);
    response.status(500).send('Internal server error');
  }
});

exports.notes = functions.https.onRequest(app);
