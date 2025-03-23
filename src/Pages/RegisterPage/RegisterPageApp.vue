<script lang="ts">

import {defineComponent} from "vue";
import Navbar from "../../components/navbar.vue";

export default defineComponent( {
  components: {Navbar},
  methods: {
    goback() {
      this.$router.back()
      this.$router.back()
    },
    gologin() {
      this.$router.push("/login")
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
          <h1 class="space">Sign Up</h1>
        </header>

        <div class="pad">
          <div class="container">

            <div class="zero" style="display: inline">
              Get started with the latest chemical formula database!<br><br></div>
            <img class="one" src="/src/assets/hospital.jpg" alt="hospital software">
              <div class="three">
                <div class="row">
                  <div class="col-sm">
                    Username
                  </div>
                  <div class="col-sm">
                    <input id="user" placeholder="">
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    Password
                  </div>
                  <div class="col-sm">
                    <input id="pass" type="password">
                  </div>
                </div>
              </div>
              <div class="five">
                <a class="forcelinkcolour fullcenter" @click="gologin()"><u>Sign in instead</u></a>
              </div>
              <div class="six">
                <button class="btn btn-outline-success whitetext" @click="goback()">Register</button>
              </div>
              <div class="seven">
                <div class="redbox">If you enter a bad password, it will display error here<br>this dialog will not be visible in final version<br>unless bad password is entered</div>
              </div>
            <!-- padding classes -->
            <div class="eight">
              <br><br><br><br><br><br>
            </div>
            <div class="nine">
            </div>
            <div class="ten">
            </div>
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

.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  grid-auto-rows: minmax(100px, auto);
}

.zero {
  grid-column: 3 / 5;
  grid-row: 1;
}
.one {
  grid-column: 1;
  grid-row: 1 / 6;
}
.three {
  grid-column: 3 / 5;
  grid-row: 2;
}
.five {
  grid-column: 3;
  grid-row: 4;
}
.six {
  grid-column: 4;
  grid-row: 4;
}
.seven {
  grid-column: 3 / 5;
  grid-row: 3;
}
.eight {
  grid-column: 3 / 5;
  grid-row: 5;
}
.nine {
  grid-column: 2;
  grid-row: 1 / 6;
}
.ten {
  grid-column: 5;
  grid-row: 1 / 6;
}

</style>