<template>
  <div>
    <div>
      <Loader v-if="global.loader" />
    </div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>



<script setup>

import Loader from "~/components/layout/Loader.vue";
import { useGlobalStore } from "~/stores/global";

const global = useGlobalStore();
const currentLang = useCookie("i18n_redirected");
const {  setLocale } = useI18n();

if(!currentLang._rawValue) setLocale('ar'); // for insure the default language is Arabic




useHead({
  bodyAttrs: {
    dir: computed(() => currentLang.value == 'en' ? 'ltr' : 'rtl' ),
  },
  link: [{ rel: "icon", type: "image/png", href: "/logo.svg" }],
  meta: [
    { name: 'description', content: 'the description of the website' },
    { name: 'title', content: 'GooseFlight' },
    { name: 'keywords', content: 'key,words' },
    // Open Graph tags
    { property: 'og:title', content: 'GooseFlight' },
    { property: 'og:description', content: 'the description of the website' },
    { property: 'og:image', content: '/logo.png' },
    { property: 'og:url', content: '/logo.png' },
    { property: 'og:type', content: 'website' },
    // Twitter Card tags
    { name: 'twitter:card', content:  'GooseFlight' },
    { name: 'twitter:title', content:  'GooseFlight' },
    { name: 'twitter:description', content: 'the description of the website' },
    { name: 'twitter:image', content: '/logo.png' },
    // Google / Schema.org tags
    { itemprop: 'name', content:  'GooseFlight' },
    { itemprop: 'description', content: 'the description of the website' },
    { itemprop: 'image', content: '/logo.png' },
    // Pinterest Rich Pins
    { name:  'GooseFlight', content: 'true' }
  ]
});




</script>

<style></style>
