
<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import { refSession } from '../viewModel/session';

const session = refSession();

</script>

<template>
  <NavBar />
  <div class="container">
    <router-view />
  </div>

</template>



