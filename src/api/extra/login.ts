import type { Response } from 'express'
import { ApiDataRequest } from '@/types'
import { decrypt, encrypt } from '@/utils/rsa'
import { calcHashSha256 } from '@/utils/hash'
import { createToken, verifyToken } from '@/utils/token'
import { getItem } from '@/core/query'

// const { succ, rsa } = global.tool
// const { makeToken } = require(':core/session')

const login = async (req: ApiDataRequest, res: Response) => {
  // console.log(req.body)
  const { account, password, role } = req.body
  // 校验传参是否为空
  if (!account || !password || !role) {
    res.status(400).json({ message: '请输入用户名密码' })
    return
  }
  // 校验登录角色参数
  if (!['admin', 'editor', 'user'].includes(role)) {
    res.status(400).json({ message: '用户角色参数错误' })
    return
  }
  // 校验传入密码是否能解密，如能解密则赋值 reqPw
  const reqPw = await decrypt(password).catch((e) => console.log(e.message))
  if (!reqPw) {
    res.status(400).json({ message: '用户名或密码错误' })
    return
  }
  // 从数据库存储用户信息，根据不同角色，从不同表内读取
  const sheet: Record<string, string> = {
    admin: 'manages',
    user: 'user',
    editor: 'editor'
  }
  // console.log(sheet[role])
  const dbUser = await getItem(sheet[role], { account })
  // console.log(dbUser)
  // 校验传入用户名是否存在
  if (!dbUser) {
    res.status(400).json({ message: '用户名密码错误' })
    return
  }

  const hashPw = calcHashSha256(reqPw + dbUser.salt)
  // 校验密码是否正确
  if (hashPw !== dbUser.password) {
    res.status(400).json({ message: '用户名或密码错误' })
    return
  }

  // 用户通过校验
  const token = createToken(role, account, dbUser.id)
  console.log(token)
  console.log(verifyToken(token))
  // // 移除 cookies 设置功能
  // // ctx.cookies.set('token', token, { httpOnly: true })
  // ctx.body = succ({ token })
  res.status(400).json({ message: 'Error File' })
}

export default login
