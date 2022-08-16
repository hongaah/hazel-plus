<script setup lang="ts">
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const allRouter = router.options.routes.filter(
    item => !item.path.includes(':')
  )
</script>

<template>
  <div class="layout">
    <!-- 导航 -->
    <div class="nav">
      <div v-for="(nav, index) in allRouter" :key="index" class="nav-item">
        <router-link :to="nav.path" exact-active-class="exact-active-nav">
          {{ nav.name }}
        </router-link>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition>
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .layout {
    display: flex;

    .nav {
      width: 200px;
      background: #f5f5f5;
      text-align: right;
      padding-right: 20px;
      margin-right: 20px;
      padding-top: 20px;
      .nav-item {
        margin-bottom: 10px;
      }
      .exact-active-nav {
        color: orchid;
      }
    }
    .content {
      flex: 1;
    }
  }
</style>
