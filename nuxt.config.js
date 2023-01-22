// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
      compressPublicAssets: true,
    },
    server: {
      host: '0.0.0.0',
    },
    axios: { baseURL: 'http://localhost:3000/server/' },
    css: ['~/assets/styles/style.less'],
    target:'server',
    ssr:true,
    build:{
        transpile:['gsap']
    },
    axios: {
      baseURL: '/'
    },
    serverMiddleware: [
      { path: "/server", handler: "~/api/contact.js" }
    ],
    app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
          title: 'Business Flava | Цифровые решения для Вашего бизнеса',
          meta: [
            { name: 'description', content: 'Реализуем высококлассные цифровые решения для Вашего бизнеса, опираясь на анлитику и индивидуальный подход' },
            { name:"msapplication-TileColor", content:"#ffffff"},
            { name:"msapplication-TileImage", content:"/ms-icon-144x144.png"},
            { name:"theme-color", content:"#ffffff"}
          ], 
          link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            { rel: "apple-touch-icon", sizes:"57x57", href:"/apple-icon-57x57.png"},
            { rel: "apple-touch-icon", sizes:"60x60", href:"/apple-icon-60x60.png"},
            { rel: "apple-touch-icon", sizes:"72x72", href:"/apple-icon-72x72.png"},
            { rel: "apple-touch-icon", sizes:"76x76", href:"/apple-icon-76x76.png"},
            { rel: "apple-touch-icon", sizes:"114x114", href:"/apple-icon-114x114.png"},
            { rel: "apple-touch-icon", sizes:"120x120", href:"/apple-icon-120x120.png"},
            { rel: "apple-touch-icon", sizes:"144x144", href:"/apple-icon-144x144.png"},
            { rel: "apple-touch-icon", sizes:"152x152", href:"/apple-icon-152x152.png"},
            { rel: "apple-touch-icon", sizes:"180x180", href:"/apple-icon-180x180.png"},
            { rel: "icon", sizes:"192x192", type: 'image/png', href:"/android-icon-192x192.png"},
            { rel:"manifest", href:"/manifest.json"},
          ],
        }
    },
    runtimeConfig: {
      MESSAGE_HOST: process.env.MESSAGE_HOST,
      MESSAGE_PORT: process.env.MESSAGE_PORT,
      MESSAGE_EMAIL: process.env.MESSAGE_EMAIL,
      MESSAGE_PASS: process.env.MESSAGE_PASS
    }
})
