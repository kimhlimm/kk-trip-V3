<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <HomeSearch></HomeSearch>
  </div>
</template>

<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue"
import HomeSearch from "./cpns/home-search.vue"

import useHomeStore from "@/stores/modules/home"
//发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 100px;
}

.banner {
  img {
    width: 100%;
  }
}
</style>
