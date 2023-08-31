/*
 * @Author: GeraltWang
 * @Date: 2023-07-06 16:35:30
 * @LastEditors: GeraltWang
 * @LastEditTime: 2023-08-05 17:13:16
 * @FilePath: /uni-preset-vue-vite-ts/vite.config.ts
 * @Description: 
 * 
 * 
 */
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    // 设置路径
    alias: {
      // 设置路径
      '~': resolve(__dirname, './'),
      // 设置别名
      '@': resolve(__dirname, './src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
})
