import { models } from '@/model'

export const initModel = () => {
  const m: Record<string, string[]> = {}
  Object.keys(models).forEach((key) => {
    m[key.toLocaleLowerCase()] = Object.keys(models[key])
  })
  return m
}
