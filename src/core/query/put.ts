import { CoreQuery } from '@/types'

const put: CoreQuery = async ({ apiName, id, params }) => {
  console.log(apiName, id, params)
}

export default put
