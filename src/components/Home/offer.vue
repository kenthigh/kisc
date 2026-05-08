<script setup lang="ts">
defineOptions({
  name: 'HomeOffer',
})
</script>

<template>
  <section class="offer">
    <div class="offer-mask">
      <div class="offer-content-left">
        <div>
          <h2 data-aos="fade-up" class="offer-title">What We Offer</h2>
          <p data-aos="fade-up" data-aos-delay="100" class="offer-sub-title">
            We work with a small number of UK independent schools each year, supporting:
          </p>
        </div>
        <ul class="ul-box">
          <li data-aos="fade-up" data-aos-delay="100" data-aos-offset="50">
            <span class="offer-index">01</span>
            <span class="offer-text">Market understanding and positioning</span>
          </li>
          <li data-aos="fade-up" data-aos-delay="100" data-aos-offset="50">
            <span class="offer-index">02</span>
            <span class="offer-text">Partner identification and selection</span>
          </li>
          <li data-aos="fade-up" data-aos-delay="100" data-aos-offset="50">
            <span class="offer-index">03</span>
            <span class="offer-text">Programme development and delivery</span>
          </li>
          <li data-aos="fade-up" data-aos-delay="100" data-aos-offset="50">
            <span class="offer-index">04</span>
            <span class="offer-text">Long-term relationship building</span>
          </li>
        </ul>
      </div>
      <div class="offer-content-right">
        <div>
          <p
            class="offer-content-right-p"
            data-aos-offset="100"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our role is to ensure that time, effort and investment are directed towards
            opportunities that can genuinely develop.
          </p>
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
  background-image: url('@/assets/high-angle-shot-beautiful-lights-buildings-skyscrapers-captured-night.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

.offer-mask {
  min-height: 720px;
  display: flex;
  flex-direction: row;
  /* max-width: 80%; */
  /* align-items: center; */
  justify-content: center;
  background-color: rgb(0 0 0 / 70%);
  padding: 100px 124px;
  color: white;
}

.ul-box {
  margin-top: 40px;
  padding: 0;
  list-style: none;
  font-size: 20px;
  font-weight: 100;

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    margin-bottom: 18px;
  }
}

.offer-index {
  display: inline-block;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.8;
}

.offer-text {
  display: inline-block;
}

.offer-content-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.offer-content-left,
.offer-content-right {
  width: 50%;
}

.offer-content-right {
  padding-left: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column-reverse;
  font-size: 24px;
}

.offer-content-right-p {
  border-left: 1px solid var(--main-color);
  padding-left: 20px;
}

.offer-title {
  font-size: clamp(26px, 5vw, 40px);
}
.offer-sub-title {
  font-size: 26px;
}

.offer-content {
  width: min(900px, 92%);
  color: #fff;
  text-align: center;
}

.offer-content h2 {
  margin: 0 0 20px;
  font-size: clamp(30px, 4.4vw, 52px);
  font-weight: 600;
}

.offer-content p {
  margin: 0 auto 14px;
  max-width: 760px;
  font-size: clamp(16px, 1.8vw, 22px);
  line-height: 1.75;
}

@media (max-width: 1024px) {
  .ul-box {
    margin-bottom: 40px;
  }

  .offer,
  .offer-mask {
    min-height: 560px;
  }
  .offer-mask {
    flex-direction: column;
    padding: 80px 20px;
  }

  .offer-content-left,
  .offer-content-right {
    width: 100%;
  }

  .offer-content-right {
    padding: 0;
  }

  .ul-box {
    margin-top: 40px;
    font-size: 16px;
  }

  .offer-content-right {
    font-size: 18px;
  }
}
</style>
