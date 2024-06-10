import { APP_HOST } from '@/config'
import app from '@/app'

const { host, port } = APP_HOST

app.listen(port, host, () => {
  console.log(`app is listening on http://${host}:${port}`)
})
