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
      <div class="offer-shell">
        <div class="offer-copy">
          <p class="offer-eyebrow" data-aos="fade-up" data-aos-once="true">Our Work</p>
          <h2 class="offer-title" data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
            Structured, long-term engagement built with care and clarity.
          </h2>
          <p class="offer-intro" data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
            KISC supports UK independent schools in developing considered engagement with Asia,
            particularly China, through partnerships and programmes that are appropriate,
            sustainable, and aligned with long-term priorities.
          </p>
        </div>

        <div class="offer-layout">
          <div class="offer-list">
            <article
              class="offer-item"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <span class="offer-item-index" aria-hidden="true"></span>
              <div class="offer-item-copy">
                <h3>International Engagement</h3>
                <p>
                  We help schools explore and develop their presence across Asia through carefully
                  selected partnerships and structured engagement.
                </p>
                <p>
                  This includes initial positioning, market understanding, and the ongoing
                  development of relationships over time.
                </p>
              </div>
            </article>

            <article
              class="offer-item"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <span class="offer-item-index" aria-hidden="true"></span>
              <div class="offer-item-copy">
                <h3>Immersion Programmes</h3>
                <p>
                  We design and support short-term and term-time immersion experiences that create
                  meaningful interaction between UK schools and international partners.
                </p>
                <p>
                  Each programme is built to reflect both educational value and long-term
                  relationship potential.
                </p>
              </div>
            </article>

            <article
              class="offer-item"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <span class="offer-item-index" aria-hidden="true"></span>
              <div class="offer-item-copy">
                <h3>Student Pathways</h3>
                <p>
                  We support the development of longer-term student pathways based on academic
                  suitability, cultural alignment, and realistic expectations on both sides.
                </p>
              </div>
            </article>

            <article
              class="offer-item"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <span class="offer-item-index" aria-hidden="true"></span>
              <div class="offer-item-copy">
                <h3>Strategic Collaboration</h3>
                <p>
                  Beyond student programmes, we support broader forms of cooperation, including
                  curriculum exchange, joint initiatives, and institutional partnerships.
                </p>
              </div>
            </article>
          </div>

          <aside class="offer-note" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
            <span class="offer-note-line" aria-hidden="true"></span>
            <p>
              We focus on connections that are measured, credible, and capable of developing into
              lasting institutional value.
            </p>
          </aside>
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
  background-image: url('https://res.cloudinary.com/dzk8mhglj/image/upload/q_auto/f_auto/v1778297120/grayscale-low-angle-shot-skyscraper-wall-with-glass-windows-cloudy-sky_j5mhof.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #fff;
}

.offer-mask {
  min-height: 720px;
  background: linear-gradient(180deg, rgb(6 8 11 / 76%), rgb(7 9 12 / 84%));
  padding: 104px 32px;
}

.offer-shell {
  width: min(1240px, 100%);
  margin: 0 auto;
}

.offer-copy {
  max-width: 780px;
  margin-bottom: 56px;
}

.offer-eyebrow {
  margin: 0 0 18px;
  color: var(--main-color);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.offer-title {
  margin: 0;
  font-size: clamp(34px, 4.2vw, 60px);
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.offer-intro {
  margin: 24px 0 0;
  max-width: 700px;
  color: rgb(255 255 255 / 78%);
  font-size: clamp(17px, 1.45vw, 22px);
  line-height: 1.82;
  font-weight: 300;
}

.offer-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(260px, 0.7fr);
  gap: 32px;
  align-items: start;
}

.offer-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.offer-item {
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-height: 100%;
  padding: 28px 28px 30px;
  background: rgb(255 255 255 / 2%);
  backdrop-filter: blur(10px);
}

.offer-item-index {
  display: inline-block;
  width: 20px;
  height: 1px;
  margin-top: 5px;
  background: var(--main-color);
  opacity: 0.95;
}

.offer-item-copy h3 {
  margin: 0 0 12px;
  font-size: clamp(20px, 1.55vw, 28px);
  font-weight: 400;
  line-height: 1.3;
}

.offer-item-copy p {
  margin: 0;
  color: rgb(255 255 255 / 72%);
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: 1.85;
  font-weight: 300;
}

.offer-item-copy p + p {
  margin-top: 12px;
}

.offer-note {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 22px;
  min-height: 100%;
  padding: 12px 4px 12px 20px;
}

.offer-note-line {
  width: 64px;
  height: 1px;
  background: var(--main-color);
}

.offer-note p {
  margin: 0;
  max-width: 320px;
  color: rgb(255 255 255 / 88%);
  font-size: clamp(20px, 1.7vw, 30px);
  line-height: 1.55;
  font-weight: 300;
}

@media (max-width: 1180px) {
  .offer-mask {
    padding: 88px 24px;
  }

  .offer-layout {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .offer-note {
    padding: 0;
  }

  .offer-note p {
    max-width: none;
  }
}

@media (max-width: 900px) {
  .offer-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 820px) {
  .offer,
  .offer-mask {
    min-height: auto;
  }

  /* .offer {
    background-attachment: scroll;
  } */

  .offer-mask {
    padding: 72px 20px;
  }

  .offer-copy {
    margin-bottom: 36px;
  }

  .offer-title {
    font-size: clamp(30px, 9vw, 48px);
    line-height: 1.12;
  }

  .offer-intro {
    margin-top: 18px;
    font-size: 16px;
    line-height: 1.75;
  }

  .offer-item {
    padding: 24px 22px;
  }

  .offer-item-copy h3 {
    font-size: 20px;
  }

  .offer-note {
    gap: 16px;
  }

  .offer-note p {
    font-size: 18px;
    line-height: 1.7;
  }
}

@media (max-width: 480px) {
  .offer-mask {
    padding: 60px 16px;
  }

  .offer-eyebrow {
    margin-bottom: 14px;
    font-size: 12px;
  }

  .offer-copy {
    margin-bottom: 28px;
  }

  .offer-item {
    gap: 14px;
    padding: 20px 18px;
  }

  .offer-item-copy h3 {
    margin-bottom: 8px;
    font-size: 18px;
  }

  .offer-item-copy p {
    font-size: 14px;
    line-height: 1.75;
  }
}
</style>
