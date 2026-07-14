<template>
  <section
    id="services"
    class="services-section">
    <div class="container-dental services-section__inner">
      <div class="services-section__header">
        <p class="eyebrow-dental">{{ services.eyebrow }}</p>
        <h2 class="heading-dental-lg">{{ services.heading }}</h2>
        <p class="lead-dental services-section__body">{{ services.body }}</p>
      </div>

      <div class="services-section__grid">
        <article
          v-for="card in services.cards"
          :key="card.title"
          class="services-section__card">
          <div class="services-section__card-header">
            <h3 class="heading-dental-md services-section__card-title">{{ card.title }}</h3>
          </div>
          <img
            :src="card.image"
            :alt="card.title"
            class="services-section__card-image"
            width="373"
            height="220" />
          <div class="services-section__card-body">
            <p class="body-dental services-section__card-text">{{ card.description }}</p>
            <div class="services-section__pills">
              <span
                v-for="pill in card.pills"
                :key="pill"
                class="pill-dental">
                {{ pill }}
                <img
                  src="/exports/FQzok.png"
                  alt=""
                  width="10"
                  height="10"
                  class="pill-dental__arrow"
                  aria-hidden="true" />
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { services } from '../../data/site'
</script>

<style scoped>
.services-section {
  padding: 60px 0 120px;
}

.services-section__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 65px;
}

.services-section__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  text-align: center;
  max-width: 776px;
}

.services-section__body {
  text-align: center;
}

.services-section__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
}

.services-section__card {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  margin-inline: auto;
  border-radius: 10px;
  background: #ffffff;
  overflow: hidden;
}

@media (min-width: 640px) {
  .services-section__card {
    max-width: 373px;
  }
}

@media (min-width: 900px) {
  .services-section__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    justify-content: stretch;
    gap: 20px;
  }

  .services-section__card {
    margin-inline: 0;
    max-width: none;
  }
}

@media (min-width: 1280px) {
  .services-section__grid {
    gap: 30px;
  }
}

.services-section__card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  background: #b1040e;
  border-radius: 10px 10px 0 0;
}

.services-section__card-title {
  color: #ffffff;
  text-align: center;
}

.services-section__card-image {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.services-section__card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px 20px 40px;
}

.services-section__card-text {
  text-align: center;
}

.services-section__pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: 334px;
}
</style>
