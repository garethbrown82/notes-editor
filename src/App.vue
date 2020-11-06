<template>
  <div class="wrapper">
    <CreateNote />
    <NotesList />
  </div>
</template>

<script>
import NotesList from './components/NotesList.vue';
import CreateNote from './components/CreateNote';

export default {
  name: 'App',
  components: {
    NotesList,
    CreateNote,
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
