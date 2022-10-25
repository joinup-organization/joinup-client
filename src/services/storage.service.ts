/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export const set = <T>(key: string, value: T): void => {
  if (typeof value === 'string') {
    return localStorage.setItem(key, value)
  }

  localStorage.setItem(key, JSON.stringify(value))
}

export const get = (key: string, isObject = false): string | null => {
  const value = localStorage.getItem(key)

  if (!value || !isObject) {
    return value
  }

  return JSON.parse(value)
}

export const remove = (key: string): void => localStorage.removeItem(key)
