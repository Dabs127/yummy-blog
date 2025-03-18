// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/fonts"],
  components: [
    {
      path: "~/partials",
    },
  ],
  icon: {
    serverBundle: {
      collections: ["uil", "mdi"], // <!--- this
    },
  },
  runtimeConfig: {
    public: {
      backendUrl:
        process.env.BACKEND_URL
    }
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primaryColor: "#3F7D58",
            secondaryColor: "#EFEFEF",
            detailsColor: "#EF9651",
            detailsColor2: "#EC5228"
          },
          keyframes: {
            slideDown: {
              "0%": { transform: "translateY(-100%)", opacity: "0", display: "none" },
              "1%": { display: "block" }, // Ensures visibility before animation starts
              "100%": { transform: "translateY(0)", opacity: "1", display: "block" },
            },
            slideUp: {
              "0%": { transform: "translateY(0)", opacity: "1", display: "block" },
              "99%": { opacity: "0" }, // Gradually fades out
              "100%": { transform: "translateY(-100%)", opacity: "0", display: "none" },
            },
          },
          animation: {
            slideDown: "slideDown 0.3s ease-out forwards",
            slideUp: "slideUp 0.3s ease-in forwards",
          },
        },
      },
    },
  },
});
