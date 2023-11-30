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
      include: ['Menubar', 'Button', 'Avatar', 'Accordion', 'AccordionTab', 'Dialog', 'InputText','Card', 'Dropdown']
    }
  },
})