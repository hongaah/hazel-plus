<template>
  <div>自动请求：{{ result1 }}</div>
  <div>
    成功请求：{{ success }}
    <button class="btn" @click="getSuccessResult">获取</button>
  </div>
  <div>
    错误请求：{{ error }}
    <button class="btn" @click="getErrorResult">获取</button>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useRequest } from '../../index'
  // import { useRequest } from '@hazel-plus/hooks'

  const error = ref()

  function getData(
    option: { isError: boolean } = { isError: false }
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (option.isError) {
          reject('getDataError')
        } else {
          resolve(`getData：${new Date()}`)
        }
      })
    })
  }

  // 常规请求
  const { result: result1 } = useRequest(getData)

  const f = ref(true)
  setTimeout(() => (f.value = false), 1000)

  // 成功回调
  const { result: success, run: getSuccessResult } = useRequest(getData, {
    refreshDeps: computed(() => f.value),
    manual: true,
    onSuccess(data: any) {
      console.log('success：', data)
    },
    formatResult(data: any) {
      return 'format：' + data
    },
  })

  // 错误回调
  const { run: getErrorResult } = useRequest(() => getData({ isError: true }), {
    manual: true,
    onError(err: any) {
      error.value = err
    },
  })
</script>
