var http = require('http');

var hallsModule = require('./halls');
var luxon = require('luxon');

var provjera = hallsModule.halls.filter(hall => hall.reservation.isReserved === true);
console.log(provjera);

var reservedUntil = provjera[0].reservation.reservedUntil;
var formattedDate = luxon.DateTime.fromISO(reservedUntil).toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' });;
console.log(formattedDate);


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(formattedDate);
  }).listen(8080);
  console.log('Server running at http://localhost:8080');