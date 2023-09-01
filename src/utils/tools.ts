export const encodeQuery = (queryString: unknown) => {
  return encodeURIComponent(JSON.stringify(queryString))
}

export const decodeQuery = (queryString: string) => {
  return JSON.parse(decodeURIComponent(queryString))
}