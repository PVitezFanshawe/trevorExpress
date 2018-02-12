var express = require('express');
var router = express.Router();

const templateTypes = [
  {name: "Jade", usefulness : "pretty ok"},
  {name: "EJS", usefulness : "too many <%"},
  {name: "Handlebars", usefulness : "i can ride my bike with no"}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    message: 'not broken',
    template: templateTypes
  });
});

module.exports = router;
