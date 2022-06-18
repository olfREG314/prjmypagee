<template>
  <div class="container">
    <section id="its-olfreg314">
      <div class="avatar">
        <!-- <div class="border-cmpt"> -->

        <!-- <img src="../assets/olfREG314.png" alt="" srcset="" /> -->
        <div class="avatar-img"></div>
        <!-- </div> -->
      </div>
      <div class="github-link">
        <i class="bi-github" role="img" aria-label="GitHub"></i>
      </div>
      <div class="tag name-tag">
        <div class="border-cmpt">
          <div class="name">olfREG314</div>
        </div>
      </div>
      <div class="about-me">
        <div class="border-cmpt">
          <div class="about-me-text disturbed-text">
            To pursue a career with a company having a global vision that
            encourages creativity and offers an opportunity to learn and develop
            both in professional and personal life . Problem solving is not only
            my main skill but also my passion, and my passion for it makes me
            focused for serving towards quality product and customer
            satisfaction .
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="tag skills-tag">
        <div class="border-cmpt"><div class="name">skills</div></div>
      </div>
      <div class="list-skills">
        <div class="border-cmpt">
          <div class="skills-container">
            <ul class="disturbed-text">
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="tag projects-tag">
        <div class="border-cmpt"><div class="name">projects</div></div>
      </div>
      <div class="list-projects"></div>
    </section>
    <section>
      <div class="tag stuff-i-tried-tag">
        <div class="border-cmpt"><div class="name">stuff i tried</div></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-rows: repeat(4, auto);
}
.disturbed-text {
  font-family: redacted script;
}
.border-cmpt {
  border: 1px dashed var(--lightGrey);
  margin: 15px;
  padding: 6px;
}
/* =================== */
/* === SECTION 1 ===== */
/* =================== */
#its-olfreg314 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    ". . . . . avatar avatar . github-link github-link . ."
    ". . . . . name-tag name-tag . . . . ."
    ". . . about-me about-me about-me about-me about-me about-me . . .";
  align-items: center;
  justify-items: center;
}
.avatar {
  grid-area: avatar;
  margin-top: 44px;
}
.avatar .avatar-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px dashed var(--lightGrey);
  background-image: url("../assets/olfREG314.png");
  background-size: cover;
}
.github-link {
  grid-area: github-link;
  margin-top: 44px;
}
.name-tag {
  grid-area: name-tag;
}
.about-me {
  grid-area: about-me;
}
/* ===ICONS CONFIG===== */
.bi-github {
  color: var(--lightGrey);
  font-size: 61px;
}
</style>