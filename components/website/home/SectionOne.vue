<template>
  <section class="main-container pt-[20px] sm:pt-[40px] xl:pt-[100px]">
    <h1 class=" flex flex-col items-center max-w-[790px] font-bold mx-auto text-[24px] sm:text-[34px] md:text-[44px] xl:text-[56px]"><span class="text-gradient">{{ $t('first_section.title_one') }}</span> <span class="text-gradient">{{ $t('first_section.title_two') }}</span></h1>
    <SearchForm />
  </section>
</template>

<script setup>
import SearchForm from './SearchForm.vue';

</script>

<style>
  .text-gradient {
    font-weight: bold;
    background-image: linear-gradient(to right, #183867 10% , #EAA121 90%);
    background-clip: text;
    color: transparent;
    font-family: "PlayfairDisplay", Helvetica, sans-serif; 
  }
</style>