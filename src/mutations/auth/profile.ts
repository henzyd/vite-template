import { axios } from '@/utils/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'

async function editProfile(data: Record<string, any>) {
  const { data: response } = await axios.patch('auth/users/me/', data)

  return response.data
}

export function useEditProfile() {
  const queryClient = useQueryClient()

  return useMutation(editProfile, {
    onSuccess() {
      queryClient.invalidateQueries(['auth/users/me/'])
    },
  })
}

async function imageUpload(data: Record<string, any>) {
  if (data.image_file) {
    data.image = await fileToBase64(data.image_file)
  }

  const { data: response } = await axios.post('auth/image-upload', data)

  return response.data
}

export function useImageUpload() {
  const queryClient = useQueryClient()

  return useMutation(imageUpload, {
    onSuccess() {
      queryClient.invalidateQueries(['auth/users/me/'])
    },
  })
}

function fileToBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = function () {
      resolve(reader.result as string)
    }

    reader.onerror = function (error) {
      reject(error)
    }
  })
}
