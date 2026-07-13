<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'Perspectives',
})

const expandedArticles = ref<Record<string, boolean>>({})

const toggleArticle = (article: string) => {
  expandedArticles.value[article] = !expandedArticles.value[article]
}

const articles = [
  {
    id: 'outstanding-schools',
    title: "Outstanding Schools Don't Automatically Become Internationally Successful",
    subtitle: 'Educational excellence and international success are not the same thing.',
    body: [
      `British independent schools have every reason to be proud of what they do.`,
      `Their academic standards, pastoral care, traditions and co-curricular opportunities are among the strongest in the world. Every year I visit schools that genuinely provide outstanding education, led by dedicated Heads and exceptional staff.`,
      `Yet one question continues to come back.`,
      `Why do some excellent schools build a strong international presence while others, equally good, remain largely unknown outside the UK?`,
      `The answer is rarely educational quality.`,
      `More often, it is positioning.`,
      `---`,
      `Schools naturally describe themselves through what they provide.`,
      `GCSE results.`,
      `A Levels.`,
      `Boarding.`,
      `Music.`,
      `Sport.`,
      `Outdoor education.`,
      `Pastoral care.`,
      `All of these matter.`,
      `But international families do not begin by asking what a school offers.`,
      `They begin by asking what kind of future the school can offer their child.`,
      `Those are very different conversations.`,
      `---`,
      `Over the past nineteen years, I have spent much of my professional life working between British independent schools and families across Asia.`,
      `One observation has remained remarkably consistent.`,
      `Schools usually explain themselves.`,
      `Families imagine themselves.`,
      `A school talks about its facilities.`,
      `A family imagines confidence.`,
      `A school talks about outdoor education.`,
      `A parent imagines independence.`,
      `A school talks about rowing, swimming or drama.`,
      `A family imagines their son or daughter becoming a different person.`,
      `The educational product has not changed.`,
      `The perspective has.`,
      `---`,
      `This is why outstanding education does not automatically become international success.`,
      `International markets cannot value what they do not yet understand.`,
      `Educational excellence needs to be translated into language that overseas families immediately recognise as meaningful.`,
      `That does not mean changing the school.`,
      `Nor does it mean simplifying educational philosophy.`,
      `It means explaining educational value through the lens of the people making the decision.`,
      `---`,
      `The same principle applies beyond recruitment.`,
      `Increasingly, British independent schools are exploring international partnerships, overseas programmes and long-term strategic opportunities.`,
      `These decisions should not begin with the question:`,
      `"Which market should we enter?"`,
      `Instead, they should begin with another question:`,
      `"What makes our school genuinely distinctive, and why should that matter internationally?"`,
      `Until that question is answered clearly, every market will be difficult.`,
      `---`,
      `One of the greatest strengths of British independent education is that every school possesses its own identity.`,
      `Some schools are recognised for academic scholarship.`,
      `Others for pastoral care.`,
      `Some have exceptional sporting traditions.`,
      `Others have developed distinctive expertise in outdoor learning, music, leadership or boarding.`,
      `Those strengths already exist.`,
      `The challenge is not creating them.`,
      `The challenge is helping the right people understand them.`,
      `---`,
      `International development should never begin with promotion.`,
      `It should begin with identity.`,
      `Only when a school understands its own distinctive value can others recognise it as well.`,
      `Outstanding education deserves to be recognised.`,
      `But recognition rarely happens by itself.`,
      `It requires thoughtful positioning, trusted relationships and a long-term strategy built upon the school's genuine identity rather than short-term market trends.`,
      `That is where sustainable international development begins.`,
    ],
  },
]
</script>

<template>
  <section class="offer">
    <div class="offer-mask">
      <div class="offer-shell">
        <aside class="offer-copy">
          <p class="offer-eyebrow" data-aos="fade-up" data-aos-once="true">Perspectives</p>
          <h2 class="offer-title" data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
            Practical perspectives on leadership, international strategy and institutional development across British independent education.
          </h2>
        </aside>

        <div class="offer-layout">
          <div class="offer-list">
            <article
              v-for="article in articles"
              :key="article.id"
              class="offer-item"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <span class="offer-item-index" aria-hidden="true"></span>
              <div class="offer-item-copy">
                <h3>{{ article.title }}</h3>
                <p class="article-subtitle">{{ article.subtitle }}</p>
                <div
                  class="article-body"
                  :class="{ expanded: expandedArticles[article.id] }"
                  :id="`perspective-${article.id}`"
                >
                  <p
                    v-for="paragraph in article.body"
                    :key="paragraph"
                    :class="{ divider: paragraph === '---' }"
                  >
                    {{ paragraph }}
                  </p>
                </div>
                <button
                  class="read-toggle"
                  type="button"
                  :aria-expanded="Boolean(expandedArticles[article.id])"
                  :aria-controls="`perspective-${article.id}`"
                  @click="toggleArticle(article.id)"
                >
                  {{ expandedArticles[article.id] ? 'Read less' : 'Read more' }}
                </button>
              </div>
            </article>
          </div>
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
  background-color: #fff;
  color: #10131a;
  padding: 100px 24px;
}

.offer-shell {
  width: min(1240px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) minmax(0, 1.5fr);
  gap: 44px;
  align-items: start;
}

.offer-copy {
  position: sticky;
  top: 78px;
  align-self: start;
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

.offer-layout,
.offer-list {
  display: grid;
  gap: 20px;
}

.offer-item {
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-height: 100%;
  padding: 28px 28px 30px;
  background: rgb(255 255 255 / 2%);
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
  font-size: clamp(24px, 1.55vw, 28px);
  font-weight: 400;
  line-height: 1.3;
}

.article-subtitle {
  margin: 0 0 18px;
  color: #3f4c68;
  font-size: clamp(16px, 1.2vw, 19px);
  line-height: 1.6;
  font-weight: 300;
}

.article-body {
  position: relative;
  max-height: 9.6em;
  overflow: hidden;
  transition: max-height 0.28s ease;
}

.article-body::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 4.8em;
  background: linear-gradient(180deg, rgb(255 255 255 / 0%), #fff 82%);
  pointer-events: none;
}

.article-body.expanded {
  max-height: 3200px;
}

.article-body.expanded::after {
  display: none;
}

.article-body p {
  margin: 0;
  color: #10131a;
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: 1.85;
  font-weight: 300;
}

.article-body p + p {
  margin-top: 12px;
}

.article-body p.divider {
  width: 76px;
  height: 1px;
  margin: 28px 0;
  overflow: hidden;
  color: transparent;
  background: var(--main-color);
}

.read-toggle {
  display: inline-flex;
  align-items: center;
  margin-top: 16px;
  padding: 8px 0;
  border: 0;
  background: transparent;
  color: #4c71df;
  font-family: inherit;
  font-size: 15px;
  line-height: 1.2;
  cursor: pointer;
  touch-action: manipulation;
}

.read-toggle:focus-visible {
  outline: 2px solid #4c71df;
  outline-offset: 4px;
}

@media (max-width: 980px) {
  .offer-shell {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .offer-copy {
    position: static;
  }
}

@media (max-width: 820px) {
  .offer,
  .offer-mask {
    min-height: auto;
  }

  .offer-mask {
    padding: 72px 20px;
  }

  .offer-title {
    font-size: clamp(30px, 9vw, 48px);
    line-height: 1.12;
  }

  .offer-item {
    padding: 24px 22px;
  }

  .offer-item-copy h3 {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .offer-mask {
    padding: 30px 16px;
  }

  .offer-eyebrow {
    margin-bottom: 14px;
    font-size: 12px;
  }

  .offer-item {
    gap: 14px;
    padding: 20px 18px;
  }

  .offer-item-copy h3 {
    margin-bottom: 8px;
    font-size: 18px;
  }

  .article-body {
    max-height: 8.75em;
  }

  .article-body p {
    font-size: 14px;
    line-height: 1.75;
  }

  .read-toggle {
    min-height: 44px;
    font-size: 14px;
  }

  .offer {
    padding: 0 24px;
  }
}
</style>
