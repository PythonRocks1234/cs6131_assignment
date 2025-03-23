<script setup lang="ts">

import Navbar from "../../components/navbar.vue";

</script>

<template>
  <div class="all_container">
    <div class="fullscreen">
      <div class="app">

        <navbar comp="references"></navbar>

        <header class="boxheader">
          <h1 class="space">References</h1>
        </header>

        <div class="cover">

          <div class="pad one">
            <p class="refboxtext card">
              Most data is taken from fictional TV show House M.D.<br>
            More data sources coming soon.
            </p>
          </div>

          <img class="right two"
               src="/src/assets/HouseLogo.png"
               alt="House MD TV show logo">

          <div class="four">
            <img src="/src/assets/noai.png"
               alt="No AI image" style="border-radius: 10px">
          </div>

          <p class="card refboxtext three">
            No Generative AI tools (such as ChatGPT) were used to complete this assignment.<br>
            Image modified from: <a href="https://no-ai-icon.com/">https://no-ai-icon.com/</a>
          </p>

          <p class="card refboxtext five right">Image credits:
            <a href="https://house.fandom.com/wiki/House,_M.D.">
              https://house.fandom.com/wiki/House,_M.D.
            </a>
            <a href="https://commons.wikimedia.org/wiki/File:SQLPage_logo.png">
              https://commons.wikimedia.org/wiki/File:SQLPage_logo.png
            </a>
            <span style="white-space: nowrap">
              Icon credits: <a href="https://icons.getbootstrap.com/">https://icons.getbootstrap.com/</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

@import "../../../src/style.css";

.all_container {
  background-size: 100vw 100vh;
  height: 100vh;
  width: 100vw;
  background-color: #edebe9;
  overflow-y: scroll;
}

.cover {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

.one {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two {
  grid-column: 3;
  grid-row: 1;
  padding-top: 30px;
}
.three {
  grid-column: 1;
  grid-row: 2;
  transform: translateX(25px);
}
.four {
  grid-column: 2;
  grid-row: 2;
  transform: translateX(20px);
}
.five {
  grid-column: 3;
  grid-row: 2;
}

</style>