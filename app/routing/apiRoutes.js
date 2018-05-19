// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 



let friendsArr = require("../data/friends");


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsArr.friends);
    });

    app.post("/api/friends", function (req, res) {

       
        match = {
            total: 99999
        };

        friendsArr.friends.forEach(element => {
            if (Math.abs(element.total - req.body.total) < match.total) {
                match = element;
            };
        });
  

        friendsArr.newFriend(req.body);

        res.json(match);

    });
};