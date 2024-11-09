<template>
  <div @click="activateInput" class="flex items-center gap-[15px] cursor-pointer">
    <span
      :class="`flex items-center justify-center rounded-full border-2 w-[25px] h-[25px]  ${toShow ? 'border-primary' : 'border-[#C2CFE0]' } `"
    >
      <span
        v-if="toShow"
        class=" block rounded-full  bg-primary w-[11px] h-[11px] "
      ></span>
    </span>
    <span v-if="title" class="font-[500]">{{ title }}</span>
  </div>
</template>


<script setup>
const props = defineProps({
  toShow: {
    type : Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },

  });
const emit = defineEmits(["activateInput"]);
const activateInput = ( ) => {
  emit('activateInput')
}



</script>

<style>
</style>