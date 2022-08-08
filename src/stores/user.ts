import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'count',
  state: () => {
    return {
      count: 0,
    }
  },
  actions: {
    updateCount(val: number) {
      this.count = val
    },
  },
})
