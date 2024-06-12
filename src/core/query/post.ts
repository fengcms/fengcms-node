import { CoreQuery } from '@/types'

const post: CoreQuery = async ({ table, apiName, id, params }) => {
  const res = await table.create({
    data: params
  })
  console.log(res, apiName, id, params)
  return ''
}

export default post
