---
map:
  path: /components/PopupBottom
---

# PopupBottom 底部弹框

## 介绍

底部弹框，支持自定义弹框内容

## 引入

```ts
import { HzPopupBottom } from 'hazel-plus'
```

## 代码演示

<demo src="./demo/demo.vue"
  language="vue"
  title="基本用法"
  desc="PopupBottom 底部弹框">
</demo>

## API

### 参数

| 参数          | 说明                     | 类型    | 默认值 | 是否必选 |
| ------------- | ------------------------ | ------- | ------ | -------- |
| showCloseIcon | 是否展示底部弹框关闭图标 | boolean | false  | 否       |
| title         | 底部弹框值               | string  | ''     | 否       |

### 事件

| 事件名     | 说明         | 类型              |
| ---------- | ------------ | ----------------- |
| closeModal | 关闭弹框事件 | (Options) => void |
