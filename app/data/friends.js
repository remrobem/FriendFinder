// list of friends to choose from

let friendsArr = {
    friends: [{
            "name": "Ahmed",
            "photo": "https://www.encyclopedia.com/sites/default/files/4/2793330.jpg",
            "scores": [
                5,
                1,
                4,
                4,
                5,
                1,
                2,
                5,
                4,
                1
            ],
            total: 32
        },
        {
            "name": "Billy",
            "photo": "https://www.encyclopedia.com/sites/default/files/4/2793330.jpg",
            "scores": [
                5,
                1,
                5,
                4,
                1,
                3,
                1,
                2,
                4,
                1
            ],
            total: 26
        },
        {
            "name": "Jane",
            "photo": "https://www.encyclopedia.com/sites/default/files/4/2793330.jpg",
            "scores": [
                1,
                2,
                3,
                4,
                5,
                3,
                1,
                2,
                4,
                1
            ],
            total: 26
        }
    ],

    newFriend: function (val) {

        total = 0;

        val.scores.forEach(element => {
            total += parseInt(element);
        });

        val.total = total;
        
        friendsArr.friends.push(val);
    }
};
// export 
module.exports = friendsArr;