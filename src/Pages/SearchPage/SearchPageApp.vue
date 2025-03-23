<script lang="ts">

import {defineComponent} from "vue";
import Navbar from "../../components/navbar.vue";

export default defineComponent( {
  components: {Navbar},
  data() {
    return {
      showdisplay: false
    }
  },
  mounted() {
    // does not work for some reason
    // instead visibility checks are used
    // DOES NOT WORK WITH ZOOMING IN AND CLICKING THEN ZOOMING OUT!!
    //document.getElementById("checkclick").addEventListener(
    //    'click', () => {this.showdisplay = !this.showdisplay;})
    const items = document.querySelectorAll('.checkvisibility');
    let startcheck = 1;
    const intersectionCallback = (entries: any) => {
      for (const entry of entries) { // Loop over all elements that either enter or exit the view.
        startcheck += 1;
        if (startcheck < items.length) return;
        if (entry.isIntersecting) { // This is true when the element is in view.
          //console.log(entry.target.classList)
          if (entry.target.classList.contains("opening")) {
            this.toggle();
          }
        } else {
          if (entry.target.classList.contains("closing")) {
            this.toggle();
          }
        }
      }
    }
    const observer = new IntersectionObserver(intersectionCallback);
    for (const item of items) {
      observer.observe(item);
    }
  },
  methods: {
    clearall() {
      document.getElementById('mainsearch').value = "";
      document.getElementById('queryname').value = "";
      document.getElementById('queryformula').value = "";
      document.getElementById('queryeleminc').value = "";
      document.getElementById('queryelemexc').value = "";
    },
    searchquery() {
      this.$router.push("/browse/"+document.getElementById('mainsearch').value + " " +
        document.getElementById('queryname').value + " " +
        document.getElementById('queryformula').value + " " +
        document.getElementById('queryeleminc').value + " " +
        document.getElementById('queryelemexc').value);
    },
    toggle() {
      this.showdisplay = !this.showdisplay;
      return true;
    }
  }
})

</script>

<template>
  <div class="all_container">
    <div class="fullscreen">
      <div class="app">
        <navbar></navbar>

        <header class="boxheader">
          <h1 class="space">Search</h1>
        </header>

        <div class="pad">
          Place all information you know about the compound below.<br>
          More options coming soon.
          <br><br>

          <div>
            <input style="min-width: 500px; width: 500px" id="mainsearch" placeholder=""><br>
            <a data-toggle="collapse" href="#collapsehere" id="checkclick"
               role="button" aria-expanded="false" aria-controls="collapseExample">
               <!--style="transform: translateX(150px); position: relative; display: inline-block;">-->
              <u v-if="showdisplay">Show advanced search</u>
              <u v-else>Hide advanced search</u>
            </a>
          </div>

          <br>

          <div class="container collapse checkvisibility opening" id="collapsehere">
            <div>
              <hr>
              <div style="position:relative;top:-30px;">
                <p class="center centeronhr">Chemical</p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm"></div>
              <div class="col-sm rightalign">
                Chemical name
              </div>
              <div class="col-sm">
                <input id="queryname" placeholder="eg. sodium chloride">
              </div>
              <div class="col-sm"></div>
            </div>
            <div class="row">
              <div class="col-sm"></div>
              <div class="col-sm rightalign">
                Chemical formula (alphabetical order)
              </div>
              <div class="col-sm">
                <input id="queryformula" placeholder="eg. ClNa">
              </div>
              <div class="col-sm"></div>
            </div>
            <div>
              <hr>
              <div style="position:relative;top:-30px;">
                <p class="center centeronhr">Elemental</p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm"></div>
              <div class="col-sm rightalign">
                Elements included (separate by ,)
              </div>
              <div class="col-sm">
                <input id="queryeleminc" placeholder="eg. Cl,Na">
              </div>
              <div class="col-sm"></div>
            </div>
            <div class="row">
              <div class="col-sm"></div>
              <div class="col-sm rightalign">
                Elements excluded (separate by ,)
              </div>
              <div class="col-sm">
                <input id="queryelemexc" placeholder="eg. F,Li">
              </div>
              <div class="col-sm"></div>
            </div>
            <div class="row">
              <div class="col-sm checkvisibility closing">&zwnj;</div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
              <button class="btn btn-outline-success whitetext" @click="clearall()">Reset All</button>
            </div>
            <div class="col-sm">
              <button class="btn btn-outline-success whitetext" @click="searchquery()">Search</button>
            </div>
            <div class="col-sm"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

@import "../../../src/style.css";

.all_container{
  background-size: 100vw 100vh;
  height: 100vh;
  width: 100vw;
  background-color: #edebe9;
  overflow-y: scroll;
}

</style>