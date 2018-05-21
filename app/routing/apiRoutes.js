// API Routing

let friendsArr = require("../data/friends");

module.exports = function (app) {

    // return all the entries in the friends array in a json format
    app.get("/api/friends", function (req, res) {
        res.json(friendsArr.friends);
    });

    app.post("/api/friends", function (req, res) {

        // run function to calculate the rating total for the new person
        req.body.total = friendsArr.newFriendTotal(req.body);
        // find the array entry that has the closest (higher or lower) value to the new array entry
        leastDifference = 999999;
        friendsArr.friends.forEach(element => {
            difference = Math.abs(element.total - req.body.total);
            if (difference < leastDifference ) {
                match = element;
                leastDifference = difference;
            };
        });
        
        // add new friend to array. needs to be done after search so that new friend is not selected
        friendsArr.newFriendAdd(req.body);

        // respond back with the closest match
        res.json(match);

    });
};