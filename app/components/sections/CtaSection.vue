<template>
  <section
    id="book"
    class="cta-section">
    <div class="container-dental cta-section__inner">
      <img
        src="/exports/knOCG.png"
        alt=""
        class="cta-section__squiggle"
        width="176"
        height="213"
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
            <img
              :src="contact.icon"
              alt=""
              class="cta-section__contact-icon-img"
              width="64"
              height="64"
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
              type="text"
              :placeholder="cta.form.namePlaceholder"
              class="cta-section__input" />
          </label>
          <label class="cta-section__field">
            <span class="cta-section__label">{{ cta.form.phoneLabel }}</span>
            <input
              type="tel"
              :placeholder="cta.form.phonePlaceholder"
              class="cta-section__input" />
          </label>
          <label class="cta-section__field">
            <span class="cta-section__label">{{ cta.form.emailLabel }}</span>
            <input
              type="email"
              :placeholder="cta.form.emailPlaceholder"
              class="cta-section__input" />
          </label>
          <label class="cta-section__field">
            <span class="cta-section__label">{{ cta.form.serviceLabel }}</span>
            <input
              type="text"
              :placeholder="cta.form.servicePlaceholder"
              class="cta-section__input" />
          </label>
          <label class="cta-section__field cta-section__field--message">
            <span class="cta-section__label">{{ cta.form.messageLabel }}</span>
            <textarea
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
import { cta } from '../../data/site'

function onSubmit(): void {
  window.location.href = `mailto:${cta.contacts[1]?.value ?? 'contact@example.com'}`
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
  /* Export has transparent padding; scale up so the stroke matches Pencil ~176px */
  left: -36px;
  top: -100px;
  width: 300px;
  height: auto;
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

.cta-section__contact-icon-img {
  display: block;
  width: 64px;
  height: 64px;
  object-fit: contain;
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
  color: #b1040e;
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
  color: #2e333e;
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
  color: #2e333e;
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
