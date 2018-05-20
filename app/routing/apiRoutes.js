// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 



let friendsArr = require("../data/friends");


module.exports = function (app) {

    // return all the entries in the friends array in a json format
    app.get("/api/friends", function (req, res) {
        res.json(friendsArr.friends);
    });

    app.post("/api/friends", function (req, res) {

        // create object with high total value to insure that 
        // at least one entry in the array will have a lower value
        match = {
            total: 99999
        };
        // find the array entry that has the closest (higher or lower) value to the new array entry
        friendsArr.friends.forEach(element => {
            if (Math.abs(element.total - req.body.total) < match.total) {
                match = element;
            };
        });

        // run function to calculate the rating total for the new person
        // and store the new person in the array
        friendsArr.newFriend(req.body);

        // respond back with the closest match
        res.json(match);

    });
};