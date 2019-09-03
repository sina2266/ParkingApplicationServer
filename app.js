




var apiVersion = "v1.0";

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ParkingRoute = require('./Router/ParkingRoute');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.use("/"+apiVersion+'/parking', ParkingRoute);




/*app.use(function(req,res,next){
//  console.log(req.get('host')+req.originalUrl);
  console.log(res);

})*/

app.listen(3001, function() {
    console.log('Task api up and running...');
});


module.exports = app;







