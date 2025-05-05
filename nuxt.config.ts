import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({

    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },

    css: [
        '@/assets/fonts/plus-zakarta-sans.css',
        '@/assets/icons/iconly.css',
        '@/assets/styles/tailwind.css',
        '@/assets/styles/custom.css',
    ],

    app: {
        head: {
            title:"FoodScan",
            titleTemplate: "FoodScan :: %s",
            htmlAttrs: {
                dir: 'ltr',
                lang: 'en',
            },
        }
    },

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    modules: ['@nuxt/image', 'nuxt-swiper', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
    plugins:[
        '~/plugins/vue-awesome-paginate.js'
    ]
})