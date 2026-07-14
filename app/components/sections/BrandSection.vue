<template>
  <section class="brand-section">
    <div class="container-dental brand-section__inner">
      <p class="brand-section__heading">{{ brand.heading }}</p>
      <div class="brand-section__logos">
        <img
          v-for="(logo, i) in brand.logos"
          :key="i"
          :src="logo"
          alt=""
          class="brand-section__logo"
          width="150"
          height="75" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { brand } from '../../data/site'
</script>

<style scoped>
.brand-section {
  padding: 40px 0 60px;
}

.brand-section__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.brand-section__heading {
  margin: 0;
  color: #2e333e;
  font-family: 'Nunito', ui-sans-serif, system-ui, sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}

.brand-section__logos {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px 50px;
  width: 100%;
  max-width: 1180px;
}

.brand-section__logo {
  width: 100px;
  height: 50px;
  object-fit: contain;
  flex: 1 1 100px;
  max-width: 150px;
}

@media (min-width: 640px) {
  .brand-section__logo {
    width: 150px;
    height: 75px;
    flex: 0 0 auto;
  }
}

@media (max-width: 639px) {
  .brand-section__logos {
    justify-content: center;
  }
}
</style>
