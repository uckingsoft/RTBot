require('dotenv').config();

var express = require("express");

var googleMapsClient = require('@google/maps').createClient({
 key: process.env.Google_API_Key
});


googleMapsClient.geocode({
address:"1600 amphitheatre parkway mountain view california"
},
function(err, response){
if(!err){
 console.log(response.json.results[0].geometry.location.lat);
} })


