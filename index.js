var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var hallsModule = require('./halls');

app.use(bodyparser.urlencoded({
    extended: false
}));

app.get('/', function(req, res){
    res.redirect('/index');
  });

app.get('/halls', function (req, res) {
    res.json(hallsModule.halls);

});

app.post('/hallsCreate', function (req, res) {
    //console.log(req.body.dvorana);
    hallsModule.halls.createHall(
        hallsModule.halls[hallsModule.halls.length - 1].ID + 1, 
        req.body.dvorana
    );
    res.redirect('/halls');
});

app.post('/hallsUpdate', function (req, res) {
    var index = null;
    for (var i = 0; i < hallsModule.halls.length; i++){
        if (req.body.hallid == hallsModule.halls[i].ID) {
            index = i;
        }
    }
    if (index === null) {
        res.redirect('/halls');
    }

    //identiti operator - provjera da li postoji (!!)
    if (!!req.body.isReserved ) {
        hallsModule.halls[index].rezerviraj (new Date (), new Date (req.body.reservation));
    } else {
        hallsModule.halls[index].ukloni();
    }

    res.redirect('/halls');
});

app.post('/hallsDelete', function (req, res) {
    hallsModule.halls = hallsModule.halls.filter(hall => hall.ID !== parseInt(req.body.hallid));
    res.redirect('/index.html');
});

app.use(express.static('./public'));

app.listen(3010);
console.log('localhost:3000');