<template>
    <div class="w-full">
        <label :for="id" class="flex item-center gap-3 mb-3">
            <img src="../../assets/imgs/inputs/date.png" alt="">
            <span class="text-[#333333] font-[700]">{{lable}}</span>
        </label>
        <input @input="getInputVal" :min="min || today" :max="max"  :id="id" :class="`w-full cursor-pointer text-[15px] py-2 mb-[2px] text-[#7C8DB0] uppercase ${locale == 'ar' && ' text-end' }  `" type="date" ref="dateInput" :name="name" />
        <p v-show="hasErr" class=" text-[12px] text-center text-red-400  mt-2">{{ errMsg }}</p>
    </div>
</template>

<script setup>
const { locale } = useI18n();
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
    lable: {
      type: String,
      required: true,
    },
    hasErr:{
        type:Boolean,
        default:false,
    },
    errMsg:{
      type : String
    },
    min:{
      type : String
    },
    max:{
      type : String
    },

})
const today = new Date().toISOString().split('T')[0];
const getInputVal = ( e)=>{
    emit('getInputVal' , props.name , e?.target?.value)
}

// Define a ref to access the input element
const dateInput = ref(null);

onMounted(() => {
    // Access the input element via ref and add event listener
    dateInput.value.addEventListener("click", () => {
        if (typeof dateInput.value.showPicker === "function") {
            dateInput.value.showPicker(); // Open date picker in Chrome
        } else {
            dateInput.value.focus(); // Fallback for unsupported browsers
        }
    });
});
</script>

<style>
/* Hide the date input icon in Chrome, Safari, and Firefox */
input[type="date"] {
    -webkit-appearance: none;
    -moz-appearance: textfield;  /* Chrome, Safari, Edge */
    appearance: none; /* Firefox */
}

/* Additional hack for certain versions of Chrome */
input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}
</style>