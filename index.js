var express = require('express')
var app = express()


var gosterilsin =
{
  "unix": null,
  "natural": null
}

app.get('/', function (req, res) {
  

  res.send('Welcome to the Timestamp Microservice<br>Use: URL/[Unix Timestamp] or URL/[Natural Language Date] <br>')

  
})


app.get('/:Id', function (req, res) {
//      res.send(req.params.Id)

//  var d = Date.parse("March 21, 2012")

/*
var d = new Date(req.params.Id);

var f = Number(req.params.Id)
*/


// var d = new Date(req.params.Id) || new Date(Number(req.params.Id))

// var d = new Date(Number(req.params.Id))




var gelen = req.params.Id

 // var d = Date.parse(req.params.Id)

/*
var d = new Date(req.params.Id)




  if (isNaN(d))
  {
     d = new Date(Number(req.params.Id))
  }
*/  
  
  
var d = new Date(1000 * Number(req.params.Id))






  if (isNaN(d))
  {
     d = new Date(req.params.Id)
  }



  if (!isNaN(d))
  {
      // res.send(d.toString())
        gosterilsin.unix = d.getTime() / 1000;
 gosterilsin.natural = d.toDateString().slice(4);
      
  }
  
  else
  {
              gosterilsin.unix = null
               gosterilsin.natural = null
  }


   res.send(gosterilsin)

/*
  var gubidik = new Date(req.params.Id)
  
    if (isNaN(gubidik))
  {
     gubidik = new Date(Number(req.params.Id))
  }
  
  gosterilsin.unix = gubidik.getTime() / 100;
 gosterilsin.natural = gubidik.toDateString().slice(4);
 // gosterilsin.natural = gubidik.getMonth() + " " + gubidik.getDate() + ", " + gubidik.getFullYear()
  
  
  
 //res.send('Hello World!')
 res.send(gosterilsin)
*/


})




app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})