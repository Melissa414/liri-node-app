var mediaLink = require("./keys.js");
var request = require('request');
var twitter = require('twitter');
var spotify = require('spotify');
// var client = new twitter(keys.twitterKeys);
var fs = require("fs");

var objective = process.argv[2];

  // var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

switch(objective){
    case "my-tweets";
      displayTweet();
    break;

    case "spotify-this-song";
      spotifyInfo();
    break;

    case "movie-this";
      omdbInfo();
    break;

    case "do-what-it-says";
      doSomething();
    break;

    default:
      console.log("Please input: my-tweets, spotify-this-song, movie-this or do-what-it-says");
}

function showTweets() {

  var name = ("screen name: mBaldwin91");
  //

}

function spotifyInfo() {

  request("https://www.spotify.com/us/", function(error, response, body){

  if(!error){
    for(var i = 0; i < data.length; i++){
      var spotifyData = data[i];

      console.log(spotifyData.artist[0].name);
      console.log(spotifyData.songname.name);
      console.log(spotifyData.album.name);

      fs.appendFile("random.txt", spotifyData.artist[0].name);
      fs.appendFile("random.txt", spotifyData.songname.name);
      fs.appendFile("random.txt", spotifyData.album.name);
     }
    }
  else{
    console.log("Error, please try again");
   }
  }
});

function omdbInfo() {


}

function doThing() {


}