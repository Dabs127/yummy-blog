import type { Post } from "~/types/Post";


export async function getAllPosts() {
    const { backendUrl } = useRuntimeConfig().public;
    try {
        const posts = await $fetch(`${backendUrl}posts`);
        return posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
};