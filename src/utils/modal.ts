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
export const showLoading = (title: string, mask: boolean) => {
  return uni.showLoading({
    title,
    mask
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
  icon: UniNamespace.ShowToastOptions['icon'],
  mask = false,
  position?: UniNamespace.ShowToastOptions['position'],
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
