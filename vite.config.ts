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
import { ConfigEnv, loadEnv, UserConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import { resolve } from 'path'
import TransformPages from 'uni-read-pages-vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  return {
    server: {
      host: true,
      port: env.VITE_APP_PORT as unknown as number,
      proxy: {
        '/api': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    // 自定义全局变量
    define: {
      'process.env': {},
      ROUTES: new TransformPages().routes,
    },
    plugins: [
      uni(),
      Unocss(),
      AutoImport({
        imports: [
          'vue',
          'uni-app',
          'pinia',
          {
            'uni-mini-router': ['createRouter', 'useRouter', 'useRoute'],
          },
        ],
        dts: 'types/auto-imports.d.ts',
        eslintrc: {
          enabled: true,
        }
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/assets/styles/mixin.scss";`
        }
      }
    },
    base: './',
    resolve: {
      // 设置路径
      alias: {
        // 设置路径
        '~': resolve(__dirname, './'),
        // 设置别名
        '@': resolve(__dirname, './src')
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    }
  }
}
