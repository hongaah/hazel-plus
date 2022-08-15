<template>
  <div>请求一：{{ result1 }}</div>
  <div>
    请求二：{{ result2 }}
    <button @click="getResult2">获取</button>
  </div>
  <div>请求三：{{ result3 }}</div>
</template>

<script setup lang="ts">
  import { useRequest } from '../index'

  function getData() {
    return new Promise(() => {
      setTimeout(() => {
        console.log(`getData${new Date()}`)
        return `getData${new Date()}`
      })
    })
  }

  // 常规请求
  const { result: result1 } = useRequest(getData)

  // 手动请求
  const { result: result2, run: getResult2 } = useRequest(getData, {
    manual: true,
  })

  const { result: result3 } = useRequest(getData, {
    onSuccess(data) {
      console.log('result3', data)
    },
  })
</script>
