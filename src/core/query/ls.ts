import { CoreQuery } from '@/types'

const ls: CoreQuery = async ({ apiName, id, params }) => {
  console.log(apiName, id, params)
}

export default ls
