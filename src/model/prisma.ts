import { PrismaClient } from '@prisma/client'

let prismaInstance: PrismaClient | null = null

function getPrismaClient (): PrismaClient {
  if (!prismaInstance) {
    prismaInstance = new PrismaClient()
  }
  return prismaInstance
}

export default getPrismaClient()
