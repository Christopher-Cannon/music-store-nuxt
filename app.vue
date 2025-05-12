<script setup>
import PageHeader from "./components/layout/PageHeader.vue";
import PageFooter from "./components/layout/PageFooter.vue";
</script>

<template>
  <div class="relative min-h-[100vh] flex flex-col" id="top">
    <PageHeader />
    <NuxtPage class="flex-1" />
    <PageFooter />
  </div>
</template>
