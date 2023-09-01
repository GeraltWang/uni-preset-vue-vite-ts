/*
 * @Author: 王昶
 * @Date: 2023-09-01 10:35:22
 * @LastEditors: 王昶
 * @LastEditTime: 2023-09-01 11:23:32
 * @FilePath: /uni-preset-vue-vite-ts/src/enum/request.ts
 * @Description:
 *
 *
 */
export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export enum RequestContentType {
  JSON = 'application/json',
  URLENCODED = 'application/x-www-form-urlencoded',
  FORM_DATA = 'multipart/form-data'
}

export enum ResponseCode {
  SUCCESS = 0,
  UNAUTHORIZED = 10001,
  FORBIDDEN = 10003,
  ERROR = 10000
}

export enum HttpResponseCode {
  SUCCESS = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  TEMPORARY_REDIRECT = 307,
  PERMANENT_REDIRECT = 308,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  REQUEST_TIMEOUT = 408,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504
}
