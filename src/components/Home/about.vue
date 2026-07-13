<script setup lang="ts">
defineOptions({
  name: 'HomeAbout',
})

const storyParagraphs = [
  `KISC did not begin as a consultancy.`,
  `It evolved naturally from nearly two decades of practical work through KK Tiger International.`,
  `Over the years, Harold and his team have worked alongside British independent schools across Asia through student pathways, immersion programmes, institutional partnerships and long-term educational collaboration.`,
  `As schools increasingly sought strategic advice beyond recruitment, KISC was established as the natural evolution of that experience.`,
  `Today KISC supports schools in building sustainable international growth through strategy, reputation, partnerships and institutional development.`,
]

const haroldParagraphs = [
  `Harold has over 19 years' experience working between the UK and Asia and supports British independent schools in building sustainable long-term opportunities across the Asia-Pacific region.`,
  `Alongside his work through KISC, Harold serves within the leadership team of Austin Friars, a British independent school, giving him current first-hand insight into the opportunities and challenges facing schools from both an operational and strategic perspective.`,
  `Working with his team, he advises on international strategy, market positioning, brand and reputation development, strategic partnerships, institutional collaboration and the design of sustainable international programmes.`,
  `His work increasingly includes supporting schools with broader strategic initiatives, including cross-border educational projects and introducing schools to trusted development and investment partners where appropriate.`,
  `His approach is centred on helping schools build a meaningful and sustainable presence across Asia through clear strategy, strong reputation and carefully aligned partnerships, with student recruitment viewed as the outcome of long-term institutional development rather than the starting point.`,
]
</script>

<template>
  <section class="about">
    <div class="about-inner">
      <aside class="about-side">
        <p class="eyebrow" data-aos="fade-up" data-aos-once="true">Our Story</p>
        <h2 data-aos="fade-up" data-aos-once="true" data-aos-delay="40">
          Built from long practical experience between British independent schools and Asia.
        </h2>
      </aside>

      <div class="about-body">
        <article class="story-block" data-aos="fade-up" data-aos-once="true" data-aos-delay="70">
          <p v-for="paragraph in storyParagraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </article>

        <div class="story-divider" aria-hidden="true"></div>

        <article class="story-block" data-aos="fade-up" data-aos-once="true" data-aos-delay="110">
          <h3>Harold</h3>
          <p v-for="paragraph in haroldParagraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  padding: 112px 24px;
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.9)),
    url('https://res.cloudinary.com/dzk8mhglj/image/upload/c_fill,w_2400,h_1600/v1778297108/cool-background-inside-building-with-metal-textures_l7sxfc.jpg')
      center center/cover no-repeat;
  background-attachment: fixed;
}

.about-inner {
  width: min(1240px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) minmax(0, 1.5fr);
  gap: 56px;
}

.about-side {
  position: sticky;
  top: 78px;
  align-self: start;
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--main-color);
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
  gap: 42px;
}

.story-block {
  display: grid;
  gap: 16px;
  max-width: 820px;
}

.story-block p {
  margin: 0;
  color: #e5e7eb;
  font-size: clamp(16px, 1.35vw, 19px);
  line-height: 1.82;
  font-weight: 300;
}

.story-block h3 {
  margin: 0 0 4px;
  color: #f9fafb;
  font-size: clamp(24px, 2.2vw, 34px);
  line-height: 1.2;
}

.story-divider {
  width: 76px;
  height: 1px;
  background: var(--main-color);
}

@media (max-width: 980px) {
  .about {
    padding: 76px 20px;
  }

  .about-inner {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .about-side {
    position: static;
  }
}

@media (max-width: 640px) {
  .about {
    padding: 58px 16px;
    background-attachment: scroll;
  }

  .about-body {
    gap: 32px;
  }

  .story-block {
    gap: 14px;
  }

  .story-block p {
    font-size: 15px;
    line-height: 1.76;
  }
}
</style>
