<template>
    <div>
        <SearchPopup v-if="isPopup" @closePopup="togglePopup" :data="state" />
        <form @submit.prevent="getSearchData"
            class=" mt-[30px] border border-[#06162d32] pt-4 px-6 pb-10 bg-white rounded-[8px] sm:mt-[70px] md:rounded-tr-[0px] md:rounded-bl-[0px] xl:mt[130px]">
            <div
                class="flex my-4 justify-center items-center border-b-[1px] pb-4 border-[#1838674d] gap-6 sm:border-[#eaa0217f] sm:flex-row lg:gap-x-14">
                <RadioBtn :title="$t('form.lable.one_way')" :toShow="state.type == 'one_way'"
                    @activateInput="changeType('one_way')" />
                <RadioBtn :title="$t('form.lable.round_trip')" :toShow="state.type == 'round_trip'"
                    @activateInput="changeType('round_trip')" />
            </div>
            <div class=" flex flex-col justify-center gap-x-[50px] gap-y-[40px] items-center  2xl:flex-row ">
                <div
                    class=" w-full flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-y-8 gap-x-6 place-items-center">
                    <GeneralInput id="from-input" name="from" :lable="$t('form.lable.from')" type="text" :hasErr="errors.from.state" :errMsg="$t('form.errors.add_from')"
                        :icon="FromIcon" :placeholder="$t('form.placeholder.flight_from')" @getInputVal="getInputVal"  />
                    <GeneralInput id="to-input" name="to" :lable="$t('form.lable.to')" type="text" :icon="ToIcon" :hasErr="errors.to.state" :errMsg="$t('form.errors.add_to')" 
                        :placeholder="$t('form.placeholder.where_to')" :withBorder="true" @getInputVal="getInputVal"  />

                    <DateInput id="depart-input" name="depart" :lable="$t('form.lable.depart')" :max="state.return"
                        @getInputVal="getInputVal" :hasErr="errors.depart.state" :errMsg="$t('form.errors.choose_date')"  />
                    <DateInput id="return-input" name="return" :lable="$t('form.lable.return')" :min="state.depart"
                        @getInputVal="getInputVal" :hasErr="errors.return.state" :errMsg="$t('form.errors.choose_date')"  />

                    <DropDownInput :inputType="true" :placeholder="$t('form.placeholder.choose_one')"
                        :options="classAndTraveleresOptions" :icon="ClassAndTraveleres" @changeVal="changeDropdownVal"
                        :lable="$t('form.lable.class_travelers')" :withPic="true"
                        :hasErr="errors.class.state" :errMsg="$t('form.errors.choose_option')"
                         />
                </div>
                <div class="w-full 2xl:w-fit">
                    <button title="form-submit"
                        class="flex items-center rounded-[4px] justify-center bg-[#183867] gap-x-3 w-full max-w-[300px] h-[48px] mx-auto 2xl:mx-[unset] 2xl:w-[64px] 2xl:bg-primary hover:opacity-70"
                        type="submit">
                        <img :src="Search" alt="search icon" />
                        <span class="text-white 2xl:hidden">{{ $t("form.search") }}</span>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
// imgs
import FromIcon from "~/assets/imgs/inputs/from.png";
import ToIcon from "~/assets/imgs/inputs/to.png";
import ClassAndTraveleres from "~/assets/imgs/inputs/class.png";
import Person from "~/assets/imgs/inputs/person.png";
import Family from "~/assets/imgs/inputs/family.png";
import Search from "~/assets/imgs/inputs/search.png";
// components
import DateInput from "~/components/generic/DateInput.vue";
import GeneralInput from "~/components/generic/GeneralInput.vue";
import DropDownInput from "~/components/generic/DropDownInput.vue";
import RadioBtn from "~/components/generic/RadioBtn.vue";
import SearchPopup from "../popups/SearchPopup.vue";
// validation 
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const classAndTraveleresOptions = [
    {
        value: 1,
        name_ar: "1 بالغ، الدرجة الاقتصادية",
        name_en: "1 adult, Economy",
        img: Person,
    },
    {
        value: 2,
        name_ar: "2 بالغ، الدرجة الاقتصادية",
        name_en: "2 adult, Economy",
        img: Family,
    },
    {
        value: 3,
        name_ar: "3 بالغين، الدرجة الاقتصادية",
        name_en: "3 adult, Economy",
        img: Family,
    },
    {
        value: 4,
        name_ar: "4 بالغين، الدرجة الاقتصادية",
        name_en: "4 adult, Economy",
        img: Family,
    },
    {
        value: 5,
        name_ar: "2 بالغ و طفل , الدرجة الاقتصادية",
        name_en: "2 adult with childern, Economy",
        img: Family,
    },
    {
        value: 6,
        name_ar: "3 بالغين و أطفال , الدرجة الاقتصادية",
        name_en: "3 adult with childern, Economy",
        img: Family,
    },
    {
        value: 7,
        name_ar: "4 بالغين و أطفال , الدرجة الاقتصادية",
        name_en: "4 adult with childern, Economy",
        img: Family,
    },

    {
        value: 8,
        name_ar: "1 بالغ، درجة رجال الأعمال",
        name_en: "1 adult, Business",
        img: Person,
    },
    {
        value: 9,
        name_ar: "2 بالغين، درجة رجال الأعمال",
        name_en: "2 adult, Business",
        img: Family,
    },
    {
        value: 10,
        name_ar: "3 بالغين، درجة رجال الأعمال",
        name_en: "3 adult, Business",
        img: Family,
    },
    {
        value: 11,
        name_ar: "4 بالغين، درجة رجال الأعمال",
        name_en: "4 adult, Business",
        img: Family,
    },
    {
        value: 12,
        name_ar: "2 بالغ و طفل , درجة رجال الأعمال ",
        name_en: "2 adult with childern, Business",
        img: Family,
    },
    {
        value: 13,
        name_ar: "3 بالغين و أطفال , درجة رجال الأعمال",
        name_en: "3 adult with childern, Business",
        img: Family,
    },
    {
        value: 14,
        name_ar: "4 بالغين و أطفال درجة رجال الأعمال",
        name_en: "4 adult with childern, Business",
        img: Family,
    },

    { value: 15, name_ar: "1 بالغ، الدرجة الأولى", name_en: "1 adult, first", img: Person },
    {
        value: 16,
        name_ar: "2 بالغين، الدرجة الأولى",
        name_en: "2 adult, first",
        img: Family,
    },
    {
        value: 17,
        name_ar: "3 بالغين، الدرجة الأولى",
        name_en: "3 adult, first",
        img: Family,
    },
    {
        value: 18,
        name_ar: "4 بالغين، الدرجة الأولى",
        name_en: "4 adult, first",
        img: Family,
    },
    {
        value: 19,
        name_ar: "2 بالغ و طفل , الدرجة الأولى",
        name_en: "2 adult with childern, first",
        img: Family,
    },
    {
        value: 20,
        name_ar: "3 بالغين و أطفال , الدرجة الأولى",
        name_en: "3 adult with childern, first",
        img: Family,
    },
    {
        value: 21,
        name_ar: "4 بالغين و أطفال , الدرجة الأولى",
        name_en: "4 adult with childern, first",
        img: Family,
    },
];
const getInputVal = (name, val) => {
    const names = ['from', 'to', 'depart', 'return', 'class'];
    console.log(name, val)
    if (names.includes(name)) state[name] = val;
}
const changeType = (val) => {
    const types = ['one_way', 'round_trip']
    if (types.includes(val)) state.type = val;
}
const changeDropdownVal = (val) => {
    state.class = classAndTraveleresOptions.find((item) => item.value == val);
}

const togglePopup = (val )=>{
   if(typeof val == "boolean") isPopup.value = val;
}

const isPopup = ref(false)
const state = reactive({
    type: "one_way",
    from: "",
    to: "",
    depart: "",
    return: "",
    class: "",
});
const errors = reactive({
    from: {
    state: false,
  },
  to: {
    state: false,
  },
  depart: {
    state: false,
  },
  return: {
    state: false,
  },
  class: {
    state: false,
  },

});
const rules = computed(() => {
  return {
    from: { required },
    to: { required },
    depart: { required },
    return: { required },
    class: { required },
  };
});
const v$ = useVuelidate(rules, state);



const getSearchData = async () => {

    const result = await v$.value.$validate();



    if(result){

        togglePopup(true)
    }

    const errorsArr = Object.keys(errors)

    errorsArr.forEach((item) => { 
  errors[item] = errors[item] || {};  // Ensure errors[item] exists
  errors[item].state = v$.value && v$.value[item] && v$.value[item].$error;
});



 
}

</script>

<style></style>
