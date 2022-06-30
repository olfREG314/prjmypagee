<template>
  <aside class="fileNav-container">
    <div class="content-list" v-for="file in content" :key="file">
      <ul>
        <li>{{ file.fileName }}</li>
      </ul>
    </div>
  </aside>
</template>

<script>
// import { onMounted } from '@vue/runtime-core'
export default {
  data() {
    return {
      content: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/content")
      .then((res) => res.json())
      .then((data) => {
        this.content = data;
        console.log(data);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style>
ul li {
  list-style: none;
}
</style>