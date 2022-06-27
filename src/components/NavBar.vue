<template>
  <nav>
    <div class="nav-link">
      <ul>
        <li v-for="nav in navList" :key="nav" :class="nav.navClass">
          <button>
            <router-link :to="{ name: nav.navLink }">{{
              nav.navName
            }}</router-link>
            <div class="button-bar"></div>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
// =========================================================
<script>
export default {
  data() {
    return {
      navList: [
        { navName: "profile", navLink: "Profile", navClass: "profile" },
        { navName: "projects", navLink: "Projects", navClass: "projects" },
        { navName: "notes", navLink: "Notes", navClass: "notes" },
        { navName: "sayHi!", navLink: "SayHi", navClass: "sayhi" },
      ],
    };
  },
};
</script>
// =========================================================
<style scoped>
/* ========== UPDATE FOR REF. ============================ */
/* :root {
  --deepGrey: #545454;
  --nrmlGrey: #757575;
  --lightGrey: #cfcfcf;
} */

/* ================================================== */
nav {
  margin: 0px;
  padding: 0px;
  width: 100vw;
  min-height: 18px;
  border-bottom: 2px solid black;
  position: fixed;
  background-color: white;
}
.nav-link ul {
  display: grid;
  margin: 10px auto;
  padding: auto;
  grid-template-columns: repeat(12, minmax(auto, 150px));
  grid-template-areas: " . . . . . . . . profile projects notes sayhi";
}
.profile {
  grid-area: profile;
}
.projects {
  grid-area: projects;
}
.notes {
  grid-area: notes;
}
.sayhi {
  grid-area: sayhi;
}
.nav-link ul li {
  list-style-type: none;
  text-align: center;
  justify-content: center;
}
.nav-link ul li button {
  border: none;
  background-color: transparent;
  font-family: "Hubballi";
  font-size: 28px;
  justify-content: center;
  text-align: center;
}
.nav-link ul li button .button-bar {
  margin-top: 4px;
  max-width: 40px;
  border: 1px solid var(--deepGrey);
  border-radius: 10px;
  background-color: var(--deepGrey);
}
.nav-link ul li button a {
  color: var(--deepGrey);
  text-decoration: none;
}
.nav-link ul li button a {
}
</style>