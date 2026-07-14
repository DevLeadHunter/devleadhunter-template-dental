<template>
  <div class="site-root">
    <SiteHeader />
    <main class="site-main">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script lang="ts" setup>
import SiteHeader from '../../../app/components/layout/SiteHeader.vue'
import SiteFooter from '../../../app/components/layout/SiteFooter.vue'

useHead({
  titleTemplate: (title?: string) =>
    title ? `${title} | Family Dental Care` : 'Family Dental Care',
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;600&family=Nunito:wght@400;600&display=swap',
    },
  ],
})
</script>

<style>
html {
  height: auto;
  overflow-x: clip;
}

body,
#__nuxt {
  height: auto;
  min-height: 100%;
  margin: 0;
  overflow-x: clip;
}

.site-root {
  position: relative;
  min-height: 100vh;
  background: #f9f7f4;
  overflow-x: clip;
  max-width: 100vw;
}

.site-main {
  position: relative;
  overflow-x: clip;
}
</style>
