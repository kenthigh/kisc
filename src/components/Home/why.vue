<!-- src/components/Home/why.vue -->
<script setup lang="ts">
defineOptions({
  name: 'HomeWhy',
})
</script>

<template>
  <section class="why">
    <div class="why-item">
      <div class="why-item-title" data-aos="fade" data-aos-offset="20" data-aos-delay="50">
        Why KISC ?
      </div>
    </div>
    <div class="why-item">
      <div class="why-item-answer">
        <strong data-aos="fade-down" data-aos-offset="20" data-aos-delay="100">one</strong>
        <p data-aos="fade-down" data-aos-offset="20" data-aos-delay="200">
          Many schools take a broad approach when entering new markets, building multiple
          connections across different regions.
        </p>
      </div>
    </div>
    <div class="why-item">
      <div class="why-item-answer">
        <strong data-aos="fade-down" data-aos-offset="20" data-aos-delay="200">Two</strong>
        <p data-aos="fade-down" data-aos-offset="20" data-aos-delay="300">
          While this can be valuable at an early stage, developing meaningful and sustainable
          partnerships often requires a more focused and structured approach.
        </p>
      </div>
    </div>
    <div class="why-item">
      <div class="why-item-answer">
        <strong data-aos="fade-down" data-aos-offset="20" data-aos-delay="300">Three</strong>
        <p data-aos="fade-down" data-aos-offset="20" data-aos-delay="400">
          KISC supports schools in making this transition — from initial exploration to carefully
          developed and well-aligned engagement.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why {
  width: 100%;
  height: 920px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.why-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  text-align: center;
  border: 1px solid #e9e9e9;
  background: #fff;
}

.why-item > div {
  margin: 0;
  width: 400px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.45;
  color: #1f1f1f;
  text-align: left;

  &.why-item-title {
    text-align: left;
    font-size: clamp(26px, 5vw, 40px);
  }
  &.why-item-answer {
    strong {
      position: relative;
      display: block;
      font-size: 26px;
      margin-bottom: 16px;
      padding-top: 26px;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 56px;
        height: 1px;
        background: #4c71df;
      }

      &::after {
        content: '';
        position: absolute;
        top: 6px;
        left: 28px;
        width: 12px;
        height: 12px;
        border: 1px solid #4c71df;
        border-radius: 0;
        transform: none;
        background: #4c71df;
      }
    }
  }
}

.why-item:nth-child(2) .why-item-answer strong::before {
  width: 56px;
}

.why-item:nth-child(2) .why-item-answer strong::after {
  left: 28px;
  width: 12px;
  height: 12px;
  background: #4c71df;
}

.why-item:nth-child(3) .why-item-answer strong::before {
  width: 64px;
}

.why-item:nth-child(3) .why-item-answer strong::after {
  left: 20px;
  width: 14px;
  height: 8px;
  background: transparent;
}

.why-item:nth-child(4) .why-item-answer strong::before {
  width: 48px;
}

.why-item:nth-child(4) .why-item-answer strong::after {
  left: 34px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
}

@media (max-width: 1024px) {
  .why {
    height: auto;
    min-height: 920px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, minmax(180px, 1fr));
  }
  .why-item > div {
    width: auto;
  }
}
</style>
