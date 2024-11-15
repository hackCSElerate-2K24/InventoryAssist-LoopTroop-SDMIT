import { Hono } from 'hono'
import {logger} from 'hono/logger'
import categoryRoute from './routes/category'
const app = new Hono()


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.use(logger())

app.route('/category', categoryRoute)

export default app
