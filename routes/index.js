var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  getList(res, renderPage);
});

function renderPage(res, dataList){
  res.render('index', {
    title: "FortiGuard Application Control",
    subtitle: "FortiGuard Application Control",
    data: dataList
      });
}

function getList(res, callback) {
  var request = require("request"),
      http = require("http"),
      url = "http://www.fortinet.com/test.json";

  request({
    url: url,
    json: true
  }, function (error, response, body) {

    if (!error && response.statusCode === 200)
  {
    var json = JSON.parse(body.substring(0,body.length - 1));
    callback(res,json);
  }
  });
}

module.exports = router;
