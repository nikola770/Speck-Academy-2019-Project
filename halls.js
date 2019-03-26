var http = require('http');

var halls = [{
ID: Math.floor(Math.random() * 10000),
name: "Jug",
reservation : {
isReserved: false,
reservedFrom: null,
reservedUntil: null}
}, {
ID: Math.floor(Math.random() * 10000),
name: "zapad",
reservation : {
isReserved: true,
reservedFrom: new Date (2019, 03, 28),
reservedUntil: new Date (2019, 04, 28)}
},{
ID: Math.floor(Math.random() * 10000),
name: "sjever",
reservation : {
isReserved: false,
reservedFrom: null,
reservedUntil: null}
},{
ID: Math.floor(Math.random() * 10000),
name: "istok",
reservation : {
isReserved: true,
reservedFrom: new Date (2019, 03, 25),
reservedUntil: new Date (2019, 04, 10)}
},{
ID: Math.floor(Math.random() * 10000),
name: "jugo",
reservation : {
isReserved: false,
reservedFrom: null,
reservedUntil: null}
}];


/*for (var i = 0; i < 5;i++){
  halls.createHall (Math.floor(Math.random() * 10000), "zaghall-"+i);
}*/
/*
halls[2].rezerviraj (new Date(), new Date (2019, 02, 31));
halls[4].rezerviraj (new Date(2019, 02, 29), new Date (2019, 03, 02));

console.log(halls);
*/
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
