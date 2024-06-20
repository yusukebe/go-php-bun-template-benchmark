import { Hono } from 'hono'
import React from 'react'
import { renderToReadableStream } from 'react-dom/server'

const app = new Hono()

app.get('/', async (c) => {
  const data: string[] = []
  for (let i = 0; i < 1000; i++) {
    data.push('ほげ')
  }
  return c.body(
    await renderToReadableStream(
      <html>
        <body>
          <ul>
            {data.map((hoge, i) => {
              return <li key={i}>{hoge}</li>
            })}
          </ul>
        </body>
      </html>
    ),
    200,
    {
      'Content-Type': 'text/html; charset=UTF-8'
    }
  )
})

export default app
