# go-php-hono-template-benchmark

template engine benchmark for Go(html/template), PHP, and Hono(JSX, Deno/jsx-precompile).

## Result

Hono

```
$ bombardier -c 125 --fasthttp http://localhost:8082
Bombarding http://localhost:8082 for 10s using 125 connection(s)
[=========================================================] 10s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec      5642.63     732.77   12113.23
  Latency       22.24ms     3.04ms    88.69ms
  HTTP codes:
    1xx - 0, 2xx - 56230, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:    81.56MB/s
```

PHP 8.2 fpm smarty

```
$ bombardier -c 125 --fasthttp http://localhost:8081
Bombarding http://localhost:8081 for 10s using 125 connection(s)
[=========================================================] 10s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec      4502.45     387.75    5489.76
  Latency       27.72ms     2.64ms    88.90ms
  HTTP codes:
    1xx - 0, 2xx - 45110, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:    65.76MB/s
```

Go 1.21 html/tmeplate

```
$ bombardier -c 125 --fasthttp http://localhost:8080
Bombarding http://localhost:8080 for 10s using 125 connection(s)
[=========================================================] 10s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec      3873.38     350.05    4702.26
  Latency       32.22ms    53.93ms   700.71ms
  HTTP codes:
    1xx - 0, 2xx - 38827, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:    56.44MB/s
```

## License

MIT

Go and PHP code and some files are based on [go-php-template-benchmark](https://github.com/mattn/go-php-template-benchmark) by Yasuhiro Matsumoto (a.k.a. mattn).

## Author

Yusuke Wada
