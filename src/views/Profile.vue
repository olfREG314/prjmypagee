<template>
  <div class="container">
    <section id="its-olfreg314">
      <div class="avatar">
        <div class="border-cmpt">
          <svg width="500" height="350">
            <defs>
              <clipPath id="myCircle">
                <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
              </clipPath>
            </defs>
            <image
              width="500"
              height="200"
              xlink:href="../assets/olfREG314.png"
              clip-path="url(#myCircle)"
            />
          </svg>
          <!-- <img src="../assets/olfREG314.png" alt="" srcset="" /> -->
        </div>
      </div>
      <div class="github-link">
        <i class="bi-github" role="img" aria-label="GitHub"></i>
      </div>
      <div class="tag name-tag"></div>
      <div class="about-me"></div>
    </section>
    <section>
      <div class="tag skills-tag"></div>
      <div class="list-skills"></div>
    </section>
    <section>
      <div class="tag projects-tag"></div>
      <div class="list-projects"></div>
    </section>
    <section>
      <div class="tag stuff-i-tried-tag"></div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: grid;
}
/* ===ICONS===== */
.bi-github {
  color: aquamarine;
  font-size: 1em;
}
</style>