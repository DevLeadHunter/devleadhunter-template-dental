<template>
  <section
    id="book"
    class="cta-section">
    <div class="container-dental cta-section__inner">
      <span
        class="dental-brand-mask cta-section__squiggle"
        :style="maskStyle('/exports/knOCG.png')"
        aria-hidden="true" />

      <div class="cta-section__intro">
        <div class="cta-section__header">
          <h2 class="heading-dental-xl cta-section__heading">{{ cta.heading }}</h2>
          <p class="lead-dental cta-section__sub">{{ cta.subheading }}</p>
        </div>

        <div class="cta-section__contacts">
          <div
            v-for="contact in cta.contacts"
            :key="contact.title"
            class="cta-section__contact">
            <span
              class="dental-brand-mask cta-section__contact-icon"
              :style="maskStyle(contact.icon)"
              aria-hidden="true" />
            <div class="cta-section__contact-text">
              <h3 class="heading-dental-md cta-section__contact-title">{{ contact.title }}</h3>
              <p class="body-dental cta-section__contact-desc">{{ contact.description }}</p>
              <a
                :href="contact.href"
                class="cta-section__contact-value"
                >{{ contact.value }}</a
              >
            </div>
          </div>
        </div>
      </div>

      <form
        class="cta-section__form"
        @submit.prevent="onSubmit">
        <div class="cta-section__form-grid">
          <label class="cta-section__field">
            <span class="cta-section__label">{{ cta.form.nameLabel }}</span>
            <input
              v-model="form.name"
              type="text"
              name="name"
              autocomplete="name"
              required
              :placeholder="cta.form.namePlaceholder"
              class="cta-section__input" />
          </label>
          <label class="cta-section__field">
            <span class="cta-section__label">{{ cta.form.phoneLabel }}</span>
            <input
              v-model="form.phone"
              type="tel"
              name="phone"
              autocomplete="tel"
              :placeholder="cta.form.phonePlaceholder"
              class="cta-section__input" />
          </label>
          <label class="cta-section__field">
            <span class="cta-section__label">{{ cta.form.emailLabel }}</span>
            <input
              v-model="form.email"
              type="email"
              name="email"
              autocomplete="email"
              required
              :placeholder="cta.form.emailPlaceholder"
              class="cta-section__input" />
          </label>
          <label class="cta-section__field">
            <span class="cta-section__label">{{ cta.form.serviceLabel }}</span>
            <input
              v-model="form.service"
              type="text"
              name="service"
              :placeholder="cta.form.servicePlaceholder"
              class="cta-section__input" />
          </label>
          <label class="cta-section__field cta-section__field--message">
            <span class="cta-section__label">{{ cta.form.messageLabel }}</span>
            <textarea
              v-model="form.message"
              name="message"
              required
              :placeholder="cta.form.messagePlaceholder"
              class="cta-section__textarea"
              rows="4" />
          </label>
          <button
            type="submit"
            class="btn-dental btn-dental--primary cta-section__submit">
            {{ cta.form.submit }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { PropType } from 'vue'
import type { DentalPageContent } from '../../types/dental'

const props = defineProps({
  cta: { type: Object as PropType<DentalPageContent['cta']>, required: true },
})

const form = reactive({
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
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

/**
 * Ouvre le client mail avec sujet + corps préremplis (pas de backend).
 */
function onSubmit(): void {
  const to = props.cta.mailtoEmail || props.cta.contacts[1]?.value || ''
  if (!to) return

  const lines = [
    `Nom : ${form.name.trim()}`,
    `Téléphone : ${form.phone.trim() || '—'}`,
    `E-mail : ${form.email.trim()}`,
    `Soin souhaité : ${form.service.trim() || '—'}`,
    '',
    'Message :',
    form.message.trim(),
  ]

  const params = [
    `subject=${encodeURIComponent(props.cta.form.subject)}`,
    `body=${encodeURIComponent(lines.join('\n'))}`,
  ].join('&')

  window.location.href = `mailto:${to}?${params}`
}
</script>

<style scoped>
.cta-section {
  background: #ffffff;
  padding: 80px 0 64px;
  overflow: visible;
}

.cta-section__inner {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow: visible;
}

.cta-section__squiggle {
  display: none;
  position: absolute;
  left: -96px;
  top: -150px;
  width: 300px;
  height: 360px;
  pointer-events: none;
  z-index: 1;
}

.cta-section__intro {
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
}

.cta-section__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  text-align: center;
  max-width: 900px;
  margin-inline: auto;
}

.cta-section__heading {
  text-align: center;
}

.cta-section__sub {
  text-align: center;
}

.cta-section__contacts {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  width: 100%;
}

.cta-section__contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  text-align: center;
}

.cta-section__contact-icon {
  width: 64px;
  height: 64px;
}

.cta-section__contact-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.cta-section__contact-title {
  color: #000000;
  text-align: center;
}

.cta-section__contact-desc {
  color: #000000;
  text-align: center;
  max-width: 280px;
}

.cta-section__contact-value {
  color: var(--color-brand, #b1040e);
  font-family: 'Nunito', ui-sans-serif, system-ui, sans-serif;
  font-size: 18px;
  text-decoration: none;
}

.cta-section__contact-value:hover {
  text-decoration: underline;
}

.cta-section__form {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 48px;
  padding: 48px 0 24px;
  border-top: 1px solid #bdbdbd;
  box-sizing: border-box;
}

.cta-section__form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
}

.cta-section__field {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

.cta-section__label {
  color: var(--color-ink, #2e333e);
  font-family: 'Nunito', ui-sans-serif, system-ui, sans-serif;
  font-size: 18px;
  font-weight: 600;
}

.cta-section__input,
.cta-section__textarea {
  width: 100%;
  padding: 21px 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #ffffff;
  color: var(--color-ink, #2e333e);
  font-family: 'Nunito', ui-sans-serif, system-ui, sans-serif;
  font-size: 18px;
  box-sizing: border-box;
}

.cta-section__input::placeholder,
.cta-section__textarea::placeholder {
  color: #828282;
}

.cta-section__textarea {
  resize: vertical;
  min-height: 120px;
  padding: 15px 20px;
}

.cta-section__submit {
  width: 100%;
  color: #000000;
}

@media (min-width: 768px) {
  .cta-section {
    padding: 100px 0 80px;
  }

  .cta-section__contacts {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .cta-section__form {
    padding: 56px 0 32px;
  }

  .cta-section__form-grid {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .cta-section__field--message,
  .cta-section__submit {
    grid-column: 1 / -1;
  }
}

@media (min-width: 1024px) {
  .cta-section__squiggle {
    display: block;
  }

  .cta-section__intro {
    gap: 60px;
  }

  .cta-section__form {
    margin-top: 60px;
    padding: 64px 0 40px;
  }

  .cta-section__submit {
    max-width: 360px;
    justify-self: start;
  }
}
</style>
