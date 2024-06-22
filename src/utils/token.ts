import JWT from 'jsonwebtoken'
import { v4 as uuidV4 } from 'uuid'
import { JWT_SECRET, JWT_EXPIRES_IN } from '@/config'

export const createToken = (role: string, account: string, id: string) => {
  const uuid = uuidV4()
  return `Bearer ${JWT.sign({ role, account, id, uuid }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })}`
}

export const verifyToken = (token: string) => {
  try {
    return JWT.verify(token.replace('Bearer ', ''), JWT_SECRET)
  } catch (error) {
    return false
  }
}
