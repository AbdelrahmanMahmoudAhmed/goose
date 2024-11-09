<template>

  <div class="relative ">


  <!-- <div v-if="false">
    <Loader />
  </div> -->

  <img class=" absolute top-0 left-0 w-full" src="../assets/imgs/main_bg.png" alt="">
  
  <div id="home-page" class="min-h-[100vh] relative z-10">
    <SectionOne />
    <SectionTwo />


</div>
</div>
</template>

<script setup>


import { useGlobalStore } from "../stores/global"
import SectionOne from "~/components/website/home/SectionOne.vue";
import SectionTwo from "~/components/website/home/SectionTwo.vue";
import Loader from "~/components/layout/Loader.vue";

const { locale, locales, setLocale } = useI18n();
const global = useGlobalStore();




</script>

<style>
</style>