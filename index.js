const httpProxy = require("http-proxy")
const http = require("http")
const url = require("url")

const proxy = httpProxy.createProxyServer()

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query
  if (query.url)
    proxy.web(req, res, { target: query.url }, e => {
      res.writeHead(400, { 'Content-Type': 'text/plain' })
      res.end("Invalid url " + query.url + ".")
    })
  else {
    res.writeHead(400, { 'Content-Type': 'text/plain' })
    res.end("Missing url!\nUsage: /?url=http://url-to.proxy")
  }
}).listen(process.env.PORT || 8080)

