<template>
  <!-- 二次确认底部弹出模态框 -->
  <div class="bottom-confirm">
    <div class="dialog-mask" @click.stop="handleClose"></div>
    <div class="bottom-confirm-content animate-animated animate-slideInUp">
      <img
        v-if="showCloseIcon"
        @click.stop="handleClose"
        class="icon-close"
        src="@/icons/icon-close-gray.png"
      />
      <div v-if="title" class="popup-title">
        <span>{{ title }}</span>
      </div>
      <div>
        <slot name="content"></slot>
      </div>
      <div class="popup-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  export interface Props {
    showCloseIcon?: boolean
    title?: string
  }

  defineOptions({
    name: 'HzPopupBottom',
  })

  const { showCloseIcon = false, title = '' } = defineProps<Props>()

  const emit = defineEmits(['closeModal'])
  function handleClose() {
    emit('closeModal')
  }
</script>

<style lang="scss" scoped>
  .bottom-confirm {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9991;

    .dialog-mask {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 99;
      background: rgba(0, 0, 0, 0.35);
    }
    .bottom-confirm-content {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 100%;
      background: #ffffff;
      z-index: 100;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      padding: 0 24px 5px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .icon-close {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 24px;
        height: 24px;
        box-sizing: border-box;
      }

      .popup-title {
        height: 50px;
        box-sizing: border-box;
        padding-top: 20px;
        padding-bottom: 12px;
        text-align: center;
        font-size: 17px;
        font-weight: bold;
        color: #000000;
        line-height: 17px;
      }

      .popup-footer {
        width: 100%;
        padding-bottom: constant(safe-area-inset-bottom);
        padding-bottom: env(safe-area-inset-bottom);
      }
    }
  }
  .animate-slideInUp {
    animation-name: slideInUp;
  }
  @keyframes slideInUp {
    0% {
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
      visibility: visible;
    }

    to {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
  }
  .animate-animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
</style>
