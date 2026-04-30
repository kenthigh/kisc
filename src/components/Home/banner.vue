<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

defineOptions({
  name: 'HomeBanner',
})

const menuOpen = ref(false)
const bgOffsetX = ref(0)

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'Why KISC', href: '#why' },
  { label: 'What We Offer', href: '#offer' },
  { label: 'Our Work', href: '#work' },
  { label: 'How We Work', href: '#how' },
  { label: 'About', href: '#about' },
  { label: 'Schools', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const SCROLL_SPEED = 0.1

const updateBackground = () => {
  bgOffsetX.value = window.scrollY * SCROLL_SPEED
}

const imageStyle = computed(() => ({
  transform: `translate3d(${bgOffsetX.value}px, 0, 0)`,
}))

onMounted(() => {
  updateBackground()
  window.addEventListener('scroll', updateBackground, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateBackground)
})
</script>

<template>
  <section class="banner">
    <header class="banner-header">
      <a class="logo" href="#home" aria-label="KISC 首页">KISC</a>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        ☰
      </button>

      <nav class="menu" :class="{ open: menuOpen }" aria-label="主导航">
        <a v-for="item in menuItems" :key="item.label" class="menu-item" :href="item.href">
          {{ item.label }}
        </a>
      </nav>
    </header>

    <div class="banner-content">
      <h1 class="banner-content-title" data-aos="fade-right" data-aos-delay="10">KISC</h1>
      <h1 class="sub-title" data-aos="fade-right" data-aos-delay="30">
        International School Collaboration
      </h1>
      <div class="sub-content-box">
        <h3 class="slogan" data-aos="fade-right" data-aos-delay="60">
          A trusted bridge between UK independent schools and Asia
        </h3>
        <p data-aos="fade-right" data-aos-delay="100">
          We support schools in developing meaningful, well-aligned and sustainable engagement with
          international partners, particularly in China.
        </p>
      </div>
    </div>

    <img
      src="@/assets/city-business-buildings-near-each-other.jpg"
      alt="Banner Background"
      aria-hidden="true"
      draggable="false"
      class="bg-img"
      :style="imageStyle"
    />
  </section>
</template>

<style scoped lang="scss">
// dd7f3e

.banner {
  position: relative;
  width: 100%;
  height: 688px;
  min-height: 688px;
  overflow: hidden;
  color: #fff;
  // background-image:
  //   linear-gradient(180deg, rgb(0 0 0 / 60%) 0%, rgb(0 0 0 / 50%) 36%, rgb(0 0 0 / 55%) 100%),
  //   url('@/assets/residential-building-facades-rotterdam-netherlands.jpg');
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgb(0 0 0 / 60%) 0%,
      rgb(0 0 0 / 50%) 36%,
      rgb(0 0 0 / 55%) 100%
    );
    z-index: 1;
    pointer-events: none;
  }
}

.bg-img {
  $bg-expand: 100px;

  position: absolute;
  top: -10px;
  left: -4%;
  width: calc(100% + $bg-expand);
  height: calc(100% + $bg-expand);
  // width: 100%;
  // height: 100%;
  object-fit: cover;
  transform-origin: center;
  will-change: transform;
  z-index: 0;
  pointer-events: none;
  user-select: none;
}

.banner-header {
  position: relative;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 48px;
}

.logo {
  font-family: 'Bodoni Moda', serif;
  font-optical-sizing: auto;
  font-weight: 100;
  color: inherit;
  font-size: 24px;
  letter-spacing: 1px;
  text-decoration: none;
}

.menu {
  display: flex;
  align-items: center;
  gap: 28px;
}

.menu-item {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: inherit;
  font-size: 15px;
  line-height: 1;
  text-decoration: none;
  transition: color 0.2s ease;
}

.menu-item:hover {
  color: var(--main-color);
}

.menu-toggle {
  display: none;
  border: 0;
  background: transparent;
  color: inherit;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
}

.banner-content {
  position: relative;
  z-index: 2;
  max-width: 90%;
  padding: 96px 48px 0;
}

.sub-content-box {
  width: 70%;
}

.banner-content {
  .sub-title {
    margin-bottom: 40px;
    font-size: clamp(30px, 4.5vw, 60px);
  }

  .banner-content-title {
    display: inline-block;
    &::before {
      content: '';
      position: absolute;
      bottom: 5px;
      width: 100%;
      height: 1px;
      background-color: var(--main-color);
    }
  }

  .slogan {
    font-size: clamp(24px, 3vw, 40px);
  }

  h1 {
    margin: 0;
    font-size: clamp(42px, 5vw, 100px);
    font-weight: 200;
    line-height: 1.1;
  }

  h3 {
    margin: 0;
    font-weight: 200;
    line-height: 1.1;
    margin-bottom: 5px;
  }

  p {
    margin: 0;
    font-size: clamp(12px, 1.5vw, 16px);
    font-weight: 200;
    line-height: 1.1;
  }
}

@media (max-width: 900px) {
  .banner {
    height: 70vh;
    min-height: 440px;
  }

  .banner-header {
    padding: 18px 20px;
  }

  .menu-toggle {
    display: inline-block;
  }

  .menu {
    position: absolute;
    z-index: 999;
    top: 68px;
    right: 20px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    min-width: 150px;
    padding: 14px;
    border-radius: 10px;
    background: rgb(0 0 0 / 65%);
    backdrop-filter: blur(6px);
  }

  .menu.open {
    display: flex;
  }

  .banner-content {
    padding: 66px 20px 0;
  }

  .banner-content p {
    font-size: 14px;
  }

  .banner-content {
    .sub-title {
      margin-bottom: 20px;
    }
  }
}
</style>
