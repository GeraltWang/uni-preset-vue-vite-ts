/*
 * @Author: 王昶
 * @Date: 2023-09-01 10:50:28
 * @LastEditors: 王昶
 * @LastEditTime: 2023-09-01 12:45:01
 * @FilePath: /uni-preset-vue-vite-ts/types/request.d.ts
 * @Description: 
 * 
 * 
 */
interface RequestConfig {
  header?: any
  responseType?: string
  withCredentials?: boolean
  loading: boolean
  loadingText?: string
}

interface AnyResponse extends UniApp.RequestSuccessCallbackResult {
  data: any
}

interface ApiResponse {
  code: number
  data?: any
  msg: string
}

interface ApiResponseData<T = any> extends ApiResponse {
  data: T
}
