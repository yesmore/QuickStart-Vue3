<template>
  <div class="test">
    <div>
      <h2>🚀 QuickStart Vue3</h2>
      <a href="http://v2.aoau.top/pb?p=6" target="_blank">
        <img v-if="state.avatar !== ''" :src="state.avatar" alt="user" />
      </a>

      <br />
      {{ mainStore.name }}
      <br />
      {{ mainStore.nameLength }}
    </div>
    <n-button @click="updateName"> 点击登录</n-button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useSettingsOutsideStore } from '@/store/modules/settings'
import { NButton } from 'naive-ui'
import { login, photo } from '@/service/api/login'

const mainStore = useSettingsOutsideStore()
const state = reactive({
  avatar: '',
})

// .env
// console.log(import.meta.env.VITE_APP_BASE_URL)

const updateName = () => {
  mainStore.$patch({
    name: 'yesmore ok',
  })
  // myLogin()
  photo().then(res => {
    state.avatar = res.data.photoList[2]
    console.log(res.data)
  })
}

const myLogin = () => {
  return login({ username: 'ok', password: '123' })
}
</script>

<style lang="scss" scoped>
.test {
  text-align: center;
  color: $test-color;
  font-size: 24px;
  margin: 100px auto;
}
img {
  width: 100px;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
}
</style>
