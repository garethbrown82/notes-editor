<template>
  <h1>Notes</h1>
  <!-- Render the array of notes using v-for directive just like a for loop -->
  <div v-for="note in notes" v-bind:key="note.title">
    <h3>{{ note.title }}</h3>
    <p>{{ note.text }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  // Using the composition API to set our component variables
  setup() {
    let notes = ref([]);

    onMounted(() => {
      axios
        .get('http://localhost:5001/notes-editor-c330b/us-central1/notes')
        .then((notesResult) => {
          notes.value = notesResult.data;
        });
    });
    
    return {
      notes,
    };
  }
}
</script>

<style scoped>

</style>