<template>
  <section class="about-section">
    <div class="container-dental about-section__inner">
      <img
        src="/exports/VqwYC.png"
        alt=""
        class="about-section__squiggle"
        width="214"
        height="169"
        aria-hidden="true" />
      <div
        v-for="row in aboutRows"
        :key="row.eyebrow"
        class="about-section__row"
        :class="{ 'about-section__row--reverse': !row.imageFirst }">
        <div
          v-if="row.imageFirst"
          class="about-section__media">
          <div class="about-section__frame">
            <span
              class="about-section__frame-border"
              aria-hidden="true" />
            <img
              :src="row.image"
              :alt="row.heading"
              class="about-section__image"
              width="475"
              height="454" />
          </div>
        </div>

        <div class="about-section__content">
          <div class="about-section__text-block">
            <p class="eyebrow-dental">{{ row.eyebrow }}</p>
            <h2 class="heading-dental-lg about-section__heading">{{ row.heading }}</h2>
          </div>
          <p
            v-for="(para, pi) in row.paragraphs"
            :key="pi"
            class="body-dental about-section__para">
            {{ para }}
          </p>
          <a
            href="#"
            class="btn-dental btn-dental--outline about-section__cta"
            >{{ row.cta }}</a
          >
        </div>

        <div
          v-if="!row.imageFirst"
          class="about-section__media">
          <div class="about-section__frame">
            <span
              class="about-section__frame-border"
              aria-hidden="true" />
            <img
              :src="row.image"
              :alt="row.heading"
              class="about-section__image"
              width="475"
              height="454" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { aboutRows } from '../../data/site'
</script>

<style scoped>
.about-section {
  background: #ffffff;
  padding: 100px 0 120px;
}

.about-section__inner {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.about-section__squiggle {
  display: none;
  position: absolute;
  left: 50%;
  top: 48%;
  width: 180px;
  height: auto;
  transform: translate(-50%, -50%) rotate(-16deg);
  pointer-events: none;
  z-index: 2;
}

.about-section__row {
  display: grid;
  gap: 40px;
  align-items: center;
}

.about-section__content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 501px;
}

.about-section__text-block {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-section__heading {
  color: #000000;
}

.about-section__para {
  color: #000000;
}

.about-section__cta {
  align-self: flex-start;
}

@media (max-width: 639px) {
  .about-section__cta {
    align-self: stretch;
    text-align: center;
  }

  .about-section__content {
    align-items: stretch;
  }

  .about-section {
    padding: 64px 0 80px;
  }

  .about-section__inner {
    gap: 72px;
  }
}

.about-section__media {
  display: flex;
  justify-content: center;
}

.about-section__frame {
  position: relative;
  width: min(100%, 495px);
}

.about-section__frame-border {
  position: absolute;
  /* Slightly larger than image, lean left (counter-clockwise), above image */
  inset: 8% -2% -4% 0;
  border: 2px solid #b1040e;
  border-radius: 10px;
  transform: rotate(-5deg);
  pointer-events: none;
  z-index: 2;
}

.about-section__image {
  position: relative;
  z-index: 1;
  display: block;
  width: calc(100% - 40px);
  max-width: 475px;
  height: auto;
  aspect-ratio: 475 / 454;
  object-fit: cover;
  border-radius: 10px;
  margin: 19px 0 0 19px;
}

@media (min-width: 900px) {
  .about-section__inner {
    gap: 160px;
  }

  .about-section__squiggle {
    display: block;
  }

  .about-section__row {
    grid-template-columns: 1fr 1fr;
    gap: 135px;
  }

  .about-section__row--reverse .about-section__content {
    order: 1;
  }

  .about-section__row--reverse .about-section__media {
    order: 2;
  }
}
</style>
