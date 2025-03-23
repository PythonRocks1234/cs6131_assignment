<script setup lang="ts">

import {Popover} from "bootstrap";
import {onMounted} from "vue";
import Navbar from "../../components/navbar.vue";
import {useRouter} from "vue-router";

onMounted(() => {
  document.querySelectorAll('[data-bs-toggle="popover"]')
      .forEach(popover => {
        new Popover(popover)
      })
  const items = document.querySelectorAll('.animitem');
  let startcheck = 1;
  const intersectionCallback = (entries: any) => {
    for (const entry of entries) { // Loop over all elements that either enter or exit the view.
      startcheck += 1;
      if (startcheck < items.length) return;
      if (entry.isIntersecting) { // This is true when the element is in view.
        //console.log(entry.target.classList)
        if (entry.target.classList.contains("needsfade")) {
          entry.target.classList.add('fadeanimate'); // Add a class.
        }
        if (entry.target.classList.contains("needsslide")) {
          entry.target.classList.add('slideanimate'); // Add a class.
        }
      }
    }
  }
  const observer = new IntersectionObserver(intersectionCallback);
  for (const item of items) {
    observer.observe(item);
  }
})
</script>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent( {
  methods: {
    learnmorescroll() {
      document.getElementById("moretext").scrollIntoView({ behavior: 'smooth' });
    },
    backtotop() {
      document.getElementById("dummy").scrollIntoView({ behavior: 'smooth' });
    },
    gotosearch() {
      this.$router.push("/search")
    }
  }
})
</script>

<template>
  <div class="fullscreen">
    <div id="dummy"></div>
    <div class="app">

    <navbar comp="home"></navbar>

    <!--
    Chemical formula database

    <br><br>

    <counter/>

    <br>

    <a id="popoverButton" class="text-success" href="javascript://" role="button" data-bs-toggle="popover"
       title="Custom popover" data-bs-content="This is a Bootstrap popover."
       data-trigger="hover">Example popover</a>

    <div class="userform"><userform/></div>
    -->

    <div class="maincontainer">
      <div class="background-filter"></div>
      <div class="verytop ovimage">
        <h3 v-if="useRouter().currentRoute.value.params['name']!=''">
          Hi, {{useRouter().currentRoute.value.params["name"]}}<br>
          &zwnj;</h3></div>
      <div class="pagetitle ovimage"><h1>Hospital Management System</h1></div>
      <div class="pagesubtitle ovimage"><h2>Your one stop portal to manage all your medical information.</h2></div>
      <div class="pagesub2title ovimage">
        <h3>
          <a class="forcelinkcolour" @click="gotosearch()"><u>Find Staff</u></a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a class="forcelinkcolour" @click="learnmorescroll()"><u>Learn More</u></a>
        </h3>
      </div>
    </div>

    <div id="moretext" class="moretext">
      <div class="card center spacing animitem needsfade">
        <h3>Many staff available</h3><br>
        Our database contains many doctors with all kinds of specialties, allowing you to take advantage of our comprehensive database.
      </div>
      <img src="/src/assets/dataanim.png" alt="scroll through data gif" class="datagif spacing">
      <div class="card center spacing animitem needsslide">
        <h3>Use of relational databases</h3><br>
        Relational databases help our system efficiently process all our data, ensuring your experience is also efficient.
      </div>
      <img src="/src/assets/SQLPage_logo.png" alt="database logo" class="datagif spacing">
      <div class="card center spacing animitem needsslide">
        <h3>Many search parameters</h3>
        Hospital staff are searchable by many parameters, allowing you to find a suitable doctor.
      </div>
      <img src="/src/assets/searchanim.png" alt="search anim gif" class="datagif spacing">
      <br><a class="forcelinkcolour" @click="backtotop()"><u>Scroll back to top</u></a>
    </div>

  </div>
  </div>
</template>


<style scoped>

@import "../../../src/style.css";

.fullscreen {
  overflow-y: scroll;
}

.background-filter {
  background-image: url("/src/assets/landingbg.jpg");
  -webkit-filter: blur(8px);
  filter: blur(8px);
  -ms-filter: blur(8px);
  height: 81vh;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  opacity: 50%;
}

.datagif {
  height: 75vh;
  position: relative;
}

.ovimage {
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  z-index: 100;
}

.verytop {
  transform: translateY(-70vh);
}

.pagetitle {
  transform: translateY(-60vh);
  color: #000;
  font-family: "Exo 2", sans-serif;
}

.pagesubtitle {
  transform: translateY(-50vh);
  color: #222;
  font-family: "Exo 2", sans-serif;
}

.pagesub2title {
  transform: translateY(-40vh);
}

html { position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: auto; }

.spacing {
  margin-bottom: 15px;
}

.fadeanimate {
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
}

@keyframes fadeIn {
  0% { opacity: 0.3; }
  100% { opacity: 1; }
}

@-webkit-keyframes fadeIn {
  0% { opacity: 0.3; }
  100% { opacity: 1; }
}

@-moz-keyframes fadeIn {
  0% { opacity: 0.3; }
  100% { opacity: 1; }
}

@-o-keyframes fadeIn {
  0% { opacity: 0.3; }
  100% { opacity: 1; }
}

.slideanimate {
  animation-duration: 1s;
  animation-name: slide-in;
}

@keyframes slide-in {
  from {
    translate: 100vw 0;
    scale: 150% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}


</style>
