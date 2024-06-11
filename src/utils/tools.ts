import { APP_BASE } from '@/config'
export const parserApiNameAndID = (originalUrl: string) => {
  const [apiName, id, errorUrl] = originalUrl.replace(APP_BASE.prefix, '').split('?')[0].split('/')
  return {
    apiName,
    id,
    errorUrl
  }
}
