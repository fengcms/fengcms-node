import type { Response } from 'express'
import fs from 'fs'
import path from 'path'
import formidable, { type File } from 'formidable'
import { ApiDataRequest } from '@/types'
import { calcHashMd5 } from '@/utils/hash'
import { makeDir, moveFile } from '@/utils/tools'

const calcFileInfo = (path: string) => {
  const fileBuffer: Buffer = fs.readFileSync(path)
  const res = {
    fileHash: calcHashMd5(fileBuffer),
    fileExt: ''
  }
  // 将上文提到的 文件标识头 按 字节 整理到数组中
  const imageBufferHeaders = [
    { bufBegin: [0xff, 0xd8], suffix: '.jpg' },
    { bufBegin: [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a], suffix: '.png' },
    { bufBegin: [0x47, 0x49, 0x46, 0x38, 0x39, 0x61], suffix: '.gif' },
    { bufBegin: [0x47, 0x49, 0x46, 0x38, 0x37, 0x61], suffix: '.gif' },
    { bufBegin: [0x42, 0x4d], suffix: '.bmp' }
  ]
  for (const imageBufferHeader of imageBufferHeaders) {
    let isEqual
    // 判断标识头前缀
    if (imageBufferHeader.bufBegin) {
      const buf = Buffer.from(imageBufferHeader.bufBegin)
      isEqual = buf.equals(
        // 使用 buffer.subarray 方法 对 buffer 以字节为单位切割
        fileBuffer.subarray(0, imageBufferHeader.bufBegin.length)
      )
    }

    if (isEqual) {
      res.fileExt = imageBufferHeader.suffix
    }
  }
  return res
}

const calcSavePath = (fileHash: string, fileExt: string) => {
  const rootPath = process.cwd()
  const saveDir = path.resolve(rootPath, './static/upfiles/', fileHash.substring(0, 2))
  const savePath = path.resolve(saveDir, fileHash.substring(2) + fileExt)
  const returnPath = savePath.replace(rootPath + '/static', '')
  return [saveDir, savePath, returnPath]
}

const saveFile = async (file: File): Promise<string> => {
  const { fileHash, fileExt } = calcFileInfo(file.filepath)
  const [saveDir, savePath, returnPath] = calcSavePath(fileHash, fileExt)
  if (!fileExt) {
    return 'Unsupported file type'
  }
  return new Promise((resolve, reject) => {
    try {
      makeDir(saveDir).then(() => {
        moveFile(file.filepath, savePath).then(() => {
          resolve(returnPath)
        })
      })
    } catch (error) {
      reject(error)
    }
  })
}

const upload = (req: ApiDataRequest, res: Response) => {
  const form = formidable({})
  form.parse(req, async (err, _, files) => {
    if (err) {
      console.error(err)
      res.status(500).json({ message: 'Internal Server Error' })
      return
    }

    if (files.file instanceof Array) {
      const paths: string[] = []

      await Promise.all(files.file.map(async item => {
        paths.push(await saveFile(item))
      }))

      if (paths.length === 1 && paths[0] === 'Unsupported file type') {
        res.status(400).json({ message: 'Unsupported file type' })
        return
      }

      res.json({ paths })
    } else {
      res.status(400).json({ message: 'Error File' })
    }
  })
}

export default upload
