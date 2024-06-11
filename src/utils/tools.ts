import path from 'path'
import fs from 'fs'

import { APP_BASE } from '@/config'

export const parserApiNameAndID = (originalUrl: string) => {
  const [apiName, id, errorUrl] = originalUrl.replace(APP_BASE.prefix, '').split('?')[0].split('/')
  return {
    apiName,
    id,
    errorUrl
  }
}

export const getTsFile = (filePath: string) => {
  const srcPath = path.resolve(__dirname, filePath)
  const JSFile: string[] = []
  const result = fs.readdirSync(srcPath)
  result.forEach(r => {
    const JSFileName = r.split('.')[0]
    JSFileName && JSFile.push(JSFileName)
  })
  return JSFile
}
