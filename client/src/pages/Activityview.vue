<script setup lang="ts">
import { getUsers, type User } from '@/model/users';
import { refSession, useLogin } from '../../viewModel/session';
import { ref } from 'vue';
const session = refSession();

const users = ref([] as User[])

getUsers()
    .then((data) => users.value = data.slice(0, 5))
    .catch((error) => console.error(error));
</script>

<template>
  <main class="hero is-primary is-large">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Activityview<div>
    {{ session.user && session.user.firstName }} {{ session.user && session.user.lastName }}
        </div></h1>
      </div>
    </div>
  </main>
</template>
