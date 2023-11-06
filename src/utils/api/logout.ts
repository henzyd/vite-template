import { API_TOKEN } from '@/app-constants'

export function logout() {
  localStorage.removeItem(API_TOKEN)
  window.location.href = '/login'
}
