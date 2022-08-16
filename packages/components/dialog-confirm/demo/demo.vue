<template>
  <button @click="isShowBasicDialog = !isShowBasicDialog">
    默认提示模态框
  </button>
  <button @click="isShowCustomDialog = !isShowCustomDialog">
    自定义提示模态框
  </button>

  <!-- 默认提示模态框 -->
  <hazel-dialog-confirm
    :isShowTip="isShowBasicDialog"
    @confirmTip="isShowBasicDialog = false"
    content="开票金额规则说明：运费金额、积分抵扣金额，第三方代金券等不支持开票"
    confirmBtn="好的，我知道了"
  ></hazel-dialog-confirm>

  <hazel-dialog-custom :isShowTip="isShowCustomDialog">
    <div class="confirm-wrap">
      <div class="confirm-title">兑换规则</div>
      <div class="confirm-content">没有规则</div>
      <div @click="isShowCustomDialog = false" class="confirm-btn">
        好的，我知道了
      </div>
    </div>
  </hazel-dialog-custom>
</template>

<script setup lang="ts">
  import { HazelDialogConfirm } from '../../index'
  import { HazelDialogConfirm as HazelDialogCustom } from '../../index'
  import { ref } from 'vue'

  const isShowBasicDialog = ref(false)
  const isShowCustomDialog = ref(false)
</script>

<style lang="scss" scoped>
  .confirm-wrap {
    padding: 24px 24px 16px 24px;

    .confirm-title {
      font-size: 16px;
      font-weight: 500;
      color: #000000;
      margin-bottom: 16px;
      text-align: center;
    }
    .confirm-content {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: #262626;
      white-space: pre-line;
      margin-bottom: 24px;
    }
    .confirm-btn {
      width: 263px;
      height: 36px;
      background: linear-gradient(299deg, #fa0f26 0%, #ff5121 100%);
      border-radius: 18px;
      font-size: 14px;
      font-weight: 400;
      color: #ffffff;
      text-align: center;
      line-height: 36px;
      margin: 0 auto;
    }
  }
</style>
