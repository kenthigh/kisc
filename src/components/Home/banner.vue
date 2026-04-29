<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

defineOptions({
  name: 'HomeBanner',
})

const menuOpen = ref(false)
const bgOffsetX = ref(0)

const menuItems = [
  { label: 'Home', href: '#' },
  { label: 'Our Work', href: '#' },
  { label: 'How We Work', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Schools', href: '#' },
  { label: 'Contact', href: '#' },
]

const SCROLL_SPEED = 0.18

const updateBackgroundOffset = () => {
  bgOffsetX.value = window.scrollY * SCROLL_SPEED
}

const bannerStyle = computed(() => ({
  backgroundPosition: `center, calc(50% + ${bgOffsetX.value}px) center`,
}))

onMounted(() => {
  updateBackgroundOffset()
  window.addEventListener('scroll', updateBackgroundOffset, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateBackgroundOffset)
})
</script>

<template>
  <section class="banner" :style="bannerStyle">
    <header class="banner-header">
      <a class="logo" href="#" aria-label="KISC 首页"> KISC </a>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        ☰
      </button>

      <nav class="menu" :class="{ open: menuOpen }" aria-label="主导航">
        <a
          v-for="item in menuItems"
          :key="item.label"
          class="menu-item"
          :href="item.href"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </a>
      </nav>
    </header>

    <div class="banner-content">
      <h1 class="banner-content-title">KISC</h1>
      <h2>International School Collaboration</h2>
      <h3>A trusted bridge between UK independent schools and Asia</h3>
      <p class="banner-content-text">
        We support schools in developing meaningful, well-aligned and sustainable engagement with
        international partners, particularly in China.
      </p>
    </div>
  </section>
</template>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 688px;
  min-height: 688px;
  color: #fff;
  background-image:
    linear-gradient(180deg, rgb(0 0 0 / 60%) 0%, rgb(0 0 0 / 50%) 36%, rgb(0 0 0 / 55%) 100%),
    url('@/assets/residential-building-facades-rotterdam-netherlands.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.banner-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 48px;
}

.logo {
  color: inherit;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 1px;
  text-decoration: none;
}

.menu {
  display: flex;
  align-items: center;
  gap: 28px;
}

.menu-item {
  color: inherit;
  font-size: 15px;
  text-decoration: none;
  transition: color 0.2s ease;
}

.menu-item:hover {
  color: #7e55f6;
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
  max-width: 720px;
  padding: 96px 48px 0;
}

.banner-content h1 {
  margin: 0;
  font-size: clamp(34px, 5vw, 80px);
  font-weight: 200;
  line-height: 1.1;
}

.banner-content p {
  margin-top: 14px;
  font-size: 18px;
  line-height: 1.6;
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
    font-size: 16px;
  }
}
</style>
