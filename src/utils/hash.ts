import crypto from 'crypto'

export const beHash = (source: any, type: string) => {
  const hash = crypto.createHash(type)
  hash.update(source)
  return hash.digest('hex')
}

export const calcHashMd5 = (source: any) => {
  return beHash(source, 'md5')
}
export const calcHashSha1 = (source: any) => {
  return beHash(source, 'sha1')
}
export const calcHashSha256 = (source: any) => {
  return beHash(source, 'sha256')
}
