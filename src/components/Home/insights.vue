<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

defineOptions({
  name: 'HomeWork',
})

</script>

<template>
  <section class="offer">
    <div class="offer-mask">
      <div class="offer-shell">
        <aside class="offer-copy">
          <p class="offer-eyebrow" data-aos="fade-up" data-aos-once="true">insights</p>
          <h2 class="offer-title" data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
            Perspectives from practice across UK–Asia education engagement.
          </h2>
          <p class="offer-intro" data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
            The articles below reflect observations developed through years of experience working with schools,
            institutions and education partners across the United Kingdom and Asia.
            <br />
            They are not intended as market reports or academic research.
            <br />
            Rather, they represent practical reflections on how international engagement, partnership development and
            educational collaboration evolve in real-world settings.
          </p>
        </aside>

        <div class="offer-layout">
          <div class="offer-list">
            <article class="offer-item" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
              <span class="offer-item-index" aria-hidden="true"></span>
              <div class="offer-item-copy">
                <h3>WHY MANY CONVERSATIONS NEVER BECOME PARTNERSHIPS</h3>
                <p>
                  One of the most common assumptions in international education is that more conversations naturally
                  lead to more partnerships.
                  <br />
                  In practice, this is rarely the case.
                  <br />
                  Over the years, schools have invested significant time and resources in exhibitions, conferences,
                  school visits and partnership discussions. Many of these interactions begin with genuine enthusiasm
                  and positive intentions.
                  <br />
                  Yet only a small number develop into long-term and meaningful collaboration.
                  <br />
                  The reason is rarely a lack of interest.
                  <br />
                  More often, it is a lack of alignment.
                  <br />
                  Schools frequently believe they are discussing the same opportunity when, in reality, they are
                  pursuing very different objectives.
                  <br />
                  A British school may be focused on educational exchange, cultural enrichment and long-term
                  relationship building.
                  <br />
                  Its counterpart may be focused on recruitment, branding, examination outcomes or local policy
                  priorities.
                  <br />
                  Both sides leave the meeting encouraged.
                  <br />
                  Neither side fully realises they are moving in different directions.
                  <br />
                  The challenge therefore is not creating conversations.
                  <br />
                  The challenge is identifying which conversations are worth continuing.
                  <br />
                  Successful partnerships are rarely built on enthusiasm alone.
                  <br />
                  They are built on shared expectations, compatible objectives and a willingness to invest time in
                  understanding one another.
                  <br />
                  The schools that achieve sustainable international engagement are often not those with the largest
                  number of contacts.
                  <br />
                  They are the schools that are most selective about where they invest their attention.
                </p>
              </div>
            </article>

            <article class="offer-item" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
              <span class="offer-item-index" aria-hidden="true"></span>
              <div class="offer-item-copy">
                <h3>THE MARKET IS NOT DISAPPEARING. IT IS GROWING UP.</h3>
                <p>
                  A question increasingly raised by schools is whether demand for international education is
                  declining.<br />
                  The answer may be more nuanced than it first appears.<br />
                  Demand is not disappearing.<br />
                  The market is maturing.<br />
                  Ten years ago, many families approached international education with a relatively simple
                  question:<br />
                  "Is it a British school?"<br />
                  For a significant number of families, the answer alone carried considerable weight.<br />
                  Today, the questions are different.<br />
                  Why this school?<br />
                  Why this country?<br />
                  Why the UK rather than Hong Kong?<br />
                  Why the UK rather than Singapore?<br />
                  Why the UK rather than a local international school?<br />
                  Families are becoming more informed, more selective and more thoughtful in their
                  decision-making.<br />
                  This shift is sometimes interpreted as declining demand.<br />
                  It may be more accurately understood as increasing sophistication.<br />
                  A mature market does not buy less.<br />
                  A mature market buys more carefully.<br />
                  As families become more selective, reputation becomes more important.<br />
                  Identity becomes more important.<br />
                  Trust becomes more important.<br />
                  Schools that understand clearly who they are and who they serve are likely to remain attractive.<br />
                  Schools that attempt to be everything to everyone may find the market increasingly difficult.<br />
                  The greatest risk is not declining demand.<br />
                  The greatest risk is losing clarity about a school's identity.<br />
                  In a market with more choice than ever before, families increasingly choose schools that know exactly
                  what they stand for.<br />
                </p>
              </div>
            </article>

            <article class="offer-item" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
              <span class="offer-item-index" aria-hidden="true"></span>
              <div class="offer-item-copy">
                <h3>WHAT FAMILIES ARE REALLY BUYING</h3>
                <p>
                  When discussing international education, schools often focus on curriculum, examination results and
                  university destinations.<br />
                  <br />
                  These factors remain important.<br />
                  However, they are rarely the whole story.<br />
                  Many families are not simply purchasing an academic programme.<br />
                  They are purchasing an environment.<br />
                  They are purchasing language immersion.<br />
                  They are purchasing independence.<br />
                  They are purchasing friendships.<br />
                  They are purchasing cultural understanding.<br />
                  Most importantly, they are purchasing experiences that cannot easily be replicated at home.<br />
                  <br />
                  This is one reason why the growth of British schools in Asia does not automatically mean the decline
                  of British schools in the United Kingdom.<br />
                  In many cases, these institutions are offering different products.<br />
                  A family choosing a British-branded school in Asia may be seeking academic continuity while remaining
                  close to home.<br />
                  A family choosing a British school in the UK is often seeking something much broader.<br />
                  They are seeking immersion in a different society, different relationships and different ways of
                  living.<br />
                  The distinction matters.<br />
                  Because it changes how schools should describe themselves.<br />
                  Many schools compete by talking about prestige.<br />
                  Others compete by talking about examination results.<br />
                  Increasingly, families are asking different questions.<br />
                  Will my child be known?<br />
                  Will my child be supported?<br />
                  Will my child grow in confidence?<br />
                  Will this school help my child become the best version of themselves?<br />
                  These questions are not replacing academic ambition.<br />
                  But they are becoming a larger part of the conversation.<br />
                  For schools, understanding what families are truly buying may be one of the most important questions
                  of all.<br />
                </p>

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

.offer-intro {
  margin: 24px 0 0;
  max-width: 700px;
  color: #10131a;
  font-size: clamp(17px, 1.45vw, 22px);
  line-height: 1.82;
  font-weight: 300;
}

.offer-layout {
  display: grid;
  /* 这里定义两列布局，第一列的宽度最小为0，占1.55比例，第二列最小为260px，占0.7比例 */
  /* grid-template-columns: minmax(0, 1.55fr) minmax(260px, 0.7fr); */
  gap: 32px;
  align-items: start;
}

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

.offer-item-copy p {
  margin: 0;
  color: #10131a;
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: 1.85;
  font-weight: 300;
}

.offer-item-copy p+p {
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
  color: #10131a;
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

@media (max-width: 980px) {
  .offer-shell {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .offer-copy {
    position: static;
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

  .offer-item-copy p {
    font-size: 14px;
    line-height: 1.75;
  }

  .offer {
    padding: 0px 24px;
  }
}
</style>
