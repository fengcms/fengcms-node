import path from 'path'

export const APP_BASE = {
  host: '0.0.0.0',
  port: 4888,
  prefix: '/api/v1/' // 要以 / 结尾
}

// 默认分页
export const DEFAULT_PAGESIZE = 10

// 数据库配置
export const DB_CONFIG = {
  // 数据库类型， mysql | postgresql
  type: 'mysql',
  host: 'localhost',
  prot: 3306,
  username: 'root',
  password: '123456',
  // 数据库名称
  database: 'fengcms'
}

// 设置 RSA 秘钥文件配置
export const RSA_PRIVATE_KEY_PATH = path.resolve(__dirname, './key/rsa_private_key.pem')
export const RSA_PUBLIC_KEY_PATH = path.resolve(__dirname, './key/rsa_public_key.pem')

export const JWT_SECRET = 'fengcms'
export const JWT_EXPIRES_IN = '1d'
