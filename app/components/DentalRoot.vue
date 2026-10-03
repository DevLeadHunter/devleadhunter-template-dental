<template>
  <div
    class="page-shell bg-dental-beige font-dental-sans min-h-dvh overflow-x-clip"
    :style="themeVars">
    <SiteHeader :page="page" />
    <main>
      <HeroSection
        v-bind="editableAttrs(props.content._editable?.hero)"
        :hero="page.hero" />
      <FeaturedSection
        v-bind="editableAttrs(props.content._editable?.gallery)"
        :featured="page.featured" />
      <ServicesSection
        v-bind="editableAttrs(props.content._editable?.services)"
        :services="page.services" />
      <AboutSection
        v-bind="editableAttrs(props.content._editable?.about)"
        :rows="page.aboutRows" />
      <TeamSection
        v-bind="editableAttrs(props.content._editable?.team)"
        :team="page.team" />
      <BrandSection
        v-if="page.brand.logos.length > 0"
        :brand="page.brand" />
      <CtaSection
        v-bind="editableAttrs(props.content._editable?.contact)"
        :cta="page.cta" />
    </main>
    <SiteFooter
      v-bind="editableAttrs(props.content._editable?.contact)"
      :page="page" />
  </div>
</template>

<script lang="ts" setup>
/**
 * Layer root for DevLeadHunter demo-host — receives flat `SiteContent` and renders
 * the Family Dental Care one-page template.
 */
import type { ComputedRef, PropType } from 'vue'
import type { SiteContent } from '../types/SiteContent'
import { editableAttrs } from '@devleadhunter/website-content'
import { buildDentalContent, type DentalPageContent } from '../types/dental'
import SiteHeader from './layout/SiteHeader.vue'
import SiteFooter from './layout/SiteFooter.vue'
import HeroSection from './sections/HeroSection.vue'
import FeaturedSection from './sections/FeaturedSection.vue'
import ServicesSection from './sections/ServicesSection.vue'
import AboutSection from './sections/AboutSection.vue'
import TeamSection from './sections/TeamSection.vue'
import BrandSection from './sections/BrandSection.vue'
import CtaSection from './sections/CtaSection.vue'

const props = defineProps({
  content: {
    type: Object as PropType<SiteContent>,
    required: true,
  },
})

const page: ComputedRef<DentalPageContent> = computed((): DentalPageContent =>
  buildDentalContent(props.content),
)

const themeVars = computed(() => ({
  '--color-brand': page.value.theme.primary,
  '--color-ink': page.value.theme.secondary,
  '--color-accent': page.value.theme.accent,
}))

/** Favicon prospect si logo enrichi, sinon asset template par défaut. */
const faviconHref = computed((): string => {
  const logo = typeof props.content.logo === 'string' ? props.content.logo.trim() : ''
  return logo.length > 0 ? logo : '/favicon.png'
})

useHead({
  title: () => page.value.businessName,
  link: [
    { key: 'dental-favicon', rel: 'icon', type: 'image/png', href: faviconHref },
    { key: 'dental-apple-touch-icon', rel: 'apple-touch-icon', href: faviconHref },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;600&family=Nunito:wght@400;600&display=swap',
    },
  ],
})
</script>
