import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

async function requestOTP(body: Record<string, any>) {
  const { data } = await axios.post('auth/otp/new/', body)

  return data
}

export function useRequestOTP() {
  return useMutation(requestOTP)
}

async function verifyOTP(body: Record<string, any>) {
  const { data } = await axios.post('auth/otp/verify/', body)

  return data
}

export function useVerifyOTP() {
  return useMutation(verifyOTP)
}
