var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');
var body=require('body-parser');

router.post('/', function (req, res) {
//  console.log("in addjs file");

  var title = req.body.title;
  var year = req.body.year;
  var actors = req.body.actors;
  var director = req.body.director;
  var plot = req.body.plot;
  var language = req.body.language;
  var country = req.body.country;
  var released = req.body.released;
  var imdbRating = req.body.imdbRating;
  var awards = req.body.awards;
  var poster = req.body.poster;


  jsonfile.readFile("./json/movies.json", function(err, obj) {
    console.log(err);
          var newObj={};

          newObj.Title=title;
          newObj.Year=year;
          newObj.Actors=actors;
          newObj.Director=director;
          newObj.Plot=plot;
          newObj.Language=language;
          newObj.Country=country;
          newObj.Released=released;
          newObj.imdbRating=imdbRating;
          newObj.Awards=awards;
          newObj.Poster=poster;

          console.log(err);
          obj.push(newObj);

      jsonfile.writeFile("./json/movies.json", obj, function(err) {
            if (err) throw err;
            console.log(err);
        });
});
    res.redirect( "/" );
});

module.exports = router;
