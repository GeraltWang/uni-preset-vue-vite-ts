import type { App } from 'vue'
import { createRouter } from 'uni-mini-router'

const router = createRouter({
  routes: [...ROUTES]
})

export function setupRouter (app: App<Element>) {
  // Configure router guard
  //   createRouterGuard(router)
  app.use(router)
}

export { router }
