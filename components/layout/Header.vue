<template>
  <header id="app-header" :class="`fixed top-0 left-0 w-full z-30 `">
    <div class="main-container h-full relative">
      <div class="h-[92px] flex items-center lg:h-[108px]">
        <div class="h-full w-full flex justify-between items-center">
          <div class="flex items-center gap-[50px]">
            <nuxt-link to="/" class="cursor-pointer">
              <img src="../../assets/imgs/logo.png" alt="" />
            </nuxt-link>
          </div>
          <ul class="main-ul hidden gap-[20px] text-[16px] xl:gap-[48px] lg:flex lg:justify-center lg:items-center">
            <li>
              <nuxt-link to="/" class=" transition-all duration-100 hover:text-[--main-color]">
              {{ $t("header.home") }}
            </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/promo" class=" transition-all duration-100 hover:text-[--main-color]">

              {{ $t("header.promo") }}
            </nuxt-link>

            </li>
            <li >
              <nuxt-link to="/booking" class=" transition-all duration-100 hover:text-[--main-color]">

              {{ $t("header.my_booking") }}
            </nuxt-link>

            </li>
          </ul>
          <div class="flex h-full items-center lg:self-start">
            <div class="relative">
              <!-- lang button  -->
              <button @click="toggleLangPopup(true)"
                class="text-[--main-color] border border-[--main-color] px-[10px] h-[30px] rounded-[4px] mx-2 flex items-center justify-center gap-1">
                <span>{{ $t("header.change_lang") }}</span>
                <img class="w-[20px]" src="../../assets/imgs/dropdown.svg" alt="" />
              </button>

              <!-- lang popup  -->
              <div v-if="isLangPopup"
                class="absolute z-20 left-0 w-full p-2 bg-[#DBECFD] mt-1 flex flex-col gap-1 items-center justify-center rounded-md h-[80px]">
                <img @click="changeLang('ar')"
                  class="w-[40px] transition-all duration-300 cursor-pointer hover:w-[45px]"
                  src="../../assets/imgs/arabic.png" alt="" />
                <img @click="changeLang('en')"
                  class="w-[40px] transition-all duration-300 cursor-pointer hover:w-[45px]"
                  src="../../assets/imgs/english.png" alt="" />
              </div>
            </div>
            <!-- backdrop  -->
            <div @click="toggleLangPopup(false)" v-if="isLangPopup"
              class="fixed z-10 top-0 left-0 h-[100vh] w-[100vw]"></div>

            <NuxtLink to="/login"
              :class="`${locale == 'en' ? 'mr-[10px]' : 'ml-[10px]'
                } hidden h-[30px] whitespace-nowrap bg-[--main-color] text-[16px] text-white px-[10px] rounded-[4px] items-center lg:flex`">
              {{ $t("header.sign_in") }}
            </NuxtLink>
            <button :class="` ${locale == 'en' ? 'mr-[10px] 2xl:mr-[30px]' : 'ml-[10px] 2xl:ml-[30px]'
              } bg-[#fff] w-[30px] h-[30px] flex items-center justify-center rounded-[4px] lg:hidden`"
              @click="openSidebar">
              <img class=" h-[30px]" src="../../assets/imgs/burger.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- sidebar backdrop  -->
    <div @click="closeSidebar" v-if="toggleSidebar"
      class="fixed top-0 left-0 blur-sm z-10 w-[100vw] h-[100vh] backdrop-blur-[2px]"></div>
    <div
      :class="`${toggleSidebar
          ? 'rtl:right-0 left-0'
          : 'rtl:right-[-200px] left-[-200px] sm:rtl:right-[-300px] sm:left-[-300px]'
        } duration-700 fixed flex flex-col justify-between text-[--secondary-color] gap-[50px] overflow-auto z-20 top-0 h-[100vh] w-[200px] py-6 px-2 shadow-lg bg-[#fff] sm:w-[300px] lg:hidden `">
      <div>
        <div class="flex justify-center pb-5">
          <img src="../../assets/imgs/logo.png" alt="" />
        </div>

        <ul class=" sidbar-ul mb-[60px] text-[16px] xl:text-[20px] 2xl:text-[20px]">
          <li :class="` cursor-pointer mb-3 transition-all duration-300 hover:px-2`">
            <nuxt-link class="w-full h-full block" to="/">
            <span>
            {{ $t("header.home") }}
          </span>
          </nuxt-link>
          </li>
          <li :class="` cursor-pointer mb-3 transition-all duration-300 hover:px-2`">
            <nuxt-link class="w-full h-full block" to="/promo">
              <span>
            {{ $t("header.promo") }}
          </span>
          </nuxt-link>
          </li>
          <li :class="`cursor-pointer mb-3 transition-all duration-300 hover:px-2`">
            <nuxt-link class="w-full h-full block" to="/booking">
              <span>
            {{ $t("header.my_booking") }}
          </span>
          </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="self-end w-full left-0 bottom-0 mb-8 px-[8px]">
        <NuxtLink to="/login"
          :class="`bg-[--main-color] text-white text-center font-bold text-[18px] block rounded-md w-full mb-2 py-[2px] transition-all duration-300 hover:opacity-70`">
          {{ $t("header.sign_in") }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n();
const isLangPopup = ref(false);
const toggleSidebar = ref(false);


const toggleLangPopup = (bool) => {
  if (typeof bool == "boolean") {
    isLangPopup.value = bool;
  }
};
const addHeaderStyleOnScroll = () => {
  const header = document.getElementById("app-header");

  const handleScroll = () => {
    // Check if scroll position is more than 120 pixels
    if (window.scrollY > 120) {
      header.classList.add('shadow-3xl', 'bg-[#f3f9ff]');
    } else {
      header.classList.remove('shadow-3xl', 'bg-[#f3f9ff]');
    }
  };

  // Use requestAnimationFrame to throttle scroll event calls
  let scrollTimeout;
  window.addEventListener("scroll", () => {
    if (!scrollTimeout) {
      scrollTimeout = requestAnimationFrame(() => {
        handleScroll();
        scrollTimeout = null;
      });
    }
  });
};
const openSidebar = () => {
  toggleSidebar.value = true;
};
const closeSidebar = () => {
  toggleSidebar.value = false;
};
const changeLang = (lang) => {
  const langs = ["ar", "en"];
  if (!langs.includes(lang)) return;

  const body = document.body;
  if (lang == "ar") {
    setLocale("ar");
    body.setAttribute("dir", "rtl");
  } else {
    setLocale("en");
    body.setAttribute("dir", "ltr");
  }
  isLangPopup.value = false
};

//hooks
onMounted(() => {
  addHeaderStyleOnScroll();
  document.addEventListener("scroll", addHeaderStyleOnScroll);
});


</script>

<style>
.main-ul .router-link-exact-active{
color: var(--main-color);
}
.sidbar-ul  .router-link-exact-active > span{
background-color: var(--main-color);

border-radius: 5px;
padding: 4px 8px;
color: white;
}

</style>
