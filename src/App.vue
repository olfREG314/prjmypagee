<template>
  <NavBar />
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;

  /* ===GLOBAL VAR===== */
}
body {
  margin: 0px;
  padding: 0px;
}

:root {
  --primaryGrey: #545454;
}
</style>
