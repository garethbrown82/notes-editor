<template>
  <h1>Add note</h1>
  <input v-model="noteTitle" />
  <textarea v-model="noteText"></textarea>
  <!-- This button triggers the addNote function -->
  <button @click="addNote">Add note</button>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    let noteTitle = ref('');
    let noteText = ref('');

    // This addNote function creates a post request that sends our note title and text to our cloud function
    // which will save it to Firestore
    function addNote() {
      axios.post('http://localhost:5001/notes-editor-c330b/us-central1/notes', {
        title: noteTitle.value,
        text: noteText.value,
      });
    }

    return {
      noteTitle,
      noteText,
      addNote,
    }
  }
}
</script>

<style scoped>
  input, textarea, button {
    font-family: inherit;
    margin: 10px 0;
  }

  button {
    width: 25%;
    margin-bottom: 50px;
  }
</style>