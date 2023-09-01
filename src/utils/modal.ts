/*
 * @Author: 王昶
 * @Date: 2023-09-01 11:03:38
 * @LastEditors: 王昶
 * @LastEditTime: 2023-09-01 11:05:46
 * @FilePath: /uni-preset-vue-vite-ts/src/utils/modal.ts
 * @Description:
 *
 *
 */
/**
 * @description: 显示加载提示框
 * @param title 内容
 * @param mask 遮罩
 * @returns
 */
export const showLoading = (title: string, options?: Partial<UniApp.ShowLoadingOptions>) => {
  return uni.showLoading({
    title,
    mask: true,
    ...options
  })
}

export const hideLoading = () => {
  uni.hideLoading()
}

/**
 * @description: 显示消息提示框
 * @param title 内容
 * @param icon 图标类型
 * @param mask 遮罩
 * @param position 位置
 * @param duration 时长
 * @returns
 */
export const showToast = (
  title: string,
  icon: UniApp.ShowToastOptions['icon'],
  mask = false,
  position?: UniApp.ShowToastOptions['position'],
  duration = 1500
) => {
  return uni.showToast({
    title,
    icon,
    mask,
    position,
    duration
  })
}

export const hideToast = () => {
  uni.hideToast()
}

/**
 * 显示模态弹窗，可以只有一个确定按钮，也可以同时有确定和取消按钮
 * @param options
 * @constructor
 */
export function showModal (options: UniApp.ShowModalOptions) {
  return new Promise((resolve, reject) => {
    uni.showModal({
      ...options,
      success: (res) => {
        resolve(res)
      },
      fail: (res) => {
        reject(res)
      },
    })
  })
}

/**
* 从底部向上弹出操作菜单
* @param options
* @constructor
*/
export function showActionSheet (options: UniApp.ShowActionSheetOptions) {
  return new Promise((resolve, reject) => {
    uni.showActionSheet({
      ...options,
      success: (res) => {
        resolve(res)
      },
      fail: (res) => {
        reject(res)
      },
    })
  })
}