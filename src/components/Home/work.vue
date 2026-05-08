<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

defineOptions({
  name: 'HomeWork',
})

const bgOffsetY = ref(0)
const PARALLAX_SPEED = 0.01 // 小于1：背景滚动慢于页面

const updateBgOffset = () => {
  bgOffsetY.value = window.scrollY * PARALLAX_SPEED
}

const offerStyle = computed(() => ({
  //   backgroundPosition: `center calc(149% + ${bgOffsetY.value}px)`,
}))

onMounted(() => {
  updateBgOffset()
  window.addEventListener('scroll', updateBgOffset, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateBgOffset)
})
</script>

<template>
  <section class="offer" :style="offerStyle">
    <div class="offer-mask">
      <div class="offer-content">
        <div class="offer-head">
          <h2 data-aos="fade-up">Our Work</h2>
          <p data-aos="fade-up" data-aos-delay="60">
            KISC supports UK independent schools in developing structured engagement with Asia,
            particularly China.
          </p>
          <p>
            Our work focuses on building connections that are appropriate, sustainable, and aligned
            with each school’s long-term priorities.
          </p>
        </div>

        <div class="offer-list">
          <article class="offer-item" data-aos="zoom-out" data-aos-delay="80">
            <h3>International Engagement</h3>
            <p>
              We support schools in exploring and developing their presence across Asia through
              carefully selected partnerships and structured engagement.
            </p>
            <p>
              This includes initial positioning, market understanding, and ongoing development of
              relationships over time.
            </p>
          </article>
          <article class="offer-item" data-aos="zoom-out" data-aos-delay="110">
            <h3>Immersion Programmes</h3>
            <p>
              We design and support short-term and term-time immersion experiences that provide
              meaningful interaction between UK schools and international partners.
            </p>
            <p>
              These programmes are built to reflect both educational value and long-term
              relationship potential.
            </p>
          </article>
          <article class="offer-item" data-aos="zoom-out" data-aos-delay="140">
            <h3>Student Pathways</h3>
            <p>
              We support the development of longer-term student pathways based on academic
              suitability, cultural alignment, and realistic expectations on both sides.
            </p>
          </article>
          <article class="offer-item" data-aos="zoom-out" data-aos-delay="170">
            <h3>Strategic Collaboration</h3>
            <p>
              Beyond student programmes, we support broader forms of cooperation, including
              curriculum exchange, joint initiatives, and institutional partnerships.
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.offer {
  width: 100%;
  min-height: 720px;
  position: relative;
  background-image: url('@/assets/grayscale-low-angle-shot-skyscraper-wall-with-glass-windows-cloudy-sky.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: white;
}

.offer-mask {
  min-height: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0 0 0 / 60%);
  padding: 80px 24px;
}

.offer-content {
  width: 80%;
  color: #fff;
}

.offer-head {
  text-align: center;
  margin-bottom: 100px;
}

.offer-head h2 {
  margin: 0 0 20px;
  font-size: clamp(30px, 4.4vw, 52px);
  font-weight: 600;
}

.offer-head p {
  margin: 0 auto 14px;
  max-width: 760px;
  font-size: clamp(16px, 1.8vw, 22px);
  line-height: 1.6;
}

.offer-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 16px;
  column-gap: 300px;
  align-items: stretch;
}

.offer-item {
  padding: 22px 24px;
  border-radius: 14px;
  margin-bottom: 10px;
}

.offer-item h3 {
  margin: 0 0 8px;
  font-size: clamp(18px, 1.5vw, 24px);
  font-weight: 600;
  text-align: center;
}

.offer-item p {
  margin: 0;
  font-size: clamp(14px, 1.1vw, 16px);
  line-height: 1.7;
  font-weight: 100;
  text-align: center;
}

@media (max-width: 1024px) {
  .offer,
  .offer-mask {
    min-height: 560px;
  }

  .offer-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .offer-mask {
    padding: 56px 16px;
  }

  .offer-head {
    margin-bottom: 38px;
  }

  .offer-item {
    padding: 16px;
  }
}
</style>
