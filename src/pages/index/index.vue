<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <button @click="test">123</button>
  </view>
</template>

<script setup lang="ts">
const title = ref('Hello')

const router = useRouter()

const pageQuery = ref<Record<string, any> | undefined>(undefined)

onLoad((query) => {
  pageQuery.value = query
  console.log(unref(pageQuery))
})

const test = () => {
  router.push('/pages/login/index')
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
