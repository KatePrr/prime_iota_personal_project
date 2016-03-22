var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//// passport google authentication
//var GoogleStrategy = require('passport-google-oauth20').Strategy;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/iota_personal_project');
mongoose.model(
    'Vendor_Entry',
    new Schema({
        "vendor_name": String,
        "farm_name": String,
        "location": String,
        "city": String,
        "state": String,
        "zip": Number,
        "last_seen": Date,
        "products": String,
        "payment": String,
        "url": String,
        "certification": String,
        "phone": String,
        "description": String
    },
        {
            collection: 'vendors'
        }

    ));

var Vendor_Entry =  mongoose.model('Vendor_Entry');

app.post('/vendor', function(req, res) {
    //console.log(req.body);
    var newVendor = new Vendor_Entry({
        "vendor_name": req.body.vendor_name,
        "farm_name": req.body.farm_name,
        "location": req.body.location,
        "city": req.body.city,
        "state": req.body.state,
        "zip": req.body.zip,
        "last_seen": req.body.last_seen,
        "products": req.body.products,
        "payment": req.body.payment,
        "url": req.body.url,
        "certification": req.body.certification,
        "phone": req.body.phone,
        "description": req.body.description
    });

    newVendor.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }
        Vendor_Entry.find({}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }
            res.send(data);
        });
    });
});


app.get('/vendor/:searchCriteria', function(req, res) {
    console.log('here');
    Vendor_Entry.find({zip: req.params.searchCriteria}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
        console.log(data);
    });
});




// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views/templates'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
