var express = require('express');
var mysql = require('mysql')
var connect = require('../utils/sqlconnect');
var router = express.Router();

const templateTypes = [
  {name: "Jade", usefulness : "pretty ok"},
  {name: "EJS", usefulness : "bad"},
  {name: "Handlebars", usefulness : "alright"}
]

/* GET home page. */
router.get('/', function(req, res, next) {


  connect.query('SELECT * FROM mainmodel', (err, result, fields) => {
    if(err) {
      throw err; console.log(err);
    } else {
      console.log(result);
    }
  });
  res.render('home', { 
    title: 'Express',
    message: 'I can ride my bike with',
    bodymessage: 'no handlebars, no handlebars, no handlebars',
    template: templateTypes
  });
});

module.exports = router;
