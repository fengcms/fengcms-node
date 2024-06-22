import JWT from 'jsonwebtoken'
import { JWT_SECRET, JWT_EXPIRES_IN } from '@/config'

export const createToken = (role: string, account: string, id: string) => {
  return JWT.sign({ role, account, id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}

export const verifyToken = (token: string) => {
  try {
    return JWT.verify(token, JWT_SECRET)
  } catch (error) {
    return false
  }
}
