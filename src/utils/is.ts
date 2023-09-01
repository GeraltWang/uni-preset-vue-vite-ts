const toString = Object.prototype.toString

/**
 * @description: 判断值是否未某个类型
 */
export function is (val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

/**
 * @description:  是否为函数
 */
export function isFunction (val: unknown) {
  return is(val, 'Function')
}

/**
 * @description: 是否已定义
 */
export const isDef = (val: unknown) => {
  return typeof val !== 'undefined'
}

export const isUnDef = (val: unknown) => {
  return !isDef(val)
}
/**
 * @description: 是否为对象
 */
export const isObject = (val: unknown) => {
  return val !== null && is(val, 'Object')
}

/**
 * @description:  是否为时间
 */
export function isDate (val: unknown) {
  return is(val, 'Date')
}

/**
 * @description:  是否为数值
 */
export function isNumber (val: unknown) {
  return is(val, 'Number')
}

/**
 * @description:  是否为AsyncFunction
 */
export function isAsyncFunction (val: unknown) {
  return is(val, 'AsyncFunction')
}

/**
 * @description:  是否为promise
 */
export function isPromise<T = any> (val: any): val is Promise<T> {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

/**
 * @description:  是否为字符串
 */
export function isString (val: unknown) {
  return is(val, 'String')
}

/**
 * @description:  是否为boolean类型
 */
export function isBoolean (val: unknown) {
  return is(val, 'Boolean')
}

/**
 * @description:  是否为数组
 */
export function isArray (val: unknown) {
  return val && Array.isArray(val)
}

/**
 * @description: 是否客户端
 */
export const isClient = () => {
  return typeof window !== 'undefined'
}

/**
 * @description: 是否为浏览器
 */
export const isWindow = (val: any) => {
  return typeof window !== 'undefined' && is(val, 'Window')
}

export const isElement = (val: any): val is Element => {
  return isObject(val) && !!val.tagName
}

export const isServer = typeof window === 'undefined'

// 是否为图片节点
export function isImageDom (o: any) {
  return o && ['IMAGE', 'IMG'].includes(o.tagName)
}

export function isNull (val: unknown) {
  return val === null
}

export function isNullAndUnDef (val: unknown) {
  return isUnDef(val) && isNull(val)
}

export function isNullOrUnDef (val: unknown) {
  return isUnDef(val) || isNull(val)
}
