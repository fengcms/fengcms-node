import { CoreQuery } from '@/types'

const get: CoreQuery = async ({ apiName, id, params }) => {
  console.log(apiName, id, params)
}

export default get
