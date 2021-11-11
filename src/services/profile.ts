import axios from 'axios'

export interface Profile {
  id: string
  email: string
  createdAt: Date
  updatedAt: Date
  emailVerified: boolean
}

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getMyProfile = (): Promise<Profile> => {
  return new Promise((resolve, reject) =>
    axios
      .get<Profile>('/api/profile')
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
  )
}

export default { me: getMyProfile }
