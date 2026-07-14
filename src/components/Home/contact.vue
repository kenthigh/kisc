<script setup lang="ts">
import logo from '@/assets/kisc_logo.png'

defineOptions({
  name: 'HomeContact',
})
</script>

<template>
  <section class="contact">
    <img class="contact-logo" :src="logo" alt="KISC" data-aos="fade-down" data-aos-once="true" />
    <div class="contact-grid">
      <div class="contact-panel contact-left">
        <div class="contact-left-inner">
          <div class="contact-copy">
            <p
              class="contact-intro"
              data-aos="fade-down"
              data-aos-delay="40"
              data-aos-once="true"
              data-aos-offset="-200"
            >
              KISC welcomes conversations with:
            </p>

            <ul
              class="contact-audience"
              data-aos="fade-down"
              data-aos-delay="80"
              data-aos-once="true"
              data-aos-offset="-200"
            >
              <li>Heads</li>
              <li>Governors</li>
              <li>Senior Leaders</li>
              <li>Education Groups</li>
              <li>School Owners</li>
              <li>Institutional Partners</li>
              <li>Developers</li>
              <li>Strategic Partners</li>
            </ul>

            <a
              class="contact-button"
              href="mailto:info@kisc.co.uk"
              data-aos="fade-down"
              data-aos-delay="120"
              data-aos-once="true"
              data-aos-offset="-200"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>

      <div class="contact-panel contact-right">
        <div class="contact-right-inner">
          <p class="contact-email" data-aos="fade-down" data-aos-once="true" data-aos-offset="-200">
            info@kisc.co.uk
          </p>
          <p
            class="contact-locations"
            data-aos="fade-down"
            data-aos-delay="40"
            data-aos-once="true"
            data-aos-offset="-200"
          >
            London | Chengdu | Tokyo
          </p>
          <p
            class="contact-note"
            data-aos="fade-down"
            data-aos-delay="80"
            data-aos-once="true"
            data-aos-offset="-200"
          >
            We work with a limited number of schools and partners each year.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact {
  width: 100%;
  background: #fff;
  border-top: 1px solid #e9e9e9;
  // border-bottom: 1px solid #e9e9e9;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.contact-panel {
  display: flex;
  justify-content: center;
  min-height: 520px;
  padding: 90px 32px;
  background: #fff;
}

.contact-left {
  align-items: flex-start;
  border-right: 1px solid #e9e9e9;
}

.contact-left-inner,
.contact-right-inner {
  width: min(420px, 100%);
}

.contact-left-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.contact-logo {
  display: block;
  width: min(300px, 72vw);
  height: auto;
  margin: 0 auto 40px;
}

.contact-copy {
  width: 100%;
  max-width: 520px;
}

.contact-intro {
  margin: 0 0 20px;
  color: #1f1f1f;
  font-size: clamp(18px, 1.8vw, 26px);
  line-height: 1.35;
  font-weight: 400;
}

.contact-audience {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 28px;
  margin: 0 0 36px;
  padding: 0;
  color: #1f1f1f;
  font-size: clamp(14px, 1.1vw, 17px);
  line-height: 1.5;
  list-style: none;

  li {
    padding: 2px 0;
  }
}

.contact-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 170px;
  padding: 14px 28px;
  border: 1px solid #1f1f1f;
  color: #1f1f1f;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: var(--main-color);
    color: #fff;
    border-color: var(--main-color);
  }
}

.contact-right-inner {
  text-align: left;
}

.contact-email {
  margin: 0;
  color: #1f1f1f;
  font-size: clamp(28px, 3vw, 44px);
  line-height: 1;
  font-weight: 100;
  word-break: break-word;
}

.contact-locations {
  margin: 22px 0 0;
  color: #5c5c5c;
  font-size: clamp(15px, 1.1vw, 17px);
  line-height: 1.65;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.contact-note {
  position: relative;
  margin: 38px 0 0;
  padding-top: 22px;
  color: #4b4b4b;
  font-size: clamp(15px, 1.08vw, 18px);
  line-height: 1.8;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 56px;
    height: 1px;
    background: var(--main-color);
  }
}

@media (max-width: 1024px) {
  .contact-panel {
    min-height: 460px;
    padding: 72px 28px;
  }

  .contact-left-inner,
  .contact-right-inner {
    width: min(440px, 100%);
  }
}

@media (max-width: 820px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-left {
    border-right: 0;
    // border-bottom: 1px solid #e9e9e9;
  }

  .contact-panel {
    min-height: auto;
    padding: 56px 22px;
  }

  .contact-logo {
    width: min(220px, 60vw);
    margin-bottom: 28px;
  }
}

@media (max-width: 480px) {
  .contact-panel {
    padding: 44px 18px;
  }

  .contact-intro {
    margin-bottom: 22px;
    font-size: clamp(20px, 7vw, 28px);
  }

  .contact-audience {
    grid-template-columns: 1fr;
    gap: 8px;
    margin-bottom: 30px;
    font-size: 15px;

    li {
      padding: 1px 0;
    }
  }

  .contact-button {
    min-width: 154px;
    padding: 12px 22px;
    font-size: 14px;
  }

  .contact-email {
    font-size: clamp(24px, 8vw, 32px);
    line-height: 1;
  }

  .contact-locations {
    margin-top: 18px;
    font-size: 13px;
    letter-spacing: 0.08em;
  }

  .contact-note {
    margin-top: 28px;
    padding-top: 18px;
    font-size: 14px;
    line-height: 1.75;
  }
}
</style>
