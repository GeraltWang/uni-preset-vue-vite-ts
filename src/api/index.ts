/*
 * @Author: 王昶
 * @Date: 2023-09-01 09:14:24
 * @LastEditors: 王昶
 * @LastEditTime: 2023-09-01 12:58:23
 * @FilePath: /uni-preset-vue-vite-ts/src/api/index.ts
 * @Description:
 *
 *
 */
import { RequestMethod, RequestContentType, ResponseCode, HttpResponseCode } from '@/enum/request'
import { showLoading, hideLoading } from '@/utils/modal'
import SysConfig from '@/config'

const defaultConfig: RequestConfig = {
  header: {
    'Content-Type': RequestContentType.JSON
  },
  responseType: 'json',
  withCredentials: false,
  loading: true,
  loadingText: '加载中...'
}

let isRefreshing = false

export const request = <T>(
  url: string,
  method: UniNamespace.RequestOptions['method'],
  data: any,
  config: RequestConfig = defaultConfig
): Promise<ApiResponseData<T>> => {
  return new Promise((resolve, reject) => {
    const { loading, loadingText = defaultConfig.loadingText, header = {} } = config
    loading && showLoading(loadingText as string, true)
    uni.request({
      url: `${SysConfig.apiBaseUrl}${url}`,
      method,
      data,
      header: Object.assign({}, SysConfig.header, header),
      withCredentials: config.withCredentials,
      dataType: config.responseType,
      success: (res) => {
        // http 状态码 200 检测
        if (res.statusCode !== HttpResponseCode.SUCCESS) {
          reject(res)
        }
        const data: ApiResponseData<T> = res.data as ApiResponseData<T>
        if (Object.keys(data).length === 0) {
          reject(data)
        }
        if (data.code === ResponseCode.UNAUTHORIZED || data.code === ResponseCode.FORBIDDEN) {
          reject(data)
        } else if (data.code === ResponseCode.ERROR) {
          reject(data)
        } else {
          resolve(data)
        }
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        loading && hideLoading()
      }
    })
  })
}

export const http = {
  get: <T>(url: string, data?: any, config?: RequestConfig) => request<T>(url, RequestMethod.GET, data, config),
  post: <T>(url: string, data?: any, config?: RequestConfig) => request<T>(url, RequestMethod.POST, data, config),
  put: <T>(url: string, data?: any, config?: RequestConfig) => request<T>(url, RequestMethod.PUT, data, config),
  delete: <T>(url: string, data?: any, config?: RequestConfig) => request<T>(url, RequestMethod.DELETE, data, config)
}
