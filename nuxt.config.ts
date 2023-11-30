// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue',
    '@pinia/nuxt'
  ],
  primevue: {
    usePrimeVue: true,
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    options: {
      ripple: true
    },
    components: {
      include: ['Menubar', 'Button', 'Avatar', 'Accordion', 'AccordionTab', 'Dialog', 'InputText','Card', 'Dropdown', 'RadioButton', 'InputNumber']
    },
  },
  css: [
    "primevue/resources/themes/lara-light-green/theme.css",
    "primeicons/primeicons.css"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})