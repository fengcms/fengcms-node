import { PrismaClient } from '@prisma/client'
import { isNaN } from 'lodash'
import { DEFAULT_PAGESIZE } from '@/config'
import { CoreQuery, CoreQueryRequest, LsCondition } from '@/types'

async function getModelColumnNames (prisma: PrismaClient, apiName: string) {
  try {
    // 执行原生 SQL 查询
    const result: any[] = await prisma.$queryRaw`
      SELECT COLUMN_NAME 
      FROM INFORMATION_SCHEMA.COLUMNS 
      WHERE TABLE_NAME = ${apiName};
    `
    // 提取字段名
    const columnNames = result.map(row => row.COLUMN_NAME)

    console.log(columnNames) // 输出字段名数组
    return columnNames
  } catch (error) {
    console.error('Error fetching column names:', error)
    throw error
  } finally {
    // 确保关闭 Prisma 客户端连接
    prisma.$disconnect()
  }
}

const ls: CoreQuery = async ({ prisma, table, apiName, params }): Promise<CoreQueryRequest> => {
  const pageSize = params?.pagesize ? Number(params.pagesize) : DEFAULT_PAGESIZE
  const page = params?.page ? Number(params.page) : 0
  // console.log(table)
  if (isNaN(pageSize) || isNaN(page)) {
    return { code: 400, message: 'Error parameters, pagesize and page can only be numbers' }
  }
  console.log(1122, prisma.article.fields)
  getModelColumnNames(prisma, apiName)
  const condition: LsCondition = {
    take: pageSize,
    skip: page * pageSize,
    orderBy: { id: 'desc' }
  }
  if (pageSize === -1) {
    delete condition.take
    delete condition.skip
  }
  // console.log(apiName, params)
  const data = await table.findMany(condition)
  return { code: 200, data }
}

export default ls
