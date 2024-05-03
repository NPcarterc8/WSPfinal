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
  <div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{{ session.user && session.user.firstName }} {{ session.user && session.user.lastName }}</p>
        <p class="subtitle is-6">{{ session.user && session.user.email }}</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
      <a href="#">#responsive</a>
      <br />
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
</template>
