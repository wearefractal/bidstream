connect = require "connect"
Warlock = require "warlock"

# Web server
webServer = connect()
webServer.use connect.favicon()
webServer.use connect.staticCache()
webServer.use connect.static app.paths.public

server = webServer.listen app.web.port

shared =
  auction:
    title: 'Awesome Book'
    image_url: 'http://ecx.images-amazon.com/images/I/51GeFt0kCjL._SL135_.jpg'
    bids: [
      name: 'Choni'
      bid: 70
    ,
      name: 'Contra'
      bid: 67
    ]

# Warlock
lock = Warlock.createServer server: server
lock.add shared

console.log "Server started on #{app.web.port}"