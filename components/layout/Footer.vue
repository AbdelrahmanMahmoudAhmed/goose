<template>
  <footer class=" bg-[#fff] app-container pt-[60px] pb-[40px] flex justify-between gap-y-10 flex-wrap ">

    <div class=" w-full sm:w-[50%] xl:w-fit"><img class="block mx-auto sm:mx-[unset]" src="../../assets/imgs/logo.png" alt=""></div>

    <div class="text-center flex flex-col gap-3 text-[#7C8DB0] w-full sm:w-[50%] xl:w-fit sm:text-start">
      <h6 class="text-[#6E7491] text-[18px] font-[700]">{{ $t('footer.about') }}</h6> 
      <span class=" cursor-pointer hover:opacity-70">{{ $t('footer.about_us') }}</span>
      <span class=" cursor-pointer hover:opacity-70">{{ $t('footer.how_it_works') }}</span>
      <span class=" cursor-pointer hover:opacity-70">{{ $t('footer.blogs') }}</span>
      <span class=" cursor-pointer hover:opacity-70">{{ $t('footer.forum') }}</span>
    </div>

    <div class="text-center flex flex-col gap-3 text-[#7C8DB0] w-full sm:w-[50%] xl:w-fit sm:text-start">
      <h6 class="text-[#6E7491] text-[18px] font-[700]">{{ $t('footer.support') }}</h6> 
      <span class=" cursor-pointer hover:opacity-70">{{ $t('footer.help_center') }}</span>
      <span class=" cursor-pointer hover:opacity-70">{{ $t('footer.contact_us') }}</span>
      <span class=" cursor-pointer hover:opacity-70">{{ $t('footer.terms') }}</span>
      <span class=" cursor-pointer hover:opacity-70">{{ $t('footer.safety') }}</span>
      <span class=" cursor-pointer hover:opacity-70">{{ $t('footer.accessibility') }}</span>
    </div>


<div class=" w-full sm:w-[50%] xl:w-fit">
  <div class="text-center flex flex-col gap-3 text-[#7C8DB0] sm:text-start">
      <h6 class="text-[#6E7491] text-[18px] font-[700]">{{ $t('footer.get_the_app') }}</h6> 
      <span class=" cursor-pointer hover:opacity-70">{{ $t('footer.android') }}</span>
      <span class=" cursor-pointer hover:opacity-70">{{ $t('footer.ios') }}</span>
      <span class=" cursor-pointer hover:opacity-70">{{ $t('footer.mobile') }}</span>
    </div>
    <div class=" flex flex-col mt-5 gap-2 items-center sm:items-start"><img class="w-[135px] cursor-pointer relative hover:bottom-1" src="../../assets/imgs/ios.png" alt=""><img class="w-[135px] cursor-pointer relative hover:bottom-1" src="../../assets/imgs/google.png" alt=""></div>
</div>

  </footer>
</template>

<script setup>



const { locale, locales, setLocale } = useI18n();







</script>

<style>
</style>



