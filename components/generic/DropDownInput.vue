<template>
  <div class="w-full">
    <label  class="flex item-center gap-3 mb-1">
            <img :src="icon" alt="">
            <span class="text-[#333333] font-[700]">{{lable}}</span>
        </label>
    <Multiselect
      v-model="value"
      :options="props.options"
      :label="locale == 'ar' ? 'name_ar' : 'name_en'"
      :placeholder="props.placeholder"
      :mode="props.mode || 'single'"
      :clear-on-select="false"
      @change="changeVal"
      :show-labels="true"
      :multiple="true"
      :hide-selected="false"

      
    >
      <template v-if="withPic"  v-slot:option="{ option }">
  
  <div class="flex items-center border-b border-[#06162d32] w-full pb-4 ">
    <img class="character-option-icon  p-2" :src="option?.img" />
    {{ props.locale == "ar" ? option.name_ar : option.name_en }} 
  </div>
      </template>
    </Multiselect>
    <p v-show="hasErr" class=" text-[12px] text-center text-red-400  mt-2">{{ errMsg }}</p>

  </div>
</template>

<script setup>
import Multiselect from "@vueform/multiselect";
const { locale } = useI18n();

const props = defineProps([
  "icon",
  "lable",
  "options",
  "withPic",
  "placeholder",
  "hasErr",
  "errMsg",

]);
const emit = defineEmits(["changeVal"]);

const value = ref(null);


const changeVal = (e) => {
  emit("changeVal", e);
};

</script>

<style src="@vueform/multiselect/themes/default.css">
</style>
<style scoped>
.custom-multiselect .multiselect__content {
  /* Customize shadow */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  /* Optional: Styling for better appearance */
  background-color: #fff;
  padding: 8px;
}
</style>


