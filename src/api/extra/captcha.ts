import type { Response } from 'express'
import svgCaptcha from 'svg-captcha'
import { v4 as uuidv4 } from 'uuid'
import { ApiDataRequest } from '@/types'
import { captchaCache, captchaClear } from '@/core/captcha'

const captcha = (req: ApiDataRequest, res: Response) => {
  const uuid = uuidv4()
  const time = +new Date()
  const captcha = svgCaptcha.create({ size: 4, ignoreChars: '0o1i', noise: 2, color: true, background: '#cc9966' })
  captchaCache.push({ uuid, time, value: captcha.text })
  console.log(captchaCache)
  captchaClear()
  res.json({ svg: captcha.data, uuid })
}

export default captcha
