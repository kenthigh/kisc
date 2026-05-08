<!-- src/components/Home/why.vue -->
<script setup lang="ts">
defineOptions({
  name: 'HomeWhy',
})
</script>

<template>
  <div>
    <div class="why-title" data-aos="fade" data-aos-offset="0">Why KISC ?</div>
    <section class="why">
      <div class="why-item">
        <div class="why-item-answer">
          <strong data-aos="fade-down" data-aos-offset="0"
            >The reality of international engagement
          </strong>
          <p data-aos="fade-down" data-aos-offset="0">
            Many schools take a broad approach when entering Asia, building multiple connections
            across different markets.
          </p>
          <p data-aos="fade-down" data-aos-offset="0">
            While this can be valuable at an early stage, only a small number of these connections
            develop into partnerships that are truly sustainable.
          </p>
          <p data-aos="fade-down" data-aos-offset="0">
            Without careful alignment, international engagement can consume significant time, effort
            and resources without delivering meaningful outcomes.
          </p>
        </div>
      </div>
      <div class="why-item">
        <div class="why-item-answer">
          <strong data-aos="fade-down" data-aos-offset="0"
            >A more focused and structured approach
          </strong>
          <p data-aos="fade-down" data-aos-offset="0">
            KISC supports schools in moving from initial exploration to carefully developed and
            well-aligned engagement.
          </p>
          <p data-aos="fade-down" data-aos-offset="0">
            Our work is not about increasing the volume of connections, but about identifying which
            partnerships are most likely to succeed.
          </p>
          <p data-aos="fade-down" data-aos-offset="0">
            We combine market understanding, practical experience, and long-term relationship
            development to ensure that each opportunity is both appropriate and sustainable.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.why-title {
  font-size: clamp(26px, 5vw, 40px);
  text-align: left;
  text-align: center;
  padding: 100px;
  background-color: #fff;
  color: #1f1f1f;
}

.why {
  width: 100%;
  display: grid;
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
  border-bottom: 1px solid #e9e9e9;
  background: #fff;
}

/* 奇数（单数）项右侧加边框 */
/* .why-item:nth-child(1),
.why-item:nth-child(2) {
  padding: 60px 24px;
} */

/* 第3和第4项右侧加边框 */
.why-item:nth-child(1),
.why-item:nth-child(2) {
  padding: 100px 24px;
  border-right: 1px solid #e9e9e9;
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
    p {
      margin-bottom: 20px;
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
  .why-title {
    padding: 100px 0 0px 0;
  }
  .why {
    height: auto;
    grid-template-columns: 1fr;
    /* 定义网格有2行，每一行的高度最小为180px，最大可以伸展为可用空间的1/4（即自动分配剩余空间） */
    grid-template-rows: repeat(2, minmax(180px, 1fr));
  }
  .why-item > div {
    width: 86%;
  }
}
</style>
