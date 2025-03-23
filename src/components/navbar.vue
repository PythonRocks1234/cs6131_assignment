<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light transparent fullwidth">
      <router-link class="navbar-brand nav-link-noline moveup2 forcelinkcolour" to="/">
        <img src="/src/assets/favicon.png" alt="logo" style="height: 5vh"> HMS
      </router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link forcelinkcolour" to="/">
              <span v-if="comp=='home'"><b>Home</b><span class="sr-only">current</span></span>
              <span v-else>Home</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link forcelinkcolour" to="/browse">
              <span v-if="comp=='browse'"><b>Browse</b><span class="sr-only">current</span></span>
              <span v-else>Browse</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link forcelinkcolour" to="/references">
              <span v-if="comp=='references'"><b>References</b><span class="sr-only">current</span></span>
              <span v-else>References</span>
            </router-link>
          </li>
          <!--
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
          -->
        </ul>

        <form class="form-inline form-right">
          <router-link to="/search">
            <button class="btn btn-outline-success my-2 my-sm-0 oneline" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 20 20">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg> Search</button>
          </router-link>
          <router-link to="/login">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
              </svg> Login</button>
          </router-link>
        </form>
      </div>
    </nav>

    <hr style="background-color: gray; height: 1px; border: 0 gray; opacity: 100%">
  </div>
</template>

<script lang="ts">
import {useRouter} from "vue-router";

export default {
  name: "navbar",
  props: {
    comp: String
  },
  methods: {
    gotosearch() {
      useRouter().push("/search")
    }
  }
}
</script>

<style scoped>

@import "../../src/style.css";

</style>