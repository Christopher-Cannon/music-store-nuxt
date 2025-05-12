<script setup>
import PageHeader from "./components/layout/PageHeader.vue";
import PageFooter from "./components/layout/PageFooter.vue";

import { useRoute } from 'vue-router'
import { onMounted, watch } from 'vue'

const route = useRoute()

const scrollToHash = () => {
  if (route.hash) {
    // Wait for DOM to update
    setTimeout(() => {
      const el = document.querySelector(route.hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 5)
  }
}

// Trigger on initial load
onMounted(() => {
  scrollToHash()
})

// Trigger on route change
watch(() => route.fullPath, () => {
  scrollToHash()
})
</script>

<template>
  <div class="relative min-h-[100vh] flex flex-col" id="top">
    <PageHeader />
    <NuxtPage class="flex-1" />
    <PageFooter />
  </div>
</template>
