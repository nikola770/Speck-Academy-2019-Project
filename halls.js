var luxon = require('luxon');

/*var halls = [{
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
}];*/
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
var imena = [
  "Velika sportska dvorana", 
  "Dvorana Hrvatskog doma", 
  "Dvorana Gradske knjižnice", 
  "Dvorana TIC (Turistički dom)", 
  "Konferencijske dvorane RCTP (Razvojni centar i tehnološki park)",
  "Ferežani"
]
  

for (var i = 0; i < imena.length;i++){
  halls.createHall (i + 1, imena[i]);
}

//halls[0].rezerviraj (new Date (2019, 03, 25), new Date (2019, 04, 01));
  //console.log(halls[0].reservation);

  //halls[2].rezerviraj (new Date (2019, 04, 25), new Date (2019, 05, 01));

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