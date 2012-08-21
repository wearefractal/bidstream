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
    title: 'Apple iPhone 4S 16GB - White'
    watchedBy: 23
    seller: 
      name: 'Contra'
      rating: 479
    images: [
      #  src: 'http://i.imgur.com/5IZ3Q.jpg'
      #,
      #  src: 'http://i.imgur.com/ehqYb.jpg'
      #,
        src: 'http://i.imgur.com/lc954.jpg'
    ]
    bids: [
      name: 'Choni'
      bid: 70
      time: 1345512533015
    ,
      name: 'Shoni'
      bid: 67
      time: 1345512533035
    ]

# Warlock
lock = Warlock.createServer server: server
lock.add shared

console.log "Server started on #{app.web.port}"