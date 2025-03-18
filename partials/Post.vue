<script setup>
import { defineProps } from "vue";

defineProps({
  post: Object,
});
</script>

<template>
  <div
    v-if="post"
    class="w-full mb-10 break-inside-avoid flex flex-col items-center"
  >
    <img :src="post.img" alt="Post Image" class="w-full object-cover" />
    <p class="my-5">{{ post.date }}</p>
    <h2 class="text-3xl text-center font-semibold mb-5">{{ post.title }}</h2>
    <p class="text-center mb-5 font-light">{{ post.synopsis }}</p>
    <NuxtLink :to="`/blog/${post.id}`" class="mt-auto text-detailsColor underline"
      >Read More</NuxtLink
    >
  </div>
</template>
