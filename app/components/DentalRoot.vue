<template>
  <div class="page-shell bg-beige min-h-dvh font-sans">
    <HeroSection />
    <FeaturedSection />
    <ServicesSection />
    <AboutSection />
    <TeamSection />
    <BrandSection />
    <CtaSection />
  </div>
</template>

<script lang="ts" setup>
/**
 * Layer root for future DevLeadHunter demo-host integration.
 * The playground renders the full one-page site via layout + index;
 * this root keeps a single entry point for later SiteContent wiring.
 */
import HeroSection from './sections/HeroSection.vue'
import FeaturedSection from './sections/FeaturedSection.vue'
import ServicesSection from './sections/ServicesSection.vue'
import AboutSection from './sections/AboutSection.vue'
import TeamSection from './sections/TeamSection.vue'
import BrandSection from './sections/BrandSection.vue'
import CtaSection from './sections/CtaSection.vue'

useHead({
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
