var luxon = require('luxon');

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
reservedFrom: new Date (2019, 03, 28).toISOString(),
reservedUntil: new Date (2019, 04, 28).toISOString()}
},{
ID: Math.floor(Math.random() * 10000),
name: "sjever",
reservation : {
isReserved: false,
reservedFrom: null,
reservedUntil: null}
},{
ID: Math.floor(Math.random() * 10000),
name: "sjever",
reservation : {
isReserved: true,
reservedFrom: new Date (2019, 03, 25).toISOString(),
reservedUntil: new Date (2019, 04, 10).toISOString()}
},{
ID: Math.floor(Math.random() * 10000),
name: "jugo",
reservation : {
isReserved: false,
reservedFrom: null,
reservedUntil: null}
}];

module.exports = {
    halls: halls
};

/*
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
    */