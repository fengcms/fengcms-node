import { models as modelsConfig } from '@/model'

let models: Record<string, string[]> | null = null
const initModel = () => {
  if (!models) {
    const m: Record<string, string[]> = {}
    Object.keys(modelsConfig).forEach((key) => {
      m[key.toLocaleLowerCase()] = Object.keys(modelsConfig[key])
    })
    models = m
  }
  return models
}

export default initModel()
