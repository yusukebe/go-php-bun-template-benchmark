import { Hono } from 'hono'
import data from './input.json'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    <html>
      <body>
        <ul>
          {data.map((hoge) => {
            return <li>{hoge}</li>
          })}
        </ul>
      </body>
    </html>
  )
})

export default app
