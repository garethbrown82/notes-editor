<template>
  <h1>Notes</h1>
  <!-- Render the array of notes using v-for directive just like a for loop -->
  <div v-for="note in notes" v-bind:key="note.title">
    <h3>{{ note.title }}</h3>
    <p>{{ note.text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Store the notes using the components local data (component state)
      notes: [
        { title: 'Shopping List', text: 'Tomatoes, Milk, Salt' },
        { title: 'Book', text: 'Name of the wind' },
        { title: 'Note', text: 'This is a note' },
      ],
    }
  }
}
</script>

<style scoped>

</style>