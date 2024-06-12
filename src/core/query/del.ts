import { CoreQuery } from '@/types'

const del: CoreQuery = async ({ prisma, table, id }) => {
  if (!id) return null
  const ids = id.split(',').map(val => Number(val))
  try {
    const res = await table.deleteMany({
      where: {
        id: {
          in: ids
        }
      }
    })
    await prisma.$disconnect()
    return res
  } catch (error) {
    return null
  }
}

export default del
