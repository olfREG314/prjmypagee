/** @format */

import { createRouter, createWebHistory } from "vue-router";
import Profile from "../views/Profile.vue";
import Projects from "../views/Projects.vue";
import Notes from "../views/Notes.vue";
import SayHi from "../views/SayHi.vue";
const routes = [
  {
    path: "/",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/notes",
    name: "Notes",
    component: Notes,
  },
  {
    path: "/sayhi",
    name: "SayHi",
    component: SayHi,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
