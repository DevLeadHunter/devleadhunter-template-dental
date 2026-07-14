<template>
  <div class="page-shell">
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
import HeroSection from '../../../app/components/sections/HeroSection.vue'
import FeaturedSection from '../../../app/components/sections/FeaturedSection.vue'
import ServicesSection from '../../../app/components/sections/ServicesSection.vue'
import AboutSection from '../../../app/components/sections/AboutSection.vue'
import TeamSection from '../../../app/components/sections/TeamSection.vue'
import BrandSection from '../../../app/components/sections/BrandSection.vue'
import CtaSection from '../../../app/components/sections/CtaSection.vue'

useHead({ title: 'Home' })
</script>
