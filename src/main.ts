/*
 * @Author: GeraltWang
 * @Date: 2023-07-06 16:35:30
 * @LastEditors: GeraltWang
 * @LastEditTime: 2023-08-05 17:24:33
 * @FilePath: /uni-preset-vue-vite-ts/src/main.ts
 * @Description:
 *
 *
 */
import { createSSRApp } from 'vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import App from './App.vue'

export function createApp () {
  const app = createSSRApp(App)
  setupStore(app)
  setupRouter(app)
  return {
    app
  }
}
