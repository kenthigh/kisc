<!-- src/components/Home/why.vue -->
<script setup lang="ts">
defineOptions({
  name: 'HomeWhy',
})
</script>

<template>
  <div class="why-section">
    <div class="why-shell">
      <section class="why-intro">
        <div class="why-title" data-aos="fade">Why KISC?</div>
        <p class="why-statement" data-aos="fade-up" data-aos-once="true">
          Today, international success depends not simply on entering new markets, but on building
          institutional value, trusted partnerships and long-term strategic clarity.
        </p>
      </section>
      <section class="why">
        <div class="why-item">
          <div class="why-item-answer">
            <strong data-aos="fade-down" data-aos-once="true"
              >The reality of international engagement
            </strong>
            <p data-aos="fade-down" data-aos-once="true">
              Many schools take a broad approach when entering Asia, building multiple connections
              across different markets.
            </p>
            <p data-aos="fade-down" data-aos-once="true">
              While this can be valuable at an early stage, only a small number of these connections
              develop into partnerships that are truly sustainable.
            </p>
            <p data-aos="fade-down" data-aos-once="true">
              Without careful alignment, international engagement can consume significant time, effort
              and resources without delivering meaningful outcomes.
            </p>
          </div>
        </div>
        <div class="why-item">
          <div class="why-item-answer">
            <strong data-aos="fade-down" data-aos-once="true"
              >A more focused and structured approach
            </strong>
            <p data-aos="fade-down" data-aos-once="true">
              KISC supports schools in moving from initial exploration to carefully developed and
              well-aligned engagement.
            </p>
            <p data-aos="fade-down" data-aos-once="true">
              Our work is not about increasing the volume of connections, but about identifying which
              partnerships are most likely to succeed.
            </p>
            <p data-aos="fade-down" data-aos-once="true">
              We combine market understanding, practical experience, and long-term relationship
              development to ensure that each opportunity is both appropriate and sustainable.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.why-title {
  font-size: clamp(26px, 5vw, 40px);
  text-align: center;
  color: #26323c;
  font-weight: 100;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.why-intro {
  position: relative;
  padding: 115px 0 48px;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 50%;
    width: 1px;
    height: 36px;
    background: var(--main-color);
    transform: translateX(-50%);
  }
}

.why-statement {
  max-width: 900px;
  margin: 22px auto 0;
  padding: 0;
  color: #344054;
  font-size: clamp(12px, 2vw, 20px);
  font-weight: 300;
  line-height: 1.55;
  text-align: center;
}

.why {
  width: 100%;
  display: grid;
  border-top: 0;
  /* 
    grid-template-columns: 1fr 1fr;
    表示将网格容器划分为两列，每列占据相同的空间（1fr 表示等分剩余空间）。

    grid-template-rows: repeat(2, 1fr);
    表示将网格容器划分为两行，每行也是等分剩余空间，共两行。
  */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(1, 1fr);
}

.why-item {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: transparent;
}

/* 奇数（单数）项右侧加边框 */
/* .why-item:nth-child(1),
.why-item:nth-child(2) {
  padding: 60px 24px;
} */

/* 第3和第4项右侧加边框 */
.why-item:nth-child(1){
  padding: 48px 150px 88px 10px;
}
.why-item:nth-child(2) {
  padding: 48px 10px 88px 130px;
}

.why-item:nth-child(1) {
  border-right: 1px solid #e9e9e9;
}

.why-section {
  background: #f7f8f8;
  padding: 0 32px;
}

.why-shell {
  width: min(1240px, 100%);
  margin: 0 auto;
}

.why-item > div {
  margin: 0;
  width: min(520px, 100%);
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
    p {
      margin-top: 0;
      margin-bottom: 20px;
      text-align: justify;
      text-align-last: left;
    }
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
        background: var(--main-color);
      }

      &::after {
        content: '';
        position: absolute;
        top: 6px;
        left: 28px;
        width: 12px;
        height: 12px;
        border-radius: 0;
        transform: none;
        background: #4c71df;
      }
    }
  }
}

/* .why-item:nth-child(2) .why-item-answer strong::before {
  width: 56px;
} */

.why-item:nth-child(1) .why-item-answer strong::after {
  left: 5px;
  width: 10px;
  height: 10px;
  background: #4c71df;
}
.why-item:nth-child(2) .why-item-answer strong::after {
  left: 33px;
  width: 10px;
  height: 10px;
  background: #4c71df;
}

.why-item:nth-child(1) .why-item-answer strong::before {
  width: 48px;
}

.why-item:nth-child(2) .why-item-answer strong::before {
  width: 48px;
}

@media (max-width: 1024px) {
  .why-section {
    padding: 0 24px;
  }

  .why-intro {
    padding: 86px 0 34px;
  }

  .why-title {
    padding: 0;
  }
  .why-statement {
    margin: 22px auto 0;
    font-size: 18px;
    text-align: left;
  }
  .why {
    height: auto;
    grid-template-columns: 1fr;
    /* 定义网格有2行，每一行的高度最小为180px，最大可以伸展为可用空间的1/4（即自动分配剩余空间） */
    grid-template-rows: repeat(2, minmax(180px, 1fr));
  }
  .why-item > div {
    width: min(520px, 100%);
  }
  /* 第3和第4项右侧加边框 */
.why-item:nth-child(1),
.why-item:nth-child(2) {
  padding: 34px 24px 50px;
}

  .why-item:nth-child(1) {
    border-right: 0;
    border-bottom: 1px solid #e9e9e9;
  }
}

@media (max-width: 820px) {
  .why-section {
    padding: 0 20px;
  }
}

@media (max-width: 480px) {
  .why-section {
    padding: 0 16px;
  }
}
</style>
