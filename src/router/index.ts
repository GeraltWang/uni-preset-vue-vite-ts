import type { App } from 'vue'
import { createRouter } from 'uni-mini-router'

/**
 * @description 路由使用方法
 * router.push(target:RouteLocationRaw): void 保留当前页面，跳转到应用内的某个页面，相当于使用 uni.navigateTo(OBJECT)
 * 
 * 命名路由，传递对象参数
 * router.push({ name: 'user', params: { user: encodeURIComponent(JSON.stringify(user)) } })
 * 
 * 路径路由，传递对象参数
 * router.push({ path: '/user', query: { user: encodeURIComponent(JSON.stringify(user)) } })
 * 
 * router.pushTab(target:RouteLocationRaw): void 保留当前页面，跳转到应用内的某个tab页面，相当于使用 uni.switchTab(OBJECT)
 * 
 * router.replace(target:RouteLocationRaw): void 关闭当前页面，跳转到应用内的某个页面，相当于使用 uni.redirectTo(OBJECT)
 * 
 * router.replaceAll(target:RouteLocationRaw): void 关闭所有页面，打开到应用内的某个页面，相当于使用 uni.reLaunch(OBJECT)
 * 
 * router.back(level?: number): void 关闭当前页面，返回上一页面或多级页面,相当于使用 uni.navigateBack(OBJECT)
 * 
 */

const router = createRouter({
  routes: [...ROUTES]
})

router.beforeEach((to, from, next) => {})

export function setupRouter (app: App<Element>) {
  app.use(router)
}

export { router }
