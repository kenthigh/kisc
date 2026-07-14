<script setup lang="ts">
import HomeBanner from './banner.vue'
import Foundation from './foundation.vue'
import Why from './why.vue'
import Offer from './offer.vue'
import Work from './work.vue'
import How from './how.vue'
import StrategicGrowth from './strategic-growth.vue'
import About from './about.vue'
import Schools from './schools.vue'
import Contact from './contact.vue'
import Insights from './insights.vue'

defineOptions({
  name: 'HomeSection',
})
</script>

<template>
  <section class="main-container">
    <div id="home">
      <HomeBanner />
    </div>
    <div id="foundation">
      <Foundation />
    </div>
    <div id="why">
      <Why />
    </div>
    <div id="offer">
      <Offer />
    </div>
    <div id="work">
      <Work />
    </div>
    <div id="how">
      <How />
    </div>
    <div id="strategic-growth">
      <StrategicGrowth />
    </div>
    <div id="Perspectives">
      <Insights />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="Engagement">
      <Schools />
    </div> 
    <div id="contact">
      <Contact />
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-container {
  padding-bottom: 40px;
}
</style>
