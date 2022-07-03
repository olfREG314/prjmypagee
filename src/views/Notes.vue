<template>
  <h1>Notes</h1>
  <div class="grid-container">
    <section class="left">
      <h1>left</h1>
      <FileNav />
    </section>
    <section class="middle">
      <h1>middle</h1>
      <Content />
    </section>
    <section class="right">
      <h1>right</h1>
    </section>
  </div>
</template>

<script>
import FileNav from "@/components/Notes/FileNav.vue";
import Content from "@/components/Notes/MiddleContent/Content.vue";
export default {
  components: { FileNav, Content },
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 0.2fr 0.6fr 0.2fr;
  gap: 20px;
  margin: 0px 20px;
}
.grid-container .left {
  border-right: 1px solid var(--lightGrey);
  padding: 10px;
  padding-right: 20px;
}
.grid-container .right {
  border-left: 1px solid var(--lightGrey);
  padding: 10px;
  padding-left: 20px;
}
.grid-container .middle {
  padding: 10px;
}
</style>