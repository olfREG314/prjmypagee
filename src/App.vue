<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Hubballi&family=Redacted+Script&display=swap");

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
  --deepGrey: #545454;
  --nrmlGrey: #757575;
  --lightGrey: #cfcfcf;
}
</style>