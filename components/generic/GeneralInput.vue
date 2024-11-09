<template>
    <div class="w-full">
        <label :for="id" class="flex item-center gap-3 mb-3">
            <img :src="icon" alt="">
            <span class="text-[#333333] font-[700]">{{lable}}</span>
        </label>
        <input @input="getInputVal" :id="id" :class="` w-full cursor-pointer text-[15px] text-[#7C8DB0] py-2 placeholder:text-[#7C8DB0]  ${withBorder ? 'border-b-[2px] border-primary' : 'mb-[2px]'} `" :type="type" ref="dateInput" :name="name"  :placeholder="placeholder" />
        <p v-show="hasErr" class=" text-[12px] text-red-400 text-center mt-2">{{ errMsg }}</p>
    </div>
</template>

<script setup>
const emit = defineEmits(['getInputVal'])
const props = defineProps({
    id: {
    type : String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    lable: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    withBorder:{
        type:Boolean,
        defult:false,
    },
    hasErr:{
        type:Boolean,
        default:false,
    },
    errMsg:{
      type : String
    }
})

const getInputVal = ( e)=>{
    emit('getInputVal' , props.name , e?.target?.value)
}

</script>

<style>

</style>