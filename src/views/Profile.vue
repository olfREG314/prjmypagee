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
      <div class="tag name-tag">
        <div class="border-cmpt">
          <div class="name">olfREG314</div>
        </div>
      </div>
      <div class="about-me">
        <div class="border-cmpt">
          <div class="about-me-text">
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
.about-me-text {
  font-family: redacted script;
}
/* ===ICONS CONFIG===== */
.bi-github {
  color: var(--lightGrey);
  font-size: 61px;
}
</style>