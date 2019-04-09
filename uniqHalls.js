var http = require('http');
var hallsModule = require('./halls');
var lodash = require('lodash');

var jedinstvenaImena = [];
var jedinstvenaHala = [];

for (var i = 0; i < hallsModule.halls.length; i++) {
    if ( jedinstvenaImena.includes(hallsModule.halls[i].name)) {
    } else {
        jedinstvenaImena.push(hallsModule.halls[i].name);
        jedinstvenaHala.push(hallsModule.halls[i]);
    }
    // jedinstvenaImena.push(hallsModule.halls[i].name);
}
//console.log(jedinstvenaHala);
var rezultat = lodash.uniqBy(hallsModule.halls, 'name');
console.log(rezultat);

var imena = hallsModule.halls.map ((element) => {
    return element.name;
  });
  console.log(imena);


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(imena.join());
  }).listen(8080);
  console.log('Server running at http://localhost:8080');