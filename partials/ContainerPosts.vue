<script setup>
import { usePosts } from "~/store/usePosts";

const { posts, loading, error, fetchPosts } = usePosts();

onMounted(() => {
  fetchPosts();
});
</script>

<template>
  <section v-if="loading">Cargando...</section>

  <section
    v-else-if="posts.length > 0"
    class="w-auto mx-20 mt-10 mb-5 columns-3 gap-8"
  >
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </section>

  <section v-else>
    <p>No hay publicaciones disponibles.</p>
  </section>
</template>
