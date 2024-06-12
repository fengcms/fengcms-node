import { CoreQuery } from '@/types'

const del: CoreQuery = async ({ apiName, id, params }) => {
  console.log(apiName, id, params)
}

export default del
