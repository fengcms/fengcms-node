import fs from 'fs'
import path from 'path'
import { flatten } from 'lodash'
import { DB_CONFIG } from '@/config'
import { enums, models } from '@/model'
import { makeDir } from '@/utils/tools'
import { FieldTypes } from '@/types/modelBuild'

const calcPrefix = () => {
  const { type, username, password, host, prot, database } = DB_CONFIG
  return `// ./prisma/schema.prisma 文件为 Prisma 数据模型定义文件，在本系统中，是使用 TypeScript 生成的。
// 请勿直接修改该配置文件，如果需要调整数据模型，请修改 src/model.ts
// 之后执行 npm run build:model 重新生成 schema.prisma 文件
// 升级后请执行 npx prisma migrate dev 同步到数据库

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "${type}"
  url      = "${type}://${username}:${password}@${host}:${prot}/${database}"
}

`
}

const calcEnums = () => {
  let res = '// 以下数据为 enums 枚举类型定义\n\n'
  Object.keys(enums).forEach(key => {
    let item = `enum ${key} {\n`
    enums[key].forEach((v: string) => {
      item += `  ${v}\n`
    })
    item += '}\n\n'
    res += item
  })
  return res
}

const calcModelSpace = () => {
  const arr = flatten(Object.keys(models).map(key => {
    return Object.keys(models[key]).map(k => {
      return {
        filedLength: k.length,
        typeLength: models[key][k].type.length
      }
    })
  }))
  let { filedLength: filedLengthMax, typeLength: typeLengthMax } = arr[0]

  arr.reduce((acc, { filedLength, typeLength }) => {
    if (filedLength > filedLengthMax) filedLengthMax = filedLength
    if (typeLength > typeLengthMax) typeLengthMax = typeLength
    return acc
  }, {})

  return {
    nameSpace: [...new Array(~~(filedLengthMax / 4) * 4 + 8)].map(() => ' ').join(''),
    typeSpace: [...new Array(~~(typeLengthMax / 4) * 4 + 8)].map(() => ' ').join('')
  }
}

const calcModelField = (filedName: string, fileds: FieldTypes, nameSpace: string, typeSpace: string) => {
  const nameSuffixSpace = nameSpace.substring(0, nameSpace.length - filedName.length)
  const typeSuffixSpace = typeSpace.substring(0, typeSpace.length - fileds.type.length - (fileds.required ? 0 : 1))
  let res = '  '
  res += filedName + nameSuffixSpace + fileds.type
  res += (fileds.required ? '' : '?') + (fileds.modifiers ? (typeSuffixSpace + fileds.modifiers) : '')
  res += '\n'
  return res
}

const calcModels = () => {
  const { nameSpace, typeSpace } = calcModelSpace()
  // console.log(nameSpace, typeSpace)
  let res = '// 以下数据为 models 数据模型定义\n\n'
  Object.keys(models).forEach(key => {
    let item = `model ${key} {\n`
    Object.keys(models[key]).forEach(k => {
      item += calcModelField(k, models[key][k], nameSpace, typeSpace)
    })
    item += '}\n\n'
    res += item
  })
  return res
}

const fileContent = `${calcPrefix()}
${calcEnums()}
${calcModels()}
`

const main = async () => {
  const rootPath = process.cwd()
  await makeDir(path.resolve(rootPath, './prisma'))
  fs.writeFile(path.resolve(rootPath, './prisma/schema.prisma'), fileContent, err => {
    if (err) {
      console.error(
        new Error('Prisma 配置文件写入失败')
      )
    }
    console.log('schema.prisma 配置文件生成成功！请执行 npx prisma migrate dev 命令，同步到数据库')
  })
}

main()
