import { Hono } from 'hono'
import connectDB from './db'
const app = new Hono()


connectDB()
  .then(()=>{
    app.get('/', (c) => {
      return c.text('Hello Hono!')
    })
  })
  .catch(()=>{
    console.log("error while connecting to db")
  })

export default app
