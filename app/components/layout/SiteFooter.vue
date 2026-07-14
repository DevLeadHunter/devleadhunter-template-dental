<template>
  <footer class="dental-footer">
    <div class="dental-footer__inner">
      <p class="dental-footer__copy">{{ site.copyright }}</p>
      <div
        class="dental-footer__social"
        aria-label="Social links">
        <a
          v-for="(icon, i) in socialIcons"
          :key="i"
          href="#"
          class="dental-footer__social-link"
          :aria-label="icon.label">
          <span v-html="icon.svg" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { site } from '../../data/site'

const socialIcons = [
  {
    label: 'Facebook',
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" fill="#ffffff"/></svg>`,
  },
  {
    label: 'Twitter',
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 5.8c-.7.3-1.5.5-2.3.6A4 4 0 0 0 21.4 4a8 8 0 0 1-2.5 1 4 4 0 0 0-6.8 3.6A11.3 11.3 0 0 1 3 4.9a4 4 0 0 0 1.2 5.3 4 4 0 0 1-1.8-.5v.1a4 4 0 0 0 3.2 3.9 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.6a11.3 11.3 0 0 0 6.1 1.8c7.4 0 11.4-6.1 11.4-11.4v-.5A8 8 0 0 0 22 5.8z" fill="#ffffff"/></svg>`,
  },
  {
    label: 'Instagram',
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2zm6.2-1.9a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM12 9.8A2.2 2.2 0 1 1 9.8 12 2.2 2.2 0 0 1 12 9.8z" fill="#ffffff"/></svg>`,
  },
  {
    label: 'LinkedIn',
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6.9 8.7H3.7V20h3.2V8.7zM5.3 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20 13.4c0-2.8-1.5-4.1-3.5-4.1-1.6 0-2.3.9-2.7 1.5v-1.3h-3.1c0 .4.1 2.6.1 5.5H13V13c0-.5 0-1 .2-1.4.4-.9 1.2-1.8 2.6-1.8 1.8 0 2.5 1.4 2.5 3.4V20h3.2v-5.4z" fill="#ffffff"/></svg>`,
  },
]
</script>

<style scoped>
.dental-footer {
  background: #b1040e;
}

.dental-footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  max-width: 1440px;
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
  gap: 16px;
}

.dental-footer__social-link {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  text-decoration: none;
  opacity: 0.95;
  transition: opacity 0.2s ease;
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
    padding: 30px 130px;
  }
}

@media (min-width: 1600px) {
  .dental-footer__inner {
    max-width: 1600px;
    padding: 30px 100px;
  }
}

@media (min-width: 1920px) {
  .dental-footer__inner {
    max-width: 1680px;
    padding: 32px 120px;
  }
}
</style>
