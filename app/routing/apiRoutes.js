var express = require("express");
var ffUserData = require("../data/friends");

//Routing 
module.exports = function (app) {

    //Displaying all the FF Users 
    app.get("/api/friends", function (req, res) {
        return res.json(ffUserData);

    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);

        var recievedUser = req.body;

        //parse and loop scores
        for (let i = 0; i < recievedUser.scores.length; i++) {
            recievedUser.scores[i] = parseInt(recievedUser.scores[i])
        }


        //finding a bff
        var bfIndex = 0;
        var minDiff = 20;

        for (let i = 0; i < ffUserData.length; i++) {
            var totalDiff = 0;
        }

        for (let x = 0; x < ffUserData[i].scores.length; x++) {
            var diff = Math.abs(recievedUser.scores[x] - ffUserData[i].scores[x]);
            totalDiff += diff;
        }

        if (totalDiff < minDiff) {
            bfIndex = i;
            minDiff = totalDiff
        }

        //after matched push to ffarray
        ffUserData.push(recievedUser);

        res.json(ffUserData[bfIndex]);


        // if (err) {
        //     console.log(err)

        // } else {
        //     ffUserData.push(req.body);
        //     res.jason(true);
        //     console.log("should have been logged")

        // }

        //console.log(req.body)
    });



};

