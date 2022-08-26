<template>
  <!-- 单选下拉选择器 -->
  <div class="selected-content">
    <div @click="toggleSelectStatus" class="selected-item">
      <span class="selcted-label">{{ selectedLabel }}</span>
      <img
        :src="isSelecting ? foldIcon : dropIcon"
        alt=""
        class="selcted-icon"
      />
    </div>
    <!-- 下拉选项 -->
    <div
      v-if="isSelecting"
      @click="isSelecting = false"
      class="selcted-option-content"
    >
      <div
        v-for="(item, index) in selectOption"
        :key="index"
        @click.stop="confirmSelect(item)"
        class="selected-option"
      >
        <span
          :class="{
            'selcted-label': true,
            'selected-active': item.value === selected,
          }"
        >
          {{ item.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'

  export interface Options {
    value: string
    label: string
  }

  export interface Props {
    selectOption: Options[] // 格式：[{ value: '', label: '' }]
    selected: string // 当前选择的值
    foldIcon?: string // 选择器的收起图标
    dropIcon?: string // 选择器的放下图标
  }

  // const props = withDefaults(defineProps<Props>(), {
  //   selectOption: () => [],
  //   selected: '',
  //   foldIcon:
  //     'https://cnhqvztoss02.qdama.cn//electricityManagement/20224/X5PDtr6CwFtcywbFYA5FY7RXpE5h2Ed3.png',
  //   dropIcon:
  //     'https://cnhqvztoss02.qdama.cn//electricityManagement/20224/PxF8xA64pfanTHKQBXJfR3iDQB4XNw5a.png',
  // })

  // or 响应式语法糖 @实验
  const {
    selectOption = [],
    selected = '',
    foldIcon = 'https://cnhqvztoss02.qdama.cn//electricityManagement/20224/X5PDtr6CwFtcywbFYA5FY7RXpE5h2Ed3.png',
    dropIcon = 'https://cnhqvztoss02.qdama.cn//electricityManagement/20224/PxF8xA64pfanTHKQBXJfR3iDQB4XNw5a.png',
  } = defineProps<Props>()

  defineOptions({
    name: 'HzDropdownSelect',
  })

  const isSelecting = ref(false)
  const selectedLabel = computed(
    () => selectOption.filter(item => item.value === selected)?.[0]?.label
  )

  function toggleSelectStatus() {
    isSelecting.value = !isSelecting.value
  }
  const emit = defineEmits(['update:selected'])

  function confirmSelect(item: Options) {
    isSelecting.value = false
    emit('update:selected', item.value)
  }
</script>

<style lang="scss" scoped>
  .selected-content {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: transparent;
  }

  .selected-item {
    width: 100%;
    height: 42px;
    padding: 0 20px;
    box-sizing: border-box;
    background: #ffffff;
    z-index: 9999;

    .selcted-label {
      margin-right: 4px;
      line-height: 42px;
      vertical-align: middle;
      font-size: 15px;
      font-weight: bold;
      color: #262626;
    }
    .selcted-icon {
      width: 15px;
      height: 16px;
      line-height: 42px;
      vertical-align: middle;
    }
  }

  .selcted-option-content {
    position: absolute;
    top: 42px;
    left: 0;
    width: 100%;
    height: calc(100vh - 42px);
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;

    .selected-option {
      @extend .selected-item;
      height: 48px;

      .selcted-label {
        line-height: 48px;
      }
      .selected-active {
        color: #fe0203;
      }
    }
  }
</style>
