<script setup lang="ts">
defineOptions({
  name: 'HomeFoundation',
})
</script>

<template>
  <section class="foundation" aria-labelledby="foundation-title">
    <div class="foundation-inner">
      <div class="foundation-heading" data-aos="fade-up" data-aos-once="true">
        <h2 id="foundation-title">Built on Nearly Two Decades of Practice</h2>
        <div class="heading-rule" aria-hidden="true"></div>
      </div>

      <div class="foundation-content">
        <div class="foundation-copy" data-aos="fade-up" data-aos-once="true" data-aos-delay="60">
          <p class="lead">
            KISC is the strategic evolution of nearly two decades of practical experience developed through KK Tiger International.
          </p>
          <p>
            Over the past 19 years, KK Tiger has worked alongside British independent schools, supporting student pathways, immersion programmes, institutional collaboration and long-term partnerships across Asia.
          </p>
        </div>
        <div class="foundation-copy foundation-copy-secondary" data-aos="fade-up" data-aos-once="true" data-aos-delay="90">
          <p>
            As these relationships developed, schools increasingly sought support beyond recruitment — including international strategy, brand positioning, institutional development and broader strategic opportunities.
          </p>
          <p>
            KISC was established as the natural evolution of that experience, providing strategic support while continuing to build on the trusted relationships and practical knowledge developed over nearly two decades.
          </p>
        </div>

      </div>

      <div class="timeline" data-aos="fade-up" data-aos-once="true" data-aos-delay="120" aria-label="From KK Tiger in 2006 to KISC today">
          <div class="timeline-item">
            <span class="timeline-date">2006</span>
            <strong>KK Tiger</strong>
          </div>
          <div class="timeline-line" aria-hidden="true">
            <span>19 years of practice</span>
          </div>
          <div class="timeline-item">
            <span class="timeline-date">Today</span>
            <strong>KISC</strong>
          </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.foundation {
  padding: 112px 24px 88px;
  background: linear-gradient(180deg, #fff 0%, #fff 86%, #f7f8f8 100%);
  color: #17212b;
}

.foundation-inner {
  width: min(1240px, 100%);
  margin: 0 auto;
}

.foundation-heading {
  display: flex;
  align-items: center;
  gap: clamp(28px, 5vw, 72px);
  margin-bottom: 48px;
}

h2 {
  margin: 0;
  color: #26323c;
  max-width: 560px;
  font-size: clamp(27px, 3vw, 40px);
  font-weight: 400;
  line-height: 1.2;
}

.heading-rule {
  flex: 1;
  height: 1px;
  background: #d9dde0;
}

.foundation-content {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(32px, 6vw, 96px);
  align-items: start;
}

.foundation-copy {
  display: grid;
  gap: 20px;

  p {
    margin: 0;
    color: #4b5563;
    font-size: clamp(16px, 1.35vw, 19px);
    font-weight: 300;
    line-height: 1.82;
  }
}

.foundation-copy-secondary {
  padding-top: 6px;
}

.lead {
  color: #26323c !important;
  font-size: clamp(20px, 2vw, 27px) !important;
  font-weight: 400 !important;
  line-height: 1.45 !important;
}

.timeline {
  display: grid;
  grid-template-columns: 1fr minmax(180px, 0.8fr) 1fr;
  align-items: center;
  gap: clamp(24px, 5vw, 68px);
  margin-top: 68px;
  padding-top: 30px;
  border-top: 1px solid #d7dce0;
}

.timeline-item {
  display: grid;
  gap: 3px;

  &:last-child {
    text-align: right;
  }

  strong {
    font-size: clamp(25px, 2.5vw, 36px);
    font-weight: 400;
    letter-spacing: -0.03em;
  }
}

.timeline-date {
  color: var(--main-color);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.timeline-line {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #7f8a94;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #c6cdd2;
  }
}

@media (max-width: 800px) {
  .foundation {
    padding: 76px 20px;
  }

  .foundation-heading {
    margin-bottom: 36px;
  }

  .foundation-content {
    gap: 28px;
  }

  .timeline {
    margin-top: 52px;
  }
}

@media (max-width: 640px) {
  .foundation {
    padding: 58px 16px;
  }

  .foundation-heading {
    display: block;
    margin-bottom: 30px;
  }

  .heading-rule {
    width: 64px;
    margin-top: 18px;
  }

  .foundation-content {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .foundation-copy-secondary {
    padding-top: 0;
  }

  .foundation-copy {
    gap: 16px;

    p {
      font-size: 15px;
      line-height: 1.76;
    }
  }

  .timeline {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 16px;
    margin-top: 40px;
  }

  .timeline-item,
  .timeline-item:last-child {
    text-align: center;
  }

  .timeline-line {
    width: min(220px, 100%);
    font-size: 10px;
  }
}
</style>
