<template>
   <teleport to="body">
  <div
    @click.self="closePopup"
    class="popup fixed top-0 left-0 h-[100vh] w-[100vw] bg-[#00000042] backdrop-blur-[2px] z-[99] overflow-auto flex justify-center items-center"
  >
  <div class=" w-[90%] max-w-[500px] rounded-[8px] border-[2px] py-[25px] px-[10px] border-primary bg-white h-fit md:px-[50px]">
    <h5 class="main-font text-primary flex justify-center font-bold ">
        <span class=" text-[30px] inline-block pb-3 border-b border-primary">{{ $t('global.search_data') }}</span>


    </h5>

    <div class="mt-[40px]">


      <div class="flex items-center justify-between gap-10 mb-[40px] ">
        <span class="text-[#333333] font-[700]">{{$t('form.lable.type')}}</span>
<span>{{  $t(`form.lable.${data.type}`) }}</span>
      </div>


      <div class="flex items-center justify-between gap-10 mb-[40px] ">
          <div  class="flex item-center gap-3">
            <img :src="FromIcon" alt="">
            <span class="text-[#333333] font-[700]">{{$t('form.lable.from')}}</span>
        </div>

        {{ data.from }}
        </div>
        <div class="flex items-center justify-between gap-10 mb-[40px] ">
          <div  class="flex item-center gap-3">
            <img :src="ToIcon" alt="">
            <span class="text-[#333333] font-[700]">{{$t('form.lable.to')}}</span>
        </div>

        {{ data.to }}
        </div>
        <div class="flex items-center justify-between gap-10 mb-[40px] ">
          <div  class="flex item-center gap-3">
            <img :src="DateIcon" alt="">
            <span class="text-[#333333] font-[700]">{{$t('form.lable.depart')}}</span>
        </div>

        {{ data.depart }}
        </div>
        <div class="flex items-center justify-between gap-10 mb-[40px] ">
          <div  class="flex item-center gap-3">
            <img :src="DateIcon" alt="">
            <span class="text-[#333333] font-[700]">{{$t('form.lable.return')}}</span>
        </div>

        {{ data.return }}
        </div>
        <div class="flex items-center justify-between flex-col gap-2 mb-[40px] ">
          <div  class="flex item-center gap-3">
            <img :src="ClassAndTraveleres" alt="">
            <span class="text-[#333333] font-[700]">{{$t('form.lable.class_travelers')}}</span>
        </div>

        {{ data.class[`name_${locale}`] }}
        </div>
    </div>

<div class="w-full flex justify-center">
  <button @click="closePopup" class="text-[18px] px-[40px] py-[8px] bg-primary text-white rounded-[8px]  hover:opacity-75 ">{{ $t('global.close') }}</button>

</div>

  </div>
  </div>
</teleport>
</template>
    
    <script setup>
import FromIcon from "~/assets/imgs/inputs/from.png";
import ToIcon from "~/assets/imgs/inputs/to.png";
import DateIcon from "~/assets/imgs/inputs/date.png"
import ClassAndTraveleres from "~/assets/imgs/inputs/class.png";


const emit = defineEmits(["closePopup"]);
const props = defineProps({
  data:{
    type:Object,
  }
})
const { locale } = useI18n();


const closePopup = () => {
  emit("closePopup" , false);
};


</script>
    
    <style >

    .main-font{
      font-family: "PlayfairDisplay", Helvetica, sans-serif
    }
</style>