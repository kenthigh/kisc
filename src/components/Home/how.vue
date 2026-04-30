<script setup lang="ts">
defineOptions({
  name: 'HomeHow',
})

const steps = [
  {
    title: 'Understanding and alignment',
    desc: `We begin by understanding each school's priorities, positioning, and readiness for international engagement.`,
  },
  {
    title: 'Connections and development',
    desc: `We introduce carefully selected opportunities and support the development of programmes, including immersion experiences and collaborative initiatives.`,
  },
  {
    title: 'Sustained engagement',
    desc: `Our work continues over time, supporting relationships as they develop in a stable and consistent way.`,
  },
]
</script>

<template>
  <section class="how">
    <div class="how-inner">
      <aside class="how-intro">
        <p class="eyebrow" data-aos="fade-up">How We Work</p>
        <h2 data-aos="fade-up" data-aos-delay="50">Structured, practical, and built to last.</h2>
        <p class="lead" data-aos="fade-up" data-aos-delay="90">
          We take a structured and practical approach to international engagement, working closely
          with schools to ensure that each opportunity is appropriate and sustainable.
        </p>
      </aside>

      <div class="how-track">
        <article
          v-for="(step, index) in steps"
          :key="step.title"
          class="how-step"
          data-aos="fade-down"
          :data-aos-delay="120 + index * 50"
        >
          <span class="dot" aria-hidden="true"></span>
          <div class="card">
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.how {
  padding: 96px 24px;
  background: linear-gradient(180deg, #f5f8ff 0%, #fff 100%);
}

.how-inner {
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(280px, 0.95fr) minmax(0, 1.4fr);
  gap: 48px;
}

.how-intro {
  position: sticky;
  top: 72px;
  align-self: start;
}

.eyebrow {
  margin: 0 0 14px;
  color: #2d4d98;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 13px;
}

.how-intro h2 {
  margin: 0 0 16px;
  color: #10131a;
  font-size: clamp(30px, 3.9vw, 50px);
  line-height: 1.16;
}

.lead {
  margin: 0;
  color: #344054;
  font-size: clamp(16px, 1.5vw, 20px);
  line-height: 1.72;
}

.how-track {
  position: relative;
  display: grid;
  gap: 22px;
  padding-left: 22px;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 6px;
    width: 1px;
    background: linear-gradient(180deg, #567be9 0%, #b9caee 100%);
  }
}

.how-step {
  position: relative;
}

.dot {
  position: absolute;
  top: 8px;
  left: -22px;
  width: 13px;
  height: 13px;
  border: 1px solid #4c71df;
  border-radius: 50%;
  background: #fff;
}

.card {
  padding: 24px;
  //   border: 1px solid #d7e2fa;
  border-radius: 14px;
  background: #fff;
  //   box-shadow: 0 10px 26px rgb(23 53 118 / 8%);
}

.card h3 {
  margin: 0 0 10px;
  color: #0f1d40;
  font-size: clamp(20px, 2vw, 30px);
  line-height: 1.25;
}

.card p {
  margin: 0;
  color: #3f4c68;
  font-size: clamp(15px, 1.2vw, 18px);
  line-height: 1.72;
}

@media (max-width: 980px) {
  .how {
    padding: 72px 20px;
  }

  .how-inner {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .how-intro {
    position: static;
  }
}

@media (max-width: 640px) {
  .how {
    padding: 56px 16px;
  }

  .how-track {
    gap: 16px;
  }

  .card {
    padding: 18px;
  }
}
</style>
