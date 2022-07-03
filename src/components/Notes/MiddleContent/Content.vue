<template>
  <h1>content</h1>
  <input
    ref="inputFile"
    type="file"
    name="inputFile"
    id="inputFile"
    @change="handleFiles"
  />
  <div class="return-html-file">
    {{ returnedHTMLFile }}
  </div>
</template>

<script>
import { micromark } from "micromark";
// import { convert_mdTOhtml } from "./mdTOhtml.js";
import { ref } from "vue";
export default {
  setup() {
    let inputFile = ref(null);
    function handleFiles(event) {
      console.log(event.target.files);
      const files = event.target.files;
      // console.log(files[0].name);
      for (let file of files) console.log(file.name);
    }
    return { handleFiles };
  },
  data() {
    return {
      returnedHTMLFile: ``,
    };
  },
  mounted() {
    // convert_mdTOhtml();
    console.log("mounted");
    // if (existsSync(FILE)) {
    //   console.log("file exists");
    // }
  },
};
</script>

<style>
</style>