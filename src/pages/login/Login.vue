<template>
  <div class="test">
    <div>
      <HelloWorld />
      <a href="http://v2.aoau.top/pb?p=6" target="_blank">
        <img v-if="avatar !== ''" :src="avatar" alt="user" />
      </a>

      <br />
      {{ name }} ({{ nameLength }})
    </div>
    <n-button @click="updateName"> 点击登录</n-button>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

import { storeToRefs } from 'pinia'
import { useSettingsOutsideStore } from '@/store/modules/auth'
import { NButton } from 'naive-ui'
import { login, getAvatar } from '@/service/api/login'

const mainStore = useSettingsOutsideStore()

// .env
// console.log(import.meta.env.VITE_APP_BASE_URL)

const updateName = async () => {
  // myLogin()
  const avatar = await getAvatar()

  mainStore.$patch({
    name: 'yesmore ok',
    avatar: avatar.data.photoList[2],
  })
}

const myLogin = () => {
  return login({ username: 'ok', password: '123' })
}

const { name, avatar, nameLength } = storeToRefs(mainStore)
</script>

<style lang="scss" scoped>
.test {
  text-align: center;
  color: $test-color;
  font-size: 24px;
  margin: 70px auto;
}
img {
  width: 100px;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
}
</style>
