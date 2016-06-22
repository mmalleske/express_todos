var express = require('express');
var router = express.Router();

var items = [{name: "find apartment"},
              {name: "find apartment"},
              {name: "find apartment"}];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { items: items });
});
// Get new toDo item
router.get('/new', function (req, res, next){
  res.render('newitem/new');
});
router.post('/', function (req, res, next){
  var newItem = (req.body);
  items.push(newItem);
  res.redirect('/');
});

module.exports = router;
