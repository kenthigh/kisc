<script setup lang="ts">
defineOptions({
  name: 'HomeOffer',
})
</script>

<template>
  <section class="offer">
    <div class="offer-mask">
      <div class="offer-content">
        <h2 data-aos="fade-up">What We Offer</h2>
        <p data-aos="fade-up" data-aos-delay="50">
          We work with a small number of UK schools to support:
        </p>
        <ul class="ul-box">
          <li data-aos="fade-up" data-aos-delay="100">Market understanding and positioning</li>
          <li data-aos="fade-up" data-aos-delay="120">Partner identification and selection</li>
          <li data-aos="fade-up" data-aos-delay="140">Programme development and delivery</li>
          <li data-aos="fade-up" data-aos-delay="160">Long-term relationship building</li>
        </ul>
        <br />
        <p data-aos="fade-up" data-aos-delay="100">
          Our work is designed to ensure that time, effort and investment are directed towards
          opportunities that can genuinely develop.
        </p>
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
  background-attachment: scroll;
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
  .offer,
  .offer-mask {
    min-height: 560px;
  }
}
</style>
