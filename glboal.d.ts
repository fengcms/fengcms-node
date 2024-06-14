/* eslint-disable no-var */
import { PrismaClient, Prisma } from '@prisma/client'

declare global {
  var prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  var models: Record<string, string[]>
}

export {}
