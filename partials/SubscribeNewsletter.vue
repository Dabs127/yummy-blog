<script setup>
const formData = reactive({
  email: "",
});

const isSending = ref(false);

async function addContact() {
  isSending.value = true;

  await $fetch("/api/addcontact", {
    method: "POST",
    body: formData,
  });

  isSending.value = false;
}
</script>

<template>
  <section
    class="bg-secondaryColor flex flex-col justify-center items-center p-40"
  >
    <h2 class="text-4xl text-detailsColor font-semibold">
      Subscribe to our newsletter.
    </h2>
    <p class="text-detailsColor mt-20 mb-10">
      Sign up with your email address to receive news and updates.
    </p>
    <form @submit.prevent="addContact">
      <input
        v-model="formData.email"
        type="text"
        placeholder="Email Address"
        class="border text-black p-5 focus:ring-4 focus:ring-detailsColor focus:ring-opacity-80 focus:outline-none"
      />
      <button
        class="flex mt-5 ml-10 border-2 border-detailsColor text-detailsColor font-semibold py-5 px-9 transition-colors duration-300 ease-in-out hover:bg-detailsColor hover:text-white"
        :disabled="isSending"
        >
        <svg
          v-if="isSending"
          class="mr-3 size-5 animate-spin"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Sign Up
      </button>
    </form>
  </section>
</template>
