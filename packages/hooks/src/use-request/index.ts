import { ref, onMounted, watch, WatchSource } from 'vue'

type Service<TData> = {
  (...args: any): Promise<TData>
}

type Options<T> = {
  manual?: boolean
  refreshDeps?: WatchSource[] | any
  onSuccess?: (data?: T) => void
  onError?: (e: Error) => void
  errorToast?: boolean
  formatResult?: (data: T) => any
}

export function useRequest<TData>(
  requestFn: Service<TData>,
  options: Options<TData> = {}
) {
  const {
    manual = false,
    refreshDeps = [],
    onSuccess = () => {},
    onError = () => {},
    errorToast = true,
    formatResult = data => data,
  } = options
  const result = ref<TData>()
  const params = ref({})

  async function run(...args: any): Promise<void> {
    try {
      params.value = args
      result.value = await requestFn(...args)
      result.value = formatResult?.(result.value)
      onSuccess(result.value)
    } catch (err: any) {
      if (errorToast) {
        const errorMsg = err?.message || '内部错误' // 1后端报错 2其他错误
        console.log(errorMsg)
      }

      onError(err)
    }
  }

  // 依赖更新数据
  watch(
    refreshDeps,
    () => {
      run()
    },
    { deep: true }
  )

  onMounted(() => {
    if (!manual) run()
  })

  return { result, run }
}
