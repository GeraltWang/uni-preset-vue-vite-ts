export const setStorage = (key: string, data: any, expire = 0) => {
  try {
    const parsedData = JSON.stringify({
      data,
      expire: expire !== 0 ? new Date().getTime() + expire * 1000 : 0
    })
    uni.setStorageSync(key, parsedData)
  } catch (error) {
    throw new Error(`setStorageSync error: ${error}`)
  }
}

export const getStorage = (key: string) => {
  try {
    const data = uni.getStorageSync(key)
    if (data) {
      const parsedData = JSON.parse(data)
      if (parsedData.expire === 0 || parsedData.expire > new Date().getTime()) {
        return parsedData.data
      }
      uni.removeStorageSync(key)
    }
    return null
  } catch (error) {
    return null
  }
}

export const removeStorage = (key: string) => {
  try {
    uni.removeStorageSync(key)
  } catch (error) {
    throw new Error(`removeStorageSync error: ${error}`)
  }
}

export const clearStorage = () => {
  uni.clearStorageSync()
}
