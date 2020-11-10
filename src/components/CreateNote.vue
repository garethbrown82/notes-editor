<template>
  <h1>Add note</h1>
  <input
    v-bind:value="noteTitle"
    v-on:input="$emit('update-notetitle', $event.target.value)"
  />
  <textarea
    v-bind:value="noteText"
    v-on:input="$emit('update-notetext', $event.target.value)"
  />
  <!-- This button triggers the addNote function -->
  <button v-on:click="$emit('add-note')">Add note</button>
</template>

<script>
export default {
  props: {
    noteTitle: String,
    noteText: String,
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