<script setup lang="ts">
const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
});

const isSending = ref(false);

async function sendEmail() {
  isSending.value = true;

  await $fetch("/api/send", {
    method: "POST",
    body: formData,
  });

  isSending.value = false;
  // alert("si entro");
}
</script>

<template>
  <main
    class="w-full h-[calc(100vh-20rem)] max-h-screen flex justify-center items-center pt-20 gap-20"
  >
    <div class="w-1/2 h-1/2 px-10 pb-10 max-w-3xl self-start">
      <h1 class="text-4xl font-semibold">We'd love to hear from you.</h1>
      <p class="my-10 text-xl text-balance">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo.
      </p>
      <p class="font-semibold text-2xl">email@example.com</p>
      <p class="font-semibold text-2xl">(555) 555-5555</p>
    </div>
    <form @submit.prevent="sendEmail" class="w-1/2 max-w-3xl self-start">
      <p
        class="after:ml-2 after:text-gray-500 after:content-['(required)'] mb-5"
      >
        Name
      </p>
      <div class="flex gap-4 mb-5">
        <div class="flex flex-col w-1/2">
          <label for="firstName">First Name</label>
          <input
            v-model="formData.firstName"
            type="text"
            name="firstName"
            id="firstName"
            class="p-4 border-2 text-black border-gray-300 focus:ring-4 focus:ring-detailsColor focus:ring-opacity-80 focus:outline-none"
            required
          />
        </div>
        <div class="flex flex-col w-1/2">
          <label for="lastName">Last Name</label>
          <input
            v-model="formData.lastName"
            type="text"
            name="lastName"
            id="lastName"
            class="p-4 border-2 text-black border-gray-300 focus:ring-4 focus:ring-detailsColor focus:ring-opacity-80 focus:outline-none"
            required
          />
        </div>
      </div>
      <div class="flex flex-col mb-5">
        <label
          for="email"
          class="after:ml-2 after:text-gray-500 after:content-['(required)']"
          >Email</label
        >
        <input
          v-model="formData.email"
          type="email"
          name="email"
          id="email"
          class="p-4 border-2 text-black border-gray-300 focus:ring-4 focus:ring-detailsColor focus:ring-opacity-80 focus:outline-none"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          for="message"
          class="after:ml-2 after:text-gray-500 after:content-['(required)']"
          >Message</label
        >
        <textarea
          v-model="formData.message"
          name="message"
          id="message"
          rows="5"
          class="border-2 text-black border-gray-300 focus:ring-4 focus:ring-detailsColor focus:ring-opacity-80 focus:outline-none"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="flex mt-5 border-2 border-detailsColor text-detailsColor font-semibold py-5 px-9 transition-colors duration-300 ease-in-out hover:bg-detailsColor hover:text-white"
        :class="`${isSending ? '' : ''}`"
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
        Send
      </button>
    </form>
  </main>
</template>
