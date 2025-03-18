import { type Post } from "~/types/Post";
import { getAllPosts } from "~/actions/posts/getAllPosts";

export const usePosts = () => {
  // Estado reactivo que almacena los posts
  const posts = useState<Post[]>("posts", () => []);
  const loading = useState<boolean>("loadingPosts", () => false);
  const error = useState<string | null>("errorPosts", () => null);
  const actualPost = useState<number>("actualPost", () => -1);

  const fetchPosts = async () => {
    if (posts.value.length > 0) return; // ✅ Evita recargar si ya hay datos
    loading.value = true;
    try {
      posts.value = (await getAllPosts()) as Post[];
    } catch (err) {
      error.value = err as string;
    } finally {
      loading.value = false;
    }
  };

  const getPostById = (id: number) => {
    const index = posts.value.findIndex((el) => el.id === id);
    actualPost.value = index;
    const post = posts.value[index];
    // console.log(post)
    return post;
  };

  const getNextPostId = (id: number) => {
    const index = posts.value.findIndex((el) => el.id === id);
    return index !== -1 && index < posts.value.length - 1
      ? posts.value[index + 1].id
      : null;
  };

  const getPreviousPostId = (id: number) => {
    const index = posts.value.findIndex((el) => el.id === id);
    return index !== -1 && index > 0 ? posts.value[index - 1].id : null;
  };

  // Llamar fetchPosts automáticamente si no hay posts
  if (!posts.value.length) {
    fetchPosts();
  }

  return {
    posts,
    loading,
    error,
    actualPost,
    fetchPosts,
    getPostById,
    getNextPostId,
    getPreviousPostId,
  };
};
