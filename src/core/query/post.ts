import { CoreQuery } from '@/types'

const post: CoreQuery = async ({ apiName, id, params }) => {
  console.log(apiName, id, params)
}

export default post
