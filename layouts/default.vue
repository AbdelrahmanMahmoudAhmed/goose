<template>

  <div class=" relative z-30"> 
       <Header />

  </div>

  <div class=" relative z-20">
    <div class="min-h-[50vh] mt-[92px] lg:mt-[108px]">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { useGlobalStore } from "~/stores/global";
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";

const { locale, locales, setLocale } = useI18n();
const global = useGlobalStore();
</script>

<style>
body {
  transition: all 0.3s ease-out;
}
</style>
