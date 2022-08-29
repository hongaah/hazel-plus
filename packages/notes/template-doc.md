# DialogConfirm 确认弹框

## 介绍

传一个变量可以控制弹框的显隐，支持自定义内容

## 引入

```ts
import { HzDialogConfirm } from 'hazel-plus'
import { HzDialogConfirm as HzDialogCustom } from 'hazel-plus'
```

## 代码演示

<demo src="./demo/demo.vue"
  language="vue"
  title="基本用法"
  desc="DialogConfirm">
</demo>

## API

### 参数

| 参数       | 说明         | 类型    | 默认值 | 是否必选 |
| ---------- | ------------ | ------- | ------ | -------- |
| isShowTip  | 是否展示弹框 | boolean | false  | 是       |
| content    | 弹框内容     | string  | ''     | 否       |
| confirmBtn | 确认按钮     | string  | '确认' | 否       |

### 事件

| 事件名     | 说明                 | 类型       |
| ---------- | -------------------- | ---------- |
| confirmTip | 点击默认确认按钮事件 | () => void |

### 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 弹框内容 |
