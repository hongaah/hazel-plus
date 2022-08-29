# 快速安装

## 📦 Install

```
# using npm to install
$ npm i hazel-plus

# using pnpm to install
$ pnpm add hazel-plus
```

## 🧨 Quickstart

1. Import the components style

```ts :main.ts
// main.ts
import { createApp } from 'vue'
import 'hazel-plus/dist/style.css'
```

2. Import the components or hooks you need on demand

```ts :xx.vue
// hooks
import { useRequest } from 'hazel-plus'

// Components
import { HzDialogConfirm } from 'hazel-plus'
import { HzDropdownSelect } from 'hazel-plus'
import { HzPopupBottom } from 'hazel-plus'
```
