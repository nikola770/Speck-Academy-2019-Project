var http = require('http');

  var halls = [];

halls.createHall = function(ID, name) {
  var proba ={
    ID: ID,
    name: name,
    reservation : {
      isReserved: false,
      reservedFrom: null,
      reservedUntil: null
    },
    rezerviraj: function (a,b) {
      this.reservation.isReserved= true;
      this.reservation.reservedFrom= a;
      this.reservation.reservedUntil= b;
    },
    ukloni: function () {
      this.reservation.isReserved= false;
      this.reservation.reservedFrom= null;
      this.reservation.reservedUntil= null;
    },
  };
  this.push(proba);
  // return proba;
}
for (var i = 0; i < 10;i++){
  halls.createHall (Math.floor(Math.random() * 10000), "zaghall-"+i);
}

halls[3].rezerviraj (new Date(), new Date (2019, 02, 31));
halls[7].rezerviraj (new Date(2019, 02, 29), new Date (2019, 03, 02));

console.log(halls);

var imena = halls.map ((element) => {
  return element.name;
});
console.log(imena);

console.log(imena.join());
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(imena.join());
}).listen(8080);

console.log('Server running at http://localhost:8080');
  