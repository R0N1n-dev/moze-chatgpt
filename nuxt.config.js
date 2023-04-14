export default defineNuxtConfig({
  head: {
    title: "Moze-ChatGPT",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#ffffff" },
      { hid: "description", name: "description", content: "Moze ChatGPT" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  modules: ["nuxt-chatgpt", "@unocss/nuxt"],
  chatgpt: {
    apiKey: process.env.API_KEY,
  },

  components: true,
});
