<template>
  <header class="dental-header">
    <div class="dental-header__inner">
      <a
        href="#"
        class="dental-header__brand"
        :aria-label="`${page.businessName} — accueil`">
        <span
          class="dental-brand-mask dental-header__logo"
          :style="maskStyle('/exports/q1xDL.png')"
          aria-hidden="true" />
        <span class="dental-header__wordmark">
          <span class="dental-header__name">{{ page.businessName }}</span>
          <span class="dental-header__tagline">{{ page.tagline }}</span>
        </span>
      </a>

      <a
        class="dental-header__phone-mobile"
        :href="`tel:${page.phone.replace(/\s/g, '')}`">
        <span
          class="dental-brand-mask dental-header__phone-icon"
          :style="maskStyle('/exports/VfJQY.png')"
          aria-hidden="true" />
        {{ page.phoneDisplay }}
      </a>

      <div class="dental-header__contacts">
        <div
          v-for="item in contactItems"
          :key="item.label"
          class="dental-header__contact">
          <span
            class="dental-brand-mask dental-header__icon"
            :style="maskStyle(item.icon)"
            aria-hidden="true" />
          <span class="dental-header__contact-text">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { DentalPageContent } from '../../types/dental'

const props = defineProps({
  page: { type: Object as PropType<DentalPageContent>, required: true },
})

const contactItems = computed(() => [
  {
    label: props.page.address,
    icon: '/exports/e1KB3.png',
  },
  {
    label: props.page.hours,
    icon: '/exports/r1VdXw.png',
  },
  {
    label: props.page.phoneDisplay,
    icon: '/exports/VfJQY.png',
  },
])

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
.dental-header {
  background: #ffffff;
  box-shadow: 0 4px 35px rgb(0 0 0 / 15%);
}

.dental-header__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  max-width: none;
  margin-inline: auto;
  padding: 25px 16px;
  box-sizing: border-box;
}

.dental-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  text-decoration: none;
  color: inherit;
  min-width: 0;
}

.dental-header__logo {
  width: 36px;
  height: 42px;
}

.dental-header__wordmark {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.dental-header__name {
  color: var(--color-ink, #2e333e);
  font-family: 'El Messiri', Georgia, serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.1;
}

.dental-header__tagline {
  color: var(--color-brand, #b1040e);
  font-family: 'Nunito', ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.7px;
}

.dental-header__contacts {
  display: none;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: flex-end;
  min-width: 0;
}

.dental-header__phone-mobile {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  color: #000000;
  font-family: 'Nunito', ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.3px;
}

.dental-header__phone-icon {
  width: 16px;
  height: 16px;
}

.dental-header__contact {
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: none;
  min-width: 0;
}

.dental-header__icon {
  width: 18px;
  height: 18px;
}

.dental-header__contact-text {
  color: #000000;
  font-family: 'Nunito', ui-sans-serif, system-ui, sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.7px;
  line-height: 1.35;
  white-space: nowrap;
}

@media (min-width: 640px) {
  .dental-header__inner {
    padding: 25px 24px;
  }

  .dental-header__name {
    font-size: 24px;
  }
}

@media (min-width: 1024px) {
  .dental-header__inner {
    padding: 25px 40px;
  }

  .dental-header__phone-mobile {
    display: none;
  }

  .dental-header__contacts {
    display: flex;
    gap: 28px;
  }

  .dental-header__contact-text {
    font-size: 14px;
  }
}

@media (min-width: 1280px) {
  .dental-header__inner {
    padding: 25px 60px;
  }

  .dental-header__contacts {
    gap: 40px;
  }
}

@media (min-width: 1440px) {
  .dental-header__inner {
    padding: 25px 130px;
  }
}
</style>
