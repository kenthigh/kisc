<script setup lang="ts">
defineOptions({
  name: 'HomeStrategicGrowth',
})

const features = [
  {
    title: 'Strategic Development Connections',
    subtitle: 'Development Partners',
  },
  {
    title: 'Cross-border School Development',
    subtitle: 'International Campus / Joint Venture',
  },
  {
    title: 'Programme & Intellectual Property Expansion',
    items: [
      'Rowing',
      'Swimming',
      'Outdoor Education',
      'Leadership',
      'Performing Arts',
      'Nature Education',
      'Academic Enrichment',
      'Programme Licensing',
    ],
  },
  {
    title: 'Executive & Institutional Advisory',
    items: ['Heads', 'Governors', 'Boards', 'Senior Leaders', 'School Owners', 'Education Groups'],
  },
]

const paragraphs = [
  `KISC supports British independent schools in exploring carefully aligned opportunities that contribute to long-term institutional development.`,
  `Our work extends beyond recruitment and market activity to include institutional growth, overseas development, educational projects, programme expansion and strategic development opportunities.`,
  `Every opportunity is considered against a school's identity, governance, educational values and long-term ambitions.`,
  `Our focus is always credibility, sustainability and institutional alignment.`,
]
</script>

<template>
  <section class="strategic-growth">
    <div class="growth-inner">
      <aside class="growth-intro">
        <p class="eyebrow" data-aos="fade-up" data-aos-once="true">Strategic Growth</p>
        <h2 data-aos="fade-up" data-aos-once="true" data-aos-delay="50">
          Supporting schools beyond traditional international engagement.
        </h2>
        <div class="growth-copy" data-aos="fade-up" data-aos-once="true" data-aos-delay="90">
          <p v-for="paragraph in paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </aside>

      <div class="growth-content">
        <div class="feature-list">
          <article
            v-for="feature in features"
            :key="feature.title"
            class="feature-item"
            data-aos="fade-down"
            data-aos-once="true"
          >
            <span class="feature-line" aria-hidden="true"></span>
            <div class="feature-copy">
              <h3>{{ feature.title }}</h3>
              <p v-if="feature.subtitle" class="feature-subtitle">{{ feature.subtitle }}</p>
              <ul v-if="feature.items" class="tag-list">
                <li v-for="item in feature.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </article>
        </div>

        <aside class="disclaimer" data-aos="fade-up" data-aos-once="true">
          <p>KISC does not provide financial advice or investment brokerage.</p>
          <p>
            Our role is to introduce carefully selected strategic partners where appropriate.
          </p>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.strategic-growth {
  padding: 112px 24px;
  background: #fff;
}

.growth-inner {
  width: min(1240px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(280px, 0.92fr) minmax(0, 1.48fr);
  gap: 56px;
}

.growth-intro {
  position: sticky;
  top: 72px;
  align-self: start;
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--main-color);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.growth-intro h2 {
  margin: 0 0 28px;
  color: #10131a;
  font-size: clamp(30px, 3.9vw, 50px);
  line-height: 1.16;
}

.growth-copy {
  display: grid;
  gap: 14px;
}

.growth-copy p {
  margin: 0;
  color: #344054;
  font-size: clamp(16px, 1.35vw, 19px);
  line-height: 1.78;
  font-weight: 300;
}

.growth-content {
  display: grid;
  min-height: 100%;
  align-content: space-between;
  gap: 80px;
}

.feature-list {
  display: grid;
  gap: 0;
  border-top: 1px solid #e7ecf5;
}

.feature-item {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 28px;
  padding: 34px 0;
  border-bottom: 1px solid #e7ecf5;
}

.feature-line {
  width: 48px;
  height: 1px;
  margin-top: 15px;
  background: var(--main-color);
}

.feature-copy h3 {
  margin: 0;
  color: #0f1d40;
  font-size: clamp(22px, 2vw, 31px);
  line-height: 1.26;
}

.feature-subtitle {
  margin: 12px 0 0;
  color: #3f4c68;
  font-size: clamp(15px, 1.2vw, 18px);
  line-height: 1.6;
  font-weight: 300;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 12px;
  margin-top: 18px;
}

.tag-list li {
  padding: 8px 12px;
  border: 1px solid #e2e8f4;
  color: #3f4c68;
  background: #fbfcff;
  font-size: 14px;
  line-height: 1.2;
}

.disclaimer {
  display: grid;
  justify-items: start;
  gap: 6px;
  max-width: 560px;
  padding-top: 30px;
  border-top: 1px solid #eef1f6;
}

.disclaimer p {
  margin: 0;
  color: #98a2b3;
  font-size: 13px;
  line-height: 1.65;
  font-weight: 300;
}

@media (max-width: 980px) {
  .strategic-growth {
    padding: 72px 20px;
  }

  .growth-inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .growth-intro {
    position: static;
  }
}

@media (max-width: 640px) {
  .strategic-growth {
    padding: 56px 16px;
  }

  .feature-item {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 28px 0;
  }

  .feature-line {
    margin-top: 0;
  }

  .tag-list li {
    font-size: 13px;
  }
}
</style>
