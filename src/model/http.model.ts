/* eslint-disable @typescript-eslint/naming-convention */
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

export interface IServiceExceptionMessages {
  messages: string[] | null
}

export type THttpVerb = 'get' | 'post' | 'delete' | 'put'

export type THttpResponse<T = null> = AxiosResponse<T>

export type THttpError<T> = AxiosError<T>

export type THttpRequestConfig = AxiosRequestConfig

export interface IHttpClient {
  get: <T>(
    url: string,
    config?: THttpRequestConfig
  ) => Promise<THttpResponse<T>>
  post: <T, D = any>(
    url: string,
    data?: D,
    config?: THttpRequestConfig
  ) => Promise<THttpResponse<T>>
  put: <T, D = any>(
    url: string,
    data?: D,
    config?: THttpRequestConfig
  ) => Promise<THttpResponse<T>>
  delete: <T>(
    url: string,
    config?: THttpRequestConfig
  ) => Promise<THttpResponse<T>>
}

export interface IResponseData<T> {
  status: boolean
  message: string
  data: T
}

export interface IHttpErrorResponse {
  message: string
  defaultErrorRequest?: string
  statusCode?: number
  data?: IServiceExceptionMessages
}
