import path from 'path'
import fs from 'fs'
import os from 'os'

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

// 检查操作目录是否在项目根目录下或者在系统临时目录下
const isInSafePath = (path: string) => {
  const rootPath = process.cwd()
  const pathPreInRoot = path.substring(0, rootPath.length)
  const tempPath = os.tmpdir()
  const pathPreInTemp = path.substring(0, tempPath.length)
  return rootPath === pathPreInRoot || tempPath === pathPreInTemp
}

// 检查文件夹是否存在，若不存在则创建
export const makeDir = (dirPath: string) => {
  // const dirPathPre = dirPath.substring(0, rootPath.length)
  return new Promise((resolve, reject) => {
    // 这里设定仅允许在项目根目录以内建立文件夹，若项目有其他需求，可调整这边的判断逻辑
    // 不建议移除该判断，否则调用该方法可以在硬盘任意地方新建文件夹，可能会不小心干了点啥对吧
    if (!isInSafePath(dirPath)) {
      reject(new Error('Creating folders outside of the project root is not supported!'))
    }
    fs.access(dirPath, err => {
      if (err) {
        fs.mkdir(dirPath, { recursive: true }, (err) => {
          if (err) {
            reject(new Error(String(err)))
          } else {
            resolve(true)
          }
        })
      } else {
        resolve(true)
      }
    })
  })
}
// 移动文件或文件夹方法
export const moveFile = (sourcePath: string, targetPath: string) => {
  return new Promise((resolve, reject) => {
    if (!isInSafePath(sourcePath) || !isInSafePath(targetPath)) {
      reject(new Error('Operations on files or folders outside the project root directory are not supported!'))
    }
    fs.rename(sourcePath, targetPath, function (err) {
      if (err) {
        reject(new Error(String(err)))
      } else {
        fs.stat(targetPath, function (err, stats) {
          if (err) {
            reject(new Error(String(err)))
          } else {
            resolve(stats)
          }
        })
      }
    })
  })
}

// 对象键名转小写 （目前用于转化 url params 对象）
export const objKeyLower = (o: Record<string, any>) => {
  const res: Record<string, any> = {}
  for (const i in o) res[i.toLocaleLowerCase()] = o[i]
  return res
}
