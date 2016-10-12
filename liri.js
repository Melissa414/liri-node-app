var objective = require("./keys.js");
var request = require("request");
var spotify = require("spotify");
var newTwitter = require("twitter");
var client = newTwitter(objective.twitterKeys);
var fs = require("fs");

var objective = process.argv[2];

switch (objective) {

    case "my-tweets":
        myTweets();
        break;

    case "spotify-this-song":
        spotifySong();
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

function myTweets(tweets) {
    var params = {
        screen_name: "mBaldwin91"
    };
    client.get("statuses/user_timeline", params, function(error, tweets, response) {

        if (!error) {
            for (var i = 0; i < 20; i++) {
                //printing my screenname and my 20 tweets
                console.log("=================================================");
                console.log("@mBaldwin91 " + JSON.stringify(tweets, null, 2));
            }
        }
    });
};

function spotifySong(song) {

    var spotify = require("spotify");

    spotify.search({
        type: "track",
        id: "6c62731ce238491e8d6d09da2d34cc30"
    }, function(err, data, response) {

        if (!err) {

            console.log("=================================================");
            //artist
            console.log("Artist: " + JSON.stringify(data, null, 2));
            //songname
            console.log("Songname: " + JSON.stringify(data, null, 2));
            //album
            console.log("Album: " + JSON.stringify(data, null, 2));
            console.log("=================================================");

        } else {
            console.log("Error, please try again.")
        }
    });
}

function omdbInfo(movie) {

    var request = require("request");
    var omdbUrl = "http://www.omdbapi.com/?t=" + argv2 + "&y=&plot=short&r=json&tomatoes=true";
    var argv2 = process.argv[2];

    request(omdbUrl, function(error, response, body) {

        if (!error && response.statusCode == 200) {

            console.log("=================================================");
            // title
            console.log("Title: " + JSON.parse(body)['Title']);
            //release date
            console.log("Release Date: " + argv2 + " is " + JSON.parse(body)['Year'] + ".");
            //ratings
            console.log("Rating: " + argv2 + " has an imdb rating of " + JSON.parse(body)['imdbRating'] + ".");
            //language
            console.log("Language: " + JSON.parse(body)['Language'] + ".");
            //plot
            console.log(argv2 + "'s plot: " + JSON.parse(body)['Plot'] + ".");
            //actors
            console.log("Actors in the movie: " + JSON.parse(body)['Actors'] + ".");
            //tomatoes rating
            console.log("Rotten tomatoes rating is: " + JSON.parse(body)['tomatoRating']);
            console.log("=================================================");

            //sends info to random.txt file
            fs.appendFile("random.txt", "Title: " + JSON.stringify(body, null, 2));
            fs.appendFile("random.txt", "Release Date: " + JSON.stringify(body, null, 2));
            fs.appendFile("random.txt", "Rating: " + JSON.stringify(body, null, 2));
            fs.appendFile("random.txt", "Language" + JSON.stringify(body, null, 2));
            fs.appendFile("random.txt", "Plot: " + JSON.stringify(body, null, 2));
            fs.appendFile("random.txt", "Actors: " + JSON.stringify(body, null, 2));
            fs.appendFile("random.txt", "Rotten tomatoes" + JSON.stringify(body, null, 2));

        } else {
            console.log("Error, please try again.")
        }
    });

    function doSomething() {
      //needs to be finished - to be continued...

    }
};