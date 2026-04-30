<script setup lang="ts">
defineOptions({
  name: 'HomeAbout',
})
</script>

<template>
  <section class="about">
    <div class="about-inner">
      <aside class="about-side">
        <p class="eyebrow" data-aos="fade-up">About KISC</p>
        <h2 data-aos="fade-up" data-aos-delay="40">
          Built on trusted UK-Asia relationships and sustained educational collaboration.
        </h2>
      </aside>

      <div class="about-body">
        <article class="about-card" data-aos="fade-up" data-aos-delay="70">
          <p>
            KISC is a UK-Asia education engagement platform built on long-term relationships across
            independent schools and international partners.
          </p>
        </article>

        <article class="about-card" data-aos="fade-up" data-aos-delay="100">
          <p>
            Our work is shaped by practical experience within both the UK independent school sector
            and the Asia education landscape. We support schools in making informed and well-aligned
            decisions when engaging with international markets, helping them identify appropriate
            partners and develop sustainable forms of collaboration.
          </p>
        </article>

        <article class="about-card" data-aos="fade-up" data-aos-delay="130">
          <p>
            Rather than focusing on volume of activity, we place emphasis on careful selection,
            cultural understanding, and long-term development.
          </p>
        </article>

        <blockquote class="about-quote" data-aos="fade-up" data-aos-delay="160">
          Our approach reflects a simple principle: meaningful partnerships are built over time, not
          through initial contact alone.
        </blockquote>

        <article class="about-card about-card--strong" data-aos="fade-up" data-aos-delay="190">
          <p>
            Our work has evolved over many years through ongoing collaboration with schools and
            partners, developing into a structured approach that continues to operate through an
            established network.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  padding: 104px 24px;
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)),
    url('@/assets/cool-background-inside-building-with-metal-textures.jpg') center center/cover
      no-repeat;
  background-attachment: fixed;
}

.about-inner {
  width: min(1160px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) minmax(0, 1.5fr);
  gap: 44px;
}

.about-side {
  position: sticky;
  top: 78px;
  align-self: start;
}

.eyebrow {
  margin: 0 0 12px;
  color: #7aa2ff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.about-side h2 {
  margin: 0;
  color: #f9fafb;
  font-size: clamp(30px, 4vw, 52px);
  line-height: 1.18;
}

.about-body {
  display: grid;
  gap: 14px;
}

.about-card {
  padding: 22px 24px;
  //   border: 1px solid rgb(255 255 255 / 14%);
  border-radius: 12px;
  background: rgb(255 255 255 / 4%);

  p {
    margin: 0;
    color: #e5e7eb;
    font-size: clamp(15px, 1.35vw, 19px);
    line-height: 1.78;
  }
}

.about-quote {
  margin: 2px 0;
  padding: 14px 4px 14px 18px;
  border-left: 1px solid #7aa2ff;
  color: #dbeafe;
  font-size: clamp(17px, 1.6vw, 23px);
  font-style: italic;
  line-height: 1.7;
}

.about-card--strong {
  border-color: rgba(53, 54, 55, 0.55);
  background: rgba(94, 95, 96, 0.1);
}

@media (max-width: 980px) {
  .about {
    padding: 76px 20px;
  }

  .about-inner {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .about-side {
    position: static;
  }
}

@media (max-width: 640px) {
  .about {
    padding: 58px 16px;
  }

  .about-card {
    padding: 16px;
  }

  .about-quote {
    padding-left: 12px;
  }
}
</style>
