<template>
  <section class="featured-section">
    <div class="container-dental featured-section__inner">
      <div class="featured-section__header">
        <p class="eyebrow-dental featured-section__eyebrow">{{ featured.eyebrow }}</p>
        <h2 class="heading-dental-lg featured-section__heading">{{ featured.heading }}</h2>
        <p class="lead-dental featured-section__body">{{ featured.body }}</p>
      </div>

      <div class="featured-section__gallery">
        <img
          :src="featured.line"
          alt=""
          class="featured-section__line"
          aria-hidden="true" />
        <img
          v-for="(img, i) in featured.images"
          :key="i"
          :src="img.src"
          alt=""
          class="featured-section__photo"
          :class="`featured-section__photo--${i}`"
          width="271"
          height="400" />
      </div>

      <div class="featured-section__stats">
        <div
          v-for="stat in featured.stats"
          :key="stat.label"
          class="featured-section__stat">
          <div class="stat-number">
            <span
              class="stat-number__value"
              :class="stat.inkDark ? 'stat-number__value--dark' : 'stat-number__value--black'"
              >{{ stat.value }}</span
            >
            <span class="stat-number__plus">+</span>
          </div>
          <p class="stat-number__label">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { featured } from '../../data/site'
</script>

<style scoped>
.featured-section {
  padding: 100px 0 80px;
}

.featured-section__inner {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.featured-section__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
  max-width: 978px;
  margin-inline: auto;
}

@media (min-width: 900px) {
  .featured-section__header {
    gap: 30px;
  }
}

.featured-section__eyebrow {
  text-align: center;
}

.featured-section__heading {
  color: #000000;
}

.featured-section__body {
  color: #000000;
}

.featured-section__gallery {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  width: 100%;
}

.featured-section__line {
  display: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  width: 76%;
  max-width: 896px;
  height: auto;
  pointer-events: none;
  z-index: 0;
}

.featured-section__photo {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.featured-section__stats {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  justify-items: center;
  width: 100%;
  max-width: 1039px;
  margin-inline: auto;
}

.featured-section__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

@media (min-width: 640px) {
  .featured-section {
    padding: 110px 0 80px;
  }

  .featured-section__gallery {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  .featured-section__photo {
    height: 260px;
  }

  .featured-section__stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
}

@media (min-width: 1024px) {
  .featured-section {
    padding: 120px 0 90px;
  }

  .featured-section__inner {
    gap: 48px;
  }

  .featured-section__gallery {
    display: block;
    /* Pencil Thumbnail width 1179, height ~585 */
    height: clamp(420px, 44vw, 585px);
    max-width: 1179px;
    margin-inline: auto;
  }

  .featured-section__line {
    display: block;
  }

  .featured-section__photo {
    position: absolute;
    width: clamp(180px, 23%, 271px);
    height: auto;
    aspect-ratio: 271 / 400;
  }

  /* Pencil x positions / 1179 */
  .featured-section__photo--0 {
    left: 0%;
    top: 17%;
  }

  .featured-section__photo--1 {
    left: 25.7%;
    top: 5.3%;
  }

  .featured-section__photo--2 {
    left: 51.3%;
    top: 19.6%;
  }

  .featured-section__photo--3 {
    left: 77%;
    top: 5.3%;
  }
}
</style>
