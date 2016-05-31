var express = require('express');
var router = express.Router();
var fs=require('fs');

router.get('/', function (req, res) {
  var content=fs.readFileSync('./json/movies.json');
  res.json(content.toString());
  console.log("Res::"+res);
});

module.exports = router;
