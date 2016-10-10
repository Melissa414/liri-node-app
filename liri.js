var mediaLink = require("./keys.js");
var request = require('request');
var twitter = require('twitter');
var spotify = require('spotify');
// var client = new twitter(keys.twitterKeys);
var fs = require("fs");

var objective = process.argv[2];

  // var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

switch(objective) {

    case "my-tweets":
        displayTweet();
    break;

    case "spotify-this-song":
        spotifyInfo();
    break;

    case "movie-this":
        omdbInfo();
    break;

    case "do-what-it-says":
        doSomething();
    break;

    default:
      console.log("Please input: my-tweets, spotify-this-song, movie-this or do-what-it-says");

}

function displayTweets() {

  var userName = mbaldwin91S;
  client.get('statuses/user_timeline', userName, function(error, tweets, response){

  for(var i = 0; i<tweets.length; i++) {
    var time = tweets[i];

    console.log( userName, tweets[i], "Time: " + date);

  }
});

function spotifyInfo() {

  // request("https://www.spotify.com/us/", function(error, response, body){
  spotify.search({ type: "track", query: song}, function(error, data){

  if(!error){
    for(var i = 0; i < data.length; i++) {
      var spotifyData = data[i];

          //shows artist, songname, and album
      console.log(spotifyData.artist[0].name);
      console.log(spotifyData.songname.name);
      console.log(spotifyData.album.name);

          //appending files to random.txt
      fs.appendFile("random.txt", spotifyData.artist.name);
      fs.appendFile("random.txt", spotifyData.songname.name);
      fs.appendFile("random.txt", spotifyData.album.name);
     }
    }

  else {  //error message
      console.log("Error, please try again.");

};

function omdbInfo(movie) {

var omdbUrl = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json";

request(omdbUrl, function (error, response, body) {

  if(!error && response.statusCode == 200) {

      console.log("The movie's rating is: " + JSON.parse(body)["imdbRating"]);
      console.log("The release year is: " + JSON.parse(body) ["releaseYear"]);
      console.log("The actors: " + JSON.parse(body) ["actors"]);
      console.log("Plot: " + JSON.parse(body) ["plot"]);

      fs.appendFile("random.txt", "Title: " + body.title);
      fs.appendFile("random.txt", "Release Date: " + body.year);
      fs.appendFile("random.txt", "Actors: " + body.actors);
      fs.appendFile("random.txt", "Plot: " + body.plot);

  // else {
  //     console.log("Error, please try again.");
  // }
 }
});


// function doThing() {


// }