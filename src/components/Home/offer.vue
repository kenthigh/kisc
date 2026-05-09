<script setup lang="ts">
defineOptions({
  name: 'HomeOffer',
})
</script>

<template>
  <section class="offer">
    <div class="offer-mask">
      <div class="offer-shell">
        <div class="offer-copy">
          <p class="offer-eyebrow" data-aos="fade-up" data-aos-once="true" data-aos-offset="50">
            What We Offer
          </p>
          <h2
            class="offer-title"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-offset="50"
            data-aos-delay="60"
          >
            Focused support for schools building meaningful engagement with Asia.
          </h2>
          <p
            class="offer-intro"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-offset="50"
            data-aos-delay="120"
          >
            We work with a small number of UK independent schools each year, helping them shape the
            right strategy, identify suitable partners, and develop long-term opportunities with
            clarity and purpose.
          </p>
        </div>

        <div class="offer-grid">
          <div
            class="offer-list-card"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-offset="50"
            data-aos-delay="120"
          >
            <ul class="offer-list">
              <li data-aos="fade-up" data-aos-once="true" data-aos-offset="50" data-aos-delay="160">
                <span class="offer-index" aria-hidden="true"></span>
                <div class="offer-item-copy">
                  <h3>Market understanding and positioning</h3>
                  <p>
                    Clarifying where each school fits, how it should be presented, and which
                    opportunities are worth pursuing.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-once="true" data-aos-offset="50" data-aos-delay="200">
                <span class="offer-index" aria-hidden="true"></span>
                <div class="offer-item-copy">
                  <h3>Partner identification and selection</h3>
                  <p>
                    Finding institutions and organisations that align with a school’s ethos,
                    ambitions, and long-term priorities.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-once="true" data-aos-offset="50" data-aos-delay="240">
                <span class="offer-index" aria-hidden="true"></span>
                <div class="offer-item-copy">
                  <h3>Programme development and delivery</h3>
                  <p>
                    Structuring initiatives that are educationally meaningful, operationally sound,
                    and well supported from planning through delivery.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-once="true" data-aos-offset="50" data-aos-delay="280">
                <span class="offer-index" aria-hidden="true"></span>
                <div class="offer-item-copy">
                  <h3>Long-term relationship building</h3>
                  <p>
                    Turning initial conversations into sustained partnerships that can develop over
                    time with trust and consistency.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <aside
            class="offer-note"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-offset="50"
            data-aos-delay="180"
          >
            <span class="offer-note-line" aria-hidden="true"></span>
            <p>
              Our role is to ensure that time, effort, and investment are directed towards
              opportunities that can genuinely grow and create long-term value.
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
  background-image: url('https://res.cloudinary.com/dzk8mhglj/image/upload/q_auto/f_auto/v1778297124/high-angle-shot-beautiful-lights-buildings-skyscrapers-captured-night_v0e4k0.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  color: #fff;
}

.offer-mask {
  min-height: 720px;
  background: linear-gradient(180deg, rgb(7 10 14 / 74%), rgb(8 10 14 / 82%));
  padding: 104px 32px;
}

.offer-shell {
  width: min(1240px, 100%);
  margin: 0 auto;
}

.offer-copy {
  max-width: 760px;
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
  font-size: clamp(34px, 4.4vw, 62px);
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.offer-intro {
  margin: 24px 0 0;
  max-width: 680px;
  color: rgb(255 255 255 / 80%);
  font-size: clamp(17px, 1.45vw, 22px);
  line-height: 1.8;
  font-weight: 300;
}

.offer-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.72fr);
  gap: 32px;
  align-items: end;
}

.offer-list-card {
  background: rgb(255 255 255 / 2%);
  backdrop-filter: blur(10px);
  padding: 36px 40px;
}

.offer-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.offer-list li {
  display: grid;
  grid-template-columns: 1px minmax(0, 1fr);
  gap: 28px;
  padding: 24px 0;
  border-bottom: 1px solid rgb(255 255 255 / 10%);
}

.offer-list li:first-child {
  padding-top: 0;
}

.offer-list li:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.offer-index {
  display: inline-block;
  width: 1px;
  height: 20px;
  margin-top: 5px;
  background: var(--main-color);
  opacity: 0.95;
}

.offer-item-copy h3 {
  margin: 0 0 10px;
  font-size: clamp(19px, 1.6vw, 28px);
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

.offer-note {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-self: stretch;
  justify-content: flex-end;
  padding: 28px 8px 10px 24px;
}

.offer-note-line {
  width: 64px;
  height: 1px;
  background: var(--main-color);
}

.offer-note p {
  margin: 0;
  max-width: 340px;
  color: rgb(255 255 255 / 88%);
  font-size: clamp(20px, 1.8vw, 30px);
  line-height: 1.55;
  font-weight: 300;
}

@media (max-width: 1180px) {
  .offer-mask {
    padding: 88px 24px;
  }

  .offer-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .offer-note {
    padding: 0;
    max-width: 720px;
    margin-top: 40px;
  }

  .offer-note p {
    max-width: none;
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

  .offer-list-card {
    padding: 26px 22px;
  }

  .offer-list li {
    grid-template-columns: 1px minmax(0, 1fr);
    gap: 18px;
    padding: 20px 0;
  }

  .offer-index {
    margin-top: 5px;
    height: 20px;
  }

  .offer-item-copy h3 {
    font-size: 20px;
  }

  .offer-note {
    gap: 16px;
    margin-top: 40px;
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

  .offer-list-card {
    padding: 22px 18px;
  }

  .offer-list li {
    padding: 18px 0;
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
