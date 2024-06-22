import fs from 'fs'
import forge from 'node-forge'
import { RSA_PRIVATE_KEY_PATH, RSA_PUBLIC_KEY_PATH } from '@/config'
// const NodeRSA = require('node-rsa')

// 公钥加密方法
export const encrypt = (str: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(RSA_PUBLIC_KEY_PATH, 'utf-8', (err, data) => {
      if (err) reject(err)
      const publicK = forge.pki.publicKeyFromPem(data)
      const res = publicK.encrypt(str, 'RSA-OAEP')
      const Base64Res = forge.util.encode64(res)
      resolve(Base64Res)
    })
  })
}
// 私钥解密方法
export const decrypt = (str: string) => {
  return new Promise((resolve, reject) => {
    fs.readFile(RSA_PRIVATE_KEY_PATH, 'utf-8', (err, data) => {
      if (err) reject(err)
      const privateK = forge.pki.privateKeyFromPem(data)
      try {
        const base64Str = forge.util.decode64(str)
        const res = privateK.decrypt(base64Str, 'RSA-OAEP')
        resolve(res)
      } catch (e) {
        reject(e)
      }
    })
  })
}
