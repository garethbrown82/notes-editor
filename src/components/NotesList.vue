<template>
  <h1>Notes</h1>
  <!-- Render the array of notes using v-for directive just like a for loop -->
  <div v-for="note in notes" v-bind:key="note.title">
    <h3>{{ note.title }}</h3>
    <p>{{ note.text }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  // Using the composition API to set our component variables
  setup() {
    let notes = ref([
      { title: 'Shopping List', text: 'Tomatoes, Milk, Salt' },
      { title: 'Book', text: 'Name of the wind' },
      { title: 'Note', text: 'This is a note' },
    ]);
    
    return {
      notes,
    };
  }
}
</script>

<style scoped>

</style>