var express = require('express');
var router = express.Router();
var body=require('body-parser');
var jsonfile = require('jsonfile');


router.post('/', function (req, res) {

  var title = req.body.title;
  var year = req.body.year;
  var actors = req.body.actors;
  var director = req.body.director;
  var plot = req.body.plot;
  var language = req.body.language;
  var country = req.body.country;
  var released = req.body.released;
  var rating = req.body.imdbRating;
  var awards = req.body.awards;
  var poster = req.body.poster;


  jsonfile.readFile("./json/movies.json", function(err, obj) {
       var fileObj = obj;

      for(var i=0;i<obj.length;i++){
        if(obj[i].Title===title){
          obj[i].Year=year;
          obj[i].Actors=actors;
          obj[i].Director=director;
          obj[i].Plot=plot;
          obj[i].Language=language;
          obj[i].Country=country;
          obj[i].Released=released;
          obj[i].imdbRating=rating;
          obj[i].Awards=awards;
          obj[i].Poster=poster;


                    fileObj[i]=obj[i];
                    console.log("fileObj :"+fileObj[i]);
                    break;
                  }
                }

      jsonfile.writeFile("./json/movies.json", fileObj, function(err) {
            if (err) throw err;
            console.log(err);
        });

    })

  res.redirect( "/" );

})

module.exports = router;
