<template>
  <nav>
    <div class="nav-link">
      <ul>
        <li v-for="nav in navList" :key="nav">
          <button>
            <a :href="nav.navLink">{{ nav.navName }}</a>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { navName: "profile", navLink: "#" },
        { navName: "projects", navLink: "#" },
        { navName: "notes", navLink: "#" },
        { navName: "sayHi!", navLink: "#" },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Hubballi&display=swap");
nav {
  display: grid;
  position: sticky;
  width: 100vw;
  height: 55px;
  background-color: white;
  border-bottom: 2px solid #000;
  align-items: center;
  justify-content: center;
}
.nav-link ul {
  margin: 0px;
  padding: 0px;
}
.nav-link ul li {
  display: inline-block;
  margin: 0px;
  padding: 0px;
}

.nav-link ul li button {
  /* font-family: 'Fredericka the Great', cursive; */
  font-family: "Hubballi", cursive;
  background-color: white;
  padding: 5px;
  border: none;
  margin: 0px 18px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 23px;
  /* identical to box height */
  letter-spacing: 0.25em;
  /* tag */
  color: var(--primaryGrey);
  /* max-width: 133px; */
}
.nav-link ul li button a:link {
  color: var(--primary-grey);
  text-decoration-line: none;
  text-transform: uppercase;
}
.nav-link ul li button a:hover {
  text-decoration: underline;
  font-family: "Fredericka the Great", cursive;
}
.nav-link ul li button a:active {
}
</style>