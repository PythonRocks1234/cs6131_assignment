<script setup lang="ts">

import {useRouter} from "vue-router";
import Navbar from "../../components/navbar.vue";

</script>

<template>
  <div class="all_container">
    <div class="fullscreen">
      <div class="app">

        <navbar comp="browse"></navbar>

        <header class="boxheader">
          <h1 class="space">Browse</h1>
        </header>

        <div class="pad">
          You searched for: {{useRouter().currentRoute.value.params["query"]}}<br>&zwnj;
          <div class="wraptable">
          <table class="table table-sm table-hover rounded">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Shift begin</th>
              <th scope="col">Shift end</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Facility</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Dr Gregory House</td>
              <td>07:00</td>
              <td>21:00</td>
              <td>84475659</td>
              <td>Dialysis</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Dr James Wilson</td>
              <td>18:00</td>
              <td>08:00</td>
              <td>85606720</td>
              <td>Oncology</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Dr Robert Chase</td>
              <td>09:00</td>
              <td>18:30</td>
              <td>98612790</td>
              <td>Cardiology</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Dr Lisa Cuddy</td>
              <td>08:30</td>
              <td>17:30</td>
              <td>81289269</td>
              <td>Endocrinology</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Dr Allison Cameron</td>
              <td>07:30</td>
              <td>17:00</td>
              <td>82189191</td>
              <td>Immunology</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Dr Lawrence Kutner</td>
              <td>22:00</td>
              <td>08:00</td>
              <td>98127910</td>
              <td>Sports Medicine</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Marco Pelaez</td>
              <td>08:00</td>
              <td>16:00</td>
              <td>85478699</td>
              <td>Pharmacy</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Oscar Silva</td>
              <td>16:00</td>
              <td>00:00</td>
              <td>91278193</td>
              <td>Pharmacy</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Dr Lim Chong Sian</td>
              <td>08:00</td>
              <td>18:00</td>
              <td>64794478</td>
              <td>Oncology</td>
            </tr>
            </tbody>
          </table>
        </div>
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

</style>