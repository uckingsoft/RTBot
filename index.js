require('dotenv').config();

var express = require("express");
var distance = require('google-distance-matrix');

distance.key('AIzaSyD3zxw5htVy5M3RKK_weRECSM3rkfVtxZ8');
distance.departure_time(new Date().getUTCDate);
distance.mode('driving');

var origins = ['yaba lagos'];
var destinations = ['lekki lagos'];

distance.matrix(origins, destinations, function (err, distances) {
   if(distances) {
      console.log(distances);
    }
    if (!err){
      for (var i=0; i < origins.length; i++) {
            for (var j = 0; j < destinations.length; j++) {
            if (distances.rows[0].elements[j].status == 'OK') {
                    var distance = distances.rows[i].elements[j];
                    console.log('Distance from ' + origins + ' to ' + destinations + ' is ' + JSON.stringify(distance));
                } else {
                    console.log(destinations + ' is not reachable by land from ' + origins);
                }
          
        }}
           

    }
})
