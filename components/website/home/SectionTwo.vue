<template>
  <section class="app-container mt-[60px] pb-[60px]">
    <h3 class="text-[24px] font-bold mb-4 lg:text-[36px] ">{{ $t('second_section.title') }}</h3>
    <p class="">{{ $t('second_section.description') }}</p>

    <div class="mt-20 grid gap-6 grid-cols-1 sm:grid-cols-2 md:gap-2 md:grid-cols-4 xl:gap-6 ">
        <CardItem v-for=" item in cardsData" :key="item.id" @changeActiveState="changeActiveState"  :data="item"/>
    </div>
  </section>
</template>

<script setup>
// components 
import CardItem from "./CardItem.vue"

// images 
import PicOne from "@/assets/imgs/one.png"
import PicTwo from "@/assets/imgs/two.png"
import PicThree from "@/assets/imgs/three.png"
import PicFour from "@/assets/imgs/four.png"

const cardsData = ref([
    {id:1 , isActive:false , image : PicOne , location_en : 'Manggarai Barat' , location_ar: 'مانجاراي بارات' , trip_name_en:'Flores Road Trip 3D2N' , trip_name_ar:"رحلة برية إلى فلوريس لمدة 3 أيام وليلتين" , duration :3 , cost:375},
    {id:2 , isActive:false , image : PicTwo , location_en : 'Bogor' , location_ar: 'بوجور' , trip_name_en:'Forrester Glamping Co Bogor' , trip_name_ar:"منتجع فورستر جلامبينج كو بوجور" , duration :1 , cost:375},
    {id:3 , isActive:false , image : PicThree , location_en : 'Jakarta' , location_ar: "جاكرتا" , trip_name_en:'Jakarta Bali flight ticket offers' , trip_name_ar:"عروض تذاكر الطائرة جاكرتا بالي" , duration :4 , cost:375},
    {id:4 , isActive:false , image : PicFour, location_en : 'Kota Semarang ' , location_ar: ' كوتا سيمارانج' , trip_name_en:'Kandri Tourism Village' , trip_name_ar:"قرية الكندري السياحية" , duration :7 , cost:375},
]);

const changeActiveState = ( id ) => {
  console.log("id" , id)
  cardsData.value = cardsData.value.map((item)=> {
    if(item.id == id ) item.isActive = true;
    else item.isActive = false;
    return item
  });


  console.log("cardsData.value" , cardsData.value)


}

</script>

<style>

</style>