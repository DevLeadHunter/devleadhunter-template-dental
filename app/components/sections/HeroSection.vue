<template>
  <section class="hero-section">
    <div class="hero-section__main container-dental">
      <div class="hero-section__content">
        <div class="hero-section__intro">
          <p class="eyebrow-dental">{{ hero.eyebrow }}</p>
          <h1 class="heading-dental-xl">{{ hero.heading }}</h1>
        </div>
        <p class="lead-dental">{{ hero.subheading }}</p>
        <div class="hero-section__actions">
          <a
            href="#book"
            class="btn-dental btn-dental--primary"
            >{{ hero.ctaPrimary }}</a
          >
          <a
            href="#services"
            class="btn-dental btn-dental--outline"
            >{{ hero.ctaSecondary }}</a
          >
        </div>
      </div>
      <span
        class="dental-brand-mask hero-section__squiggle"
        :style="maskStyle(hero.squiggle)"
        aria-hidden="true" />
      <div class="hero-section__media">
        <img
          :src="hero.image"
          alt="Professionnel dentaire avec un patient"
          class="hero-section__image"
          width="1058"
          height="717" />
      </div>
    </div>

    <div class="hero-section__features container-dental">
      <article
        v-for="feature in hero.features"
        :key="feature.title"
        class="hero-section__feature">
        <span
          class="dental-brand-mask hero-section__feature-icon"
          :style="maskStyle(feature.icon)"
          aria-hidden="true" />
        <div class="hero-section__feature-text">
          <h2 class="heading-dental-md hero-section__feature-title">{{ feature.title }}</h2>
          <p class="body-dental">{{ feature.text }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DentalPageContent } from '../../types/dental'

defineProps({
  hero: { type: Object as PropType<DentalPageContent['hero']>, required: true },
})

/**
 * Style mask for brand-tinted PNG assets.
 * @param src Asset URL
 */
function maskStyle(src: string): Record<string, string> {
  return {
    maskImage: `url(${src})`,
    WebkitMaskImage: `url(${src})`,
  }
}
</script>

<style scoped>
.hero-section {
  background: #ffffff;
  padding: 32px 0 48px;
  overflow: hidden;
}

.hero-section__main {
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
}

.hero-section__content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 570px;
  position: relative;
  z-index: 2;
}

.hero-section__intro {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (min-width: 900px) {
  .hero-section__intro {
    gap: 30px;
  }
}

.hero-section__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 30px;
}

.hero-section__squiggle {
  display: none;
  position: absolute;
  /* Pencil cc1mi: x≈528/1311 ≈40%, y≈505/674 ≈75% — bridge text → image edge */
  left: 40%;
  top: 72%;
  width: min(214px, 18%);
  height: min(169px, 14%);
  aspect-ratio: 214 / 169;
  pointer-events: none;
  z-index: 4;
}

.hero-section__media {
  position: relative;
  width: 100%;
  border-radius: 0;
  z-index: 1;
}

.hero-section__image {
  display: block;
  width: 100%;
  max-width: 560px;
  height: auto;
  aspect-ratio: 1058 / 717;
  object-fit: cover;
  object-position: center top;
  margin-inline: auto;
}

.hero-section__features {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 48px;
  width: 100%;
}

.hero-section__feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-inline: 12px;
  text-align: center;
}

.hero-section__feature-icon {
  width: 64px;
  height: 64px;
}

.hero-section__feature-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero-section__feature-title {
  text-align: center;
}

@media (min-width: 640px) {
  .hero-section {
    padding: 48px 0 64px;
  }

  .hero-section__features {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 56px;
  }

  .hero-section__feature {
    padding-inline: 16px;
    gap: 30px;
  }

  .hero-section__feature-text {
    gap: 20px;
  }
}

@media (min-width: 900px) {
  .hero-section {
    padding: 60px 0 72px;
  }

  .hero-section__main {
    display: grid;
    grid-template-columns: minmax(0, 570px) minmax(0, 1fr);
    gap: 40px;
    align-items: start;
  }

  .hero-section__content {
    gap: 30px;
    padding-top: 80px;
  }

  .hero-section__image {
    max-width: none;
    width: 100%;
    margin-inline: 0;
    /* Crop like Pencil: large photo sitting on the right */
    min-height: 520px;
    object-fit: cover;
  }

  .hero-section__squiggle {
    display: block;
  }

  .hero-section__features {
    gap: 31px;
    margin-top: 72px;
    width: 100%;
    max-width: none;
  }
}

@media (min-width: 1280px) {
  .hero-section {
    padding-bottom: 80px;
  }

  .hero-section__content {
    padding-top: 100px;
  }

  .hero-section__image {
    min-height: 600px;
  }

  .hero-section__features {
    margin-top: 80px;
  }
}
</style>
