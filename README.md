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
  Reqs/sec      6104.15    1690.13   28532.68
  Latency       20.88ms     3.07ms    84.20ms
  HTTP codes:
    1xx - 0, 2xx - 59881, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:    86.88MB/s
```

PHP 8.2 fpm smarty

```
$ bombardier -c 125 --fasthttp http://localhost:8081
Bombarding http://localhost:8081 for 10s using 125 connection(s)
[=========================================================] 10s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec      3204.40     450.33    8130.86
  Latency       39.05ms     4.49ms   116.11ms
  HTTP codes:
    1xx - 0, 2xx - 32046, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:    46.67MB/s
```

Go 1.21 html/tmeplate

```
$ bombardier -c 125 --fasthttp http://localhost:8080
Bombarding http://localhost:8080 for 10s using 125 connection(s)
[=========================================================] 10s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec      2508.69     278.18    3186.42
  Latency       49.70ms    80.77ms      0.90s
  HTTP codes:
    1xx - 0, 2xx - 25195, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:    36.58MB/s
```

## License

MIT

Go and PHP code and some files are based on [go-php-template-benchmark](https://github.com/mattn/go-php-template-benchmark) by Yasuhiro Matsumoto (a.k.a. mattn).

## Author

Yusuke Wada
