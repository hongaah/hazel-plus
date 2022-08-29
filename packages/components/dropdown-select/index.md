---
map:
  path: /components/DropdownSelect
---

# DropdownSelect 下拉框

## 介绍

下拉选择框，支持自定义下拉选择内容

## 引入

```ts
import { HzDropdownSelect } from 'hazel-plus'
```

## 代码演示

<demo src="./demo/demo.vue"
  language="vue"
  title="基本用法"
  desc="自定义下拉选择">
</demo>

## API

### 参数

| 参数         | 说明             | 类型         | 默认值 | 是否必选 |
| ------------ | ---------------- | ------------ | ------ | -------- |
| selectOption | 下拉选择内容     | Options[]    | 见示例 | 是       |
| selected     | 当前选择的值     | string       | ''     | 是       |
| foldIcon     | 选择器的收起图标 | icon@network | ''     | 否       |
| dropIcon     | 选择器的放下图标 | icon@network | '确认' | 否       |

### 类型

#### Options

| 参数  | 说明               | 类型   | 默认值 | 是否必选 |
| ----- | ------------------ | ------ | ------ | -------- |
| value | 下拉选择内容的值   | string | ''     | 是       |
| label | 下拉选择内容的标签 | string | ''     | 是       |

### 事件

| 事件名 | 说明             | 类型              |
| ------ | ---------------- | ----------------- |
| change | 选择下拉选项事件 | (Options) => void |
