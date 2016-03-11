var DHT = require('bittorrent-dht')
var dht = new DHT()

var tid = setTimeout(function () {
  process.exit(1)
}, 10000)

dht.on('peer', function (peer, hash, from) {
  console.log('found a peer ' + peer.host)
  found = true
})

dht.listen(20000)
dht.lookup('e3811b9539cacff680e418124272177c47477157')

dht.once('peer', function () {
  setTimeout(function () {
    dht.destroy()
    clearTimeout(tid)
  }, 1000)
})

