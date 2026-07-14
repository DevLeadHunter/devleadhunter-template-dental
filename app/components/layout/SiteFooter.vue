<template>
  <footer class="dental-footer">
    <div class="dental-footer__inner">
      <p class="dental-footer__copy">{{ site.copyright }}</p>
      <div
        class="dental-footer__social"
        aria-label="Social links">
        <a
          v-for="icon in socialIcons"
          :key="icon.label"
          href="#"
          class="dental-footer__social-link"
          :aria-label="icon.label">
          <img
            :src="icon.src"
            alt=""
            width="28"
            height="28"
            class="dental-footer__social-icon"
            aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { site } from '../../data/site'

const socialIcons = [
  { label: 'Facebook', src: '/exports/H9JZK.png' },
  { label: 'Twitter', src: '/exports/c52F3x.png' },
  { label: 'Instagram', src: '/exports/zPb6s.png' },
  { label: 'LinkedIn', src: '/exports/ToOF0.png' },
  { label: 'YouTube', src: '/exports/bS49m.png' },
]
</script>

<style scoped>
.dental-footer {
  background: #b1040e;
  width: 100%;
}

.dental-footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: none;
  margin-inline: auto;
  padding: 30px 16px;
  box-sizing: border-box;
}

@media (max-width: 639px) {
  .dental-footer__inner {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 16px;
    padding: 24px 16px;
  }

  .dental-footer__copy {
    font-size: 14px;
  }
}

.dental-footer__copy {
  margin: 0;
  color: #ffffff;
  font-family: 'Nunito', ui-sans-serif, system-ui, sans-serif;
  font-size: 16px;
  font-weight: 400;
}

.dental-footer__social {
  display: flex;
  align-items: center;
  gap: 20px;
}

.dental-footer__social-link {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  text-decoration: none;
  opacity: 0.95;
  transition: opacity 0.2s ease;
}

.dental-footer__social-icon {
  display: block;
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.dental-footer__social-link:hover {
  opacity: 0.75;
}

@media (min-width: 640px) {
  .dental-footer__inner {
    padding: 30px 24px;
  }

  .dental-footer__copy {
    font-size: 18px;
  }
}

@media (min-width: 1024px) {
  .dental-footer__inner {
    padding: 30px 40px;
  }
}

@media (min-width: 1440px) {
  .dental-footer__inner {
    padding: 30px 130px;
  }
}
</style>
