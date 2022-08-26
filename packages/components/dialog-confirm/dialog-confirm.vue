<template>
  <!-- 提示确认模态框 -->
  <div v-if="isShowTip" class="dialog-mask">
    <div class="dialog">
      <!-- 提示框内容 -->
      <slot>
        <div class="dialog-content">{{ content }}</div>
        <!-- 确认大按钮 -->
        <div class="dialog-btn">
          <button @click.stop="confirmTip" class="dialog-btn-confirm">
            {{ confirmBtn }}
          </button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  export interface Props {
    isShowTip: boolean
    content?: string
    confirmBtn?: string
  }

  // defineOptions({
  //   name: 'HzDialogConfirm',
  // })

  withDefaults(defineProps<Props>(), {
    selectOption: false,
    content: '',
    confirmBtn: '确认',
  })

  const emits = defineEmits(['confirmTip'])
  function confirmTip() {
    emits('confirmTip')
  }
</script>

<style lang="scss" scoped>
  .dialog-mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    z-index: 9999;
    align-items: center;
    justify-content: center;
  }

  @keyframes tipMove {
    0% {
      transform: scale(1);
    }

    35% {
      transform: scale(0.8);
    }

    70% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }

  .dialog {
    width: 320px;
    background: #ffffff;
    border-radius: 12px;
    box-sizing: border-box;
    animation: tipMove 0.4s;

    .dialog-content {
      padding: 24px;
      font-size: 14px;
      font-weight: bold;
      color: #262626;
      line-height: 22px;
    }

    .dialog-btn {
      padding: 0 24px 20px 24px;
    }
    .dialog-btn-confirm {
      width: 100%;
      height: 46px;
      background: linear-gradient(299deg, #fa0f26 0%, #ff5121 100%);
      border-radius: 23px;
      border: none;
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
      line-height: 46px;
      text-align: center;
    }
  }
</style>
