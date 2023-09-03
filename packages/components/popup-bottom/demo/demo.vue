<template>
  <button class="btn" @click="showSecondaryConfirm = !showSecondaryConfirm">
    查看开票信息
  </button>

  <!-- 二次确认开票信息 -->
  <hz-popup-bottom
    v-if="showSecondaryConfirm"
    @closeModal="showSecondaryConfirm = false"
    title="开票信息"
    showCloseIcon
  >
    <template #content>
      <div
        v-for="(value, key, index) in confirmTextMap"
        :key="index"
        class="confirm-item"
      >
        <span class="normal-text title">{{ key }}</span>
        <span class="normal-text desc">
          {{ value }}
        </span>
      </div>
      <p class="tips">
        请确认信息无误，电子发票会在系统开具成功后发送到您的邮箱，请注意查收。
      </p>
    </template>
    <template #footer>
      <button
        class="confirm-btn"
        @click.stop="showSecondaryConfirm = !showSecondaryConfirm"
      >
        确认提交
      </button>
    </template>
  </hz-popup-bottom>
</template>

<script setup lang="ts">
  // import { HzPopupBottom } from '../../index'
  import { HzPopupBottom } from 'hazel-plus'

  import { ref } from 'vue'

  const showSecondaryConfirm = ref(false)

  const confirmTextMap = {
    发票类型: '电子发票',
    发票抬头: '个人发票',
    电子邮箱: 'xxx@qq.com',
  }
</script>

<style lang="scss" scoped>
  // 二次确认框
  .confirm-item {
    height: 50px;
    line-height: 50px;
    vertical-align: middle;
    white-space: nowrap;
    border-bottom: 1px solid #eaeaea;

    .normal-text {
      font-size: 15px;
      font-weight: 400;
      color: #262626;
    }
    .title {
      display: inline-block;
      width: 92px;
      padding-right: 32px;
      box-sizing: border-box;
    }
    .desc {
      display: inline-block;
      max-width: 235px;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 50px;
      vertical-align: middle;
    }
  }

  .tips {
    padding: 18px 0 22px;
    font-size: 12px;
    font-weight: 400;
    color: #989898;
    line-height: 16px;
  }

  .confirm-btn {
    width: 100%;
    border: none;
    margin: 0 4px;
    height: 40px;
    background: linear-gradient(299deg, #fa0f26 0%, #ff5121 100%);
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    line-height: 40px;
  }
</style>
