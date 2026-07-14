<template>
  <section class="team-section">
    <div class="container-dental team-section__inner">
      <div class="team-section__header">
        <p class="eyebrow-dental">{{ team.eyebrow }}</p>
        <h2 class="heading-dental-lg">{{ team.heading }}</h2>
        <p class="lead-dental team-section__body">{{ team.body }}</p>
      </div>

      <div class="team-section__grid">
        <article
          v-for="member in team.members"
          :key="member.name"
          class="team-section__card">
          <img
            :src="member.image"
            :alt="member.name"
            class="team-section__photo"
            width="373"
            height="401" />
          <div class="team-section__info">
            <div class="team-section__identity">
              <h3 class="heading-dental-md team-section__name">{{ member.name }}</h3>
              <p class="team-section__role">{{ member.role }}</p>
            </div>
            <p class="body-dental team-section__bio">{{ member.bio }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { team } from '../../data/site'
</script>

<style scoped>
.team-section {
  padding: 60px 0 80px;
}

.team-section__inner {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.team-section__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  text-align: center;
  max-width: 776px;
  margin-inline: auto;
}

.team-section__body {
  text-align: center;
}

.team-section__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  justify-items: center;
}

.team-section__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 373px;
}

.team-section__photo {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 373 / 401;
  object-fit: cover;
  border-radius: 10px;
}

.team-section__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 340px;
  margin-top: -100px;
  padding: 40px;
  border-radius: 10px;
  background: #ffffff;
  border: 1px solid #b1040e;
  border-bottom-width: 4px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  z-index: 1;
}

.team-section__identity {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.team-section__name {
  color: #000000;
}

.team-section__role {
  margin: 0;
  color: #b1040e;
  font-family: 'Nunito', ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  letter-spacing: 0.7px;
}

.team-section__bio {
  color: #000000;
}

@media (min-width: 900px) {
  .team-section__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    align-items: flex-start;
  }
}
</style>
