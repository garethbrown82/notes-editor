<template>
  <div class="wrapper">
    <CreateNote
      v-bind:noteTitle="noteTitle"
      v-bind:noteText="noteText"
      v-on:update-notetext="updateNoteText"
      v-on:update-notetitle="updateNoteTitle"
      v-on:add-note="addNote"
    />
    <NotesList v-bind:notes="notes" />
  </div>
</template>

<script>
import NotesList from './components/NotesList.vue';
import CreateNote from './components/CreateNote';
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    NotesList,
    CreateNote,
  },
  setup() {
    let notes = ref([]);
    let noteTitle = ref('');
    let noteText = ref('');

    onMounted(() => {
      fetchNotes();
    });

    // This addNote function creates a post request that sends our note title and text to our cloud function
    // which will save it to Firestore
    function addNote() {
      axios.post('http://localhost:5001/notes-editor-c330b/us-central1/notes', {
        title: noteTitle.value,
        text: noteText.value,
      }).then(() => {
        // Get the updated notes once we've added a new one
        fetchNotes();
      });
    }

    // This fetchNotes function will get the notes from the get endpoint when called
    function fetchNotes() {
      axios
        .get('http://localhost:5001/notes-editor-c330b/us-central1/notes')
        .then((notesResult) => {
          notes.value = notesResult.data;
        });
    }

    function updateNoteText(text) {
      noteText.value = text;
    }

    function updateNoteTitle(title) {
      noteTitle.value = title;
    }
    
    return {
      notes,
      noteTitle,
      noteText,
      addNote,
      updateNoteText,
      updateNoteTitle,
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
}
</style>
