import { defineStore } from 'pinia'
import piniaStore from '@/store'
// import { IAuth } from './types'

export const useSettingsStore = defineStore({
  id: 'settings',
  state: () => ({
    name: '未登陆',
    avatar: '',
  }),
  getters: {
    nameLength: state => state.name.length,
  },
  actions: {
    async insertPost(data: string) {
      // await doAjaxRequest(data);
      this.name = data
    },
  },
})

export function useSettingsOutsideStore() {
  return useSettingsStore(piniaStore)
}
