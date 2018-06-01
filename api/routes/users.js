var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(
    [
      {id:1, name: 'Darth Vader'},
      {id:2, name: 'Jar Jar Binks'},
      {id:3, name: 'Obi-Wan Kenobi'},
      {id:4, name: 'R2D2'},
    ]
  )
});

module.exports = router;
