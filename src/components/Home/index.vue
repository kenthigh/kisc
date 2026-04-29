<script setup lang="ts">
import HomeBanner from './banner.vue'
import Why from './why.vue'
import Offer from './offer.vue'

defineOptions({
  name: 'HomeSection',
})
</script>

<template>
  <section>
    <HomeBanner />
    <Why />
    <Offer />
    <Why />

    <Why />
  </section>
</template>
