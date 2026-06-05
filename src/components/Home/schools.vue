<script setup lang="ts">
defineOptions({
  name: 'HomeSchools',
})

const schools = [
  'UK Independent Schools',
  'International Partnerships',
  'Student Immersion Programmes',
  'Institutional Collaboration',
  'Market Development',
  'Long-Term Relationship Building',
]

const intro = [
  `KISC works with a selected group of UK independent schools, each offering distinct strengths across academic, sporting, and pastoral provision.`,
  `These relationships have developed over time through ongoing collaboration and shared programmes.`,
]
</script>

<template>
  <section class="schools">
    <div class="schools-inner">
      <aside class="schools-intro">
        <p class="eyebrow" data-aos="fade-up" data-aos-once="true">Areas of Engagement</p>
        <h2 data-aos="fade-up" data-aos-delay="50" data-aos-once="true">
          KISC supports schools through carefully selected opportunities, informed decision-making, and sustainable partnership development across the UK and Asia.
        </h2>
        <!-- <p
          v-for="(item, index) in intro"
          :key="index"
          class="lead"
          data-aos="fade-up"
          data-aos-once="true"
          :data-aos-delay="90"
        >
          {{ item }}
        </p> -->
      </aside>

      <div class="schools-list">
        <article
          v-for="(school, index) in schools"
          :key="school"
          class="school-card"
          data-aos="fade-down"
          data-aos-once="true"
        >
          <span class="school-index"></span>
          <h3>{{ school }}</h3>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.schools {
  padding: 96px 24px;
  background: #fff;
}

.schools-inner {
  width: min(1240px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1.5fr);
  gap: 48px;
}

.schools-intro {
  position: sticky;
  top: 72px;
  align-self: start;
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--main-color);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 13px;
}

.schools-intro h2 {
  margin: 0 0 16px;
  color: #10131a;
  font-size: clamp(30px, 3.9vw, 50px);
  line-height: 1.16;
}

.lead {
  margin: 0 0 14px;
  color: #344054;
  font-size: clamp(16px, 1.5vw, 20px);
  line-height: 1.72;
}

.lead:last-of-type {
  margin-bottom: 0;
}

.schools-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.school-card {
  padding: 22px 24px;
  border: 1px solid #e7ecf5;
  border-radius: 10px;
  background: #fff;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: #d4ddee;
    box-shadow: 0 10px 26px rgb(16 19 26 / 6%);
  }
}

.school-index {
  display: inline-block;
  margin-bottom: 14px;
  color: var(--main-color);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.school-card h3 {
  margin: 0;
  color: #0f1d40;
  font-size: clamp(20px, 2vw, 28px);
  line-height: 1.3;
}

@media (max-width: 980px) {
  .schools {
    padding: 72px 20px;
  }

  .schools-inner {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .schools-intro {
    position: static;
  }
}

@media (max-width: 640px) {
  .schools {
    padding: 56px 16px;
  }

  .schools-list {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .school-card {
    padding: 18px;
  }
}
</style>
