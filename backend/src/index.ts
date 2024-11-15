import { Hono } from 'hono'
import {logger} from 'hono/logger'
import categoryRoute from './routes/category'
import productRoute from './routes/product'
const app = new Hono()


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.use(logger())

app.route('/category', categoryRoute)

app.route('/product',productRoute)

export default app
