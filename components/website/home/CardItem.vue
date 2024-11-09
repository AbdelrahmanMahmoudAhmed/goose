<template>
  <div @click="changeActiveState(data?.id)" :class="`${data?.isActive ? 'bg-[#EAA12112] border-[--main-color]' : 'bg-[#F0F0F073] border-[#fff]'} relative transition-all duration-200 rounded-[10px] border w-full shadow-sm cursor-pointer hover:shadow-xl hover:bottom-1 `">
    <div><img class="w-full" :src="data.image" alt=""></div>
    <div class=" px-[20px] pb-[20px] flex flex-col gap-1 ">
        <div class="flex items-center gap-1">
        <img class="w-[14px]" src="../../../assets/imgs/location.svg" alt="">
        <span class="text-[10px] text-[#8F8F8F]">{{ data?.[`location_${locale}`] }}</span>
    </div>
    <p class="text-[14px]  font-bold sm:text-[12px] lg:text-[14px] xl:text-[16px]">{{ data?.[`trip_name_${locale}`] }}</p>
  
    <span class="text-[14px]">{{ ` ${ locale == 'ar' ? useArabicNums( data?.duration) :  data?.duration} ${ data?.duration > 1 ? $t('second_section.day') :$t('second_section.days')} `  }} </span>
    <p class="text-[--main-color] text-[14px]"> <span>$</span>  <span> {{ locale == 'ar' ? useArabicNums(data?.cost) : data?.cost }} </span></p>
    </div>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n();
import useDateAndNums from "@/composables/useDateAndNums.js"

const { useArabicNums  } = useDateAndNums()

  const props = defineProps({
    data: {
      type: Object,
      required: true, 
    },
  });
  const emit = defineEmits(['changeActiveState']);

  const changeActiveState = ( id )=>{
    emit('changeActiveState' , id)
  }

</script>

<style>

</style>