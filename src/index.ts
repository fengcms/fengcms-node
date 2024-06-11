import { APP_BASE } from '@/config'
import app from '@/app'

const { host, port } = APP_BASE

app.listen(port, host, () => {
  console.log(`app is listening on http://${host}:${port}`)
})
