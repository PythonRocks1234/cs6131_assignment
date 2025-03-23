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
              <th scope="col">Formula</th>
              <th scope="col">Source</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Sodium chloride</td>
              <td>Cl Na</td>
              <td>
                <a href="https://www.crystallography.net/cod/1000041.html">
                  https://www.crystallography.net/cod/1000041.html</a></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Tetralead(II) oxo hexacetate</td>
              <td>C12 H18 O13 Pb4</td>
              <td><a href="https://www.crystallography.net/cod/4348340.html">
                https://www.crystallography.net/cod/4348340.html</a></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Diopside</td>
              <td>Ca Mg O6 Si2</td>
              <td><a href="https://www.crystallography.net/cod/1000007.html">
                https://www.crystallography.net/cod/1000007.html</a></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Calcium titanate (perovskite)</td>
              <td>Ca O3 Ti</td>
              <td><a href="https://www.crystallography.net/cod/1000022.html">
                https://www.crystallography.net/cod/1000022.html</a></td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Barium sulfate (barite)</td>
              <td>Ba O4 S</td>
              <td><a href="https://www.crystallography.net/cod/1000037.html">
                https://www.crystallography.net/cod/1000037.html</a></td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Uranium(IV) iodide</td>
              <td>I4 U</td>
              <td>
                <a href="https://www.crystallography.net/cod/1008071.html">
                  https://www.crystallography.net/cod/1008071.html</a></td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Calcium tetraboride</td>
              <td>B4 Ca</td>
              <td><a href="https://www.crystallography.net/cod/1101152.html">
                https://www.crystallography.net/cod/1101152.html</a></td>
            </tr>
            <tr>
            <th scope="row">8</th>
            <td>Silver oxide</td>
            <td>Ag2 O</td>
            <td><a href="https://www.crystallography.net/cod/1010486.html">
              https://www.crystallography.net/cod/1010486.html</a></td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Ammonia</td>
              <td>H3 N</td>
              <td><a href="https://www.crystallography.net/cod/1010490.html">
                https://www.crystallography.net/cod/1010490.html</a></td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Diborane</td>
              <td>B2 H6</td>
              <td><a href="https://www.crystallography.net/cod/1010491.html">
                https://www.crystallography.net/cod/1010491.html</a></td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td>Silver arsenate</td>
              <td>Ag3 As O4</td>
              <td><a href="https://www.crystallography.net/cod/1010494.html">
                https://www.crystallography.net/cod/1010494.html</a></td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td>Lithium chloride hydrate</td>
              <td>Cl H2 Li O</td>
              <td><a href="https://www.crystallography.net/cod/1010495.html">
                https://www.crystallography.net/cod/1010495.html</a></td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>Mercury cyanide</td>
              <td>C2 Hg N2</td>
              <td><a href="https://www.crystallography.net/cod/1010499.html">
                https://www.crystallography.net/cod/1010499.html</a></td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td>Calcium duo-dicarbide</td>
              <td>C4 Ca2</td>
              <td><a href="https://www.crystallography.net/cod/1010500.html">
                https://www.crystallography.net/cod/1010500.html</a></td>
            </tr>
            <tr>
              <th scope="row">15</th>
              <td>Uranium diphosphate</td>
              <td>O7 P2 U</td>
              <td><a href="https://www.crystallography.net/cod/1010502.html">
                https://www.crystallography.net/cod/1010502.html</a></td>
            </tr>
            <tr>
              <th scope="row">16</th>
              <td>Calcium cyanamide</td>
              <td>C Ca N2</td>
              <td><a href="https://www.crystallography.net/cod/1010503.html">
                https://www.crystallography.net/cod/1010503.html</a></td>
            </tr>
            <tr>
              <th scope="row">17</th>
              <td>Antimony(V) oxide</td>
              <td>O5 Sb2</td>
              <td><a href="https://www.crystallography.net/cod/1010505.html">
                https://www.crystallography.net/cod/1010505.html</a></td>
            </tr>
            <tr>
              <th scope="row">18</th>
              <td>Silver chlorate</td>
              <td>Ag Cl O3</td>
              <td><a href="https://www.crystallography.net/cod/1010506.html">
                https://www.crystallography.net/cod/1010506.html</a></td>
            </tr>
            <tr>
              <th scope="row">19</th>
              <td>Silver bromate</td>
              <td>Ag Br O3</td>
              <td><a href="https://www.crystallography.net/cod/1010507.html">
                https://www.crystallography.net/cod/1010507.html</a></td>
            </tr>
            <tr>
              <th scope="row">20</th>
              <td>Niobium nitride (2/1)</td>
              <td>N Nb2</td>
              <td><a href="https://www.crystallography.net/cod/1010510.html">
                https://www.crystallography.net/cod/1010510.html</a></td>
            </tr>
            <tr>
              <th scope="row">21</th>
              <td>Aluminium nitride</td>
              <td>Al N</td>
              <td><a href="https://www.crystallography.net/cod/1010514.html">
                https://www.crystallography.net/cod/1010514.html</a></td>
            </tr>
            <tr>
              <th scope="row">22</th>
              <td>Dinitrogen tetraoxide</td>
              <td>N2 O4</td>
              <td><a href="https://www.crystallography.net/cod/1010516.html">
                https://www.crystallography.net/cod/1010516.html</a></td>
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