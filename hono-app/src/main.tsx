import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  const data: string[] = []
  for (let i = 0; i < 1000; i++) {
    data.push('ほげ')
  }
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
