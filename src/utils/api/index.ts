import _axios from 'axios'
import { logout } from './logout'
import { QueryFunctionContext } from '@tanstack/react-query'
import { API_TOKEN } from '../../app-constants'
import refreshToken from './refresh-token'
_axios.defaults.baseURL = import.meta.env.VITE_API_URL

export const axios = _axios.create()

let refreshPromise: Promise<any> | null = null

axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const message =
      error?.response?.data?.error ||
      error?.response?.data?.message ||
      error?.response?.data?.detail ||
      error?.response?.data?.non_field_errors ||
      error?.response?.data ||
      error?.message ||
      'Network Error'

    if (error?.response?.status === 401) {
      if (message === 'Token is invalid or expired' || message === 'Token is blacklisted') {
        logout()
      } else if (
        message === 'Given token not valid for any token type' ||
        message === 'Authentication credentials were not provided.'
      ) {
        const token = localStorage.getItem(API_TOKEN)

        if (token) {
          if (!refreshPromise) {
            refreshPromise = refreshToken(token).then(() => {
              refreshPromise = null
            })
          }

          try {
            const { data } = await refreshPromise

            localStorage.setItem(API_TOKEN, data.refresh)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.access

            return axios.request(error?.config)
          } catch (e) {
            logout()
          }
        } else {
          logout()
        }
      } else return Promise.reject(message)
    } else return Promise.reject(message)
  }
)

export async function fetchUserIfTokenExists() {
  const token = localStorage.getItem('t-token')

  if (token && axios.defaults.headers.common['Authorization']) {
    return null
  }

  if (token) {
    const data = await refreshToken(token)

    localStorage.setItem(API_TOKEN, data.refresh)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.access
  } else {
    throw new Error('No token found')
  }
}

export async function defaultQueryFn<T>({ queryKey }: QueryFunctionContext) {
  const { data } = await axios.get(queryKey.join('/'))

  return data as T
}

// On localStorage value change from another tab, logout
window.addEventListener('storage', (event) => {
  if (event.key === 't-token' && !event.newValue) {
    logout()
  }
})
