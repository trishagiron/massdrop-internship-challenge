var express = require('express');
var app = express();
var request = require("request");
var path = require('path');

// utilized MongoDB for the database
var mongoose = require('mongoose');
var URLdata = require('./dbSchema');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/urlrequests');

// utilized Pug to adjust HTML output
var pug = require('pug');
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname)));

// starts initial page
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/html/index.html');
});

// page in response to URL input
app.get('/response_page', function(req, res) {
    request({
        url: "http://" + req.query.url,
    }, function(error, response, body) {
        response = {
            url: "http://" + req.query.url,
            status: "",
            HTMLdata: ""
        };
        if (!body) {
            res.sendFile(__dirname + '/html/error.html');
        } else {
            response.HTMLdata = body;
            if (response.HTMLdata != "") {
                response.status = "Complete"
            } else {
                response.status = "No output"
            }
            URLdata.create(response).then(function(urldata) {
                res.render('accepted', {
                    jobNum: " " + urldata._id,
                });
            });
        }
    });
})

// page(s) for checking ID status
app.get('/status', function(req, res) {
    var query = req.query.jobnum;
    URLdata.find({
        "_id": query
    }).catch(function(err) {
        if (err) {
            errOut();
        }
    }).then(function(urldata) {
        if (urldata.length > 0) {
            res.render('checkquery', {
                jobnumstat: "Job ID: " + query,
                urlstat: "URL: " + urldata[0].url,
                status: "Status: " + urldata[0].status,
                htmltext: urldata[0].HTMLdata
            });
        } else {
            errOut();
        }
    });

    function errOut() {
        res.render('notfound', {
            error: "Job not found",
        });
    }
})

var server = app.listen(3000, function() {
    var port = server.address().port
    console.log("Running at localhost:", port)
})
