<script setup>
import { usePosts } from "~/store/usePosts";
const route = useRoute();
const { getPostById, getNextPostId, getPreviousPostId } = usePosts();
const post = computed(() => getPostById(route.params.id));
const nextPostId = computed(() => getNextPostId(route.params.id));
const previousPostId = computed(() => getPreviousPostId(route.params.id));
</script>

<template>
  <p v-if="!post">Cargando..</p>

  <main v-else class="w-full h-auto flex flex-col items-center">
    <p>{{ `${post.date} - Written by ${post.author}` }}</p>
    <h1 class="text-6xl font-bold mb-5 text-center">{{ post.title }}</h1>
    <div class="w-1/2 h-auto">
      <img :src="post.img" class="w-full object-contain" />
    </div>
    <p class="w-1/2 mt-10 text-4xl font-semibold">{{ post.synopsis }}</p>
    <p
      class="w-1/2 mt-10 text-lg"
      v-html="post.body.replaceAll('\n\n', '<br/><br/>')"
    ></p>
    <div class="w-full flex justify-between">
      <div class="mt-40 pl-20 w-auto text-end text-4xl font-semibold">
        <NuxtLink v-if="previousPostId" :to="`/blog/${previousPostId}`">
          <Icon name="mdi:arrow-left-thick" />
          Anterior Blog
        </NuxtLink>
      </div>
      <div class="mt-40 pr-20 w-auto text-end text-4xl font-semibold">
        <NuxtLink v-if="nextPostId" :to="`/blog/${nextPostId}`">
          Siguiente Blog
          <Icon name="mdi:arrow-right-thick" />
        </NuxtLink>
      </div>
    </div>
  </main>
</template>