import { defineStore } from 'pinia'
export const useGlobalStore = defineStore('global', {
  state: () => {
    return {
      loader: false,
    }
  },

  actions: {
    turnLoaderOn() {
      this.loader = true;
    },
    turnLoaderOff() {
      this.loader = false;
    },
  },
})