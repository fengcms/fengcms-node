export const captchaCache: { uuid: string; time: number; value: string }[] = []

export const captchCheck = (uuid: string, value: string) => {
  const index = captchaCache.findIndex((item) => item.uuid === uuid)
  const captch = captchaCache[index]
  if (!captch) return false
  let res = true
  const { time } = captch
  if (+new Date() - time > 1000 * 60 * 5) res = false
  if (captch.value.toLowerCase() !== value.toLowerCase()) res = false
  delete captchaCache[index]
  captchaClear()
  return res
}

export const captchaClear = () => {
  if (captchaCache.length > 4) {
    const newArr = captchaCache.filter((item) => +new Date() - item.time < 1000)
    captchaCache.length = 0
    captchaCache.push(...newArr)
  }
}
