// list of friends to choose from

let friendsArr = {
    friends: [{
            "name": "Abe",
            "photo": "https://www.encyclopedia.com/sites/default/files/4/2793330.jpg",
            "scores": [
                "2",
                "2",
                "2",
                "2",
                "2",
                "2",
                "2",
                "2",
                "2",
                "2"
            ],
            total: 20
        },
        {
            "name": "Billy",
            "photo": "https://vignette.wikia.nocookie.net/happytreefanon/images/c/c9/Billy_%28HTFCM%29.png/revision/latest/scale-to-width-down/350?cb=20161015172801",
            "scores": [
                "5",
                "5",
                "5",
                "5",
                "5",
                "5",
                "5",
                "5",
                "5",
                "5"
            ],
            total: 50
        },
        {
            "name": "Jane",
            "photo": "https://images.gr-assets.com/books/1427342556l/25220908.jpg",
            "scores": [
                "1",
                "1",
                "1",
                "1",
                "1",
                "2",
                "2",
                "2",
                "2",
                "2"
            ],
            total: 15
        },
        {
            "name": "Sally",
            "photo": "  https://pre00.deviantart.net/e410/th/pre/f/2016/224/4/9/super_sally_by_yagoshi-dadoxow.png",
            "scores": [
                "3",
                "3",
                "3",
                "3",
                "3",
                "3",
                "3",
                "3",
                "3",
                "3"
            ],
            total: 30
        },
        {
            "name": "Frank",
            "photo": "http://4.bp.blogspot.com/_HR3JtqIfTiE/SCernAS2nAI/AAAAAAAAAcM/YTs9Tkp2jD4/s400/Sinatra+1958.jpg",
            "scores": [
                "4",
                "4",
                "4",
                "4",
                "4",
                "4",
                "4",
                "4",
                "4",
                "4"
            ],
            total: 40
        },
        {
            "name": "Mia",
            "photo": "http://www.miicharacters.com/miis/large/19405_mandy.jpg",
            "scores": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "5",
                "2",
                "3",
                "4",
                "5"
            ],
            total: 34
        }
      
    ],

   // calculate survery total for the new friend
    newFriendTotal: function (val) {
        // calculate the total of the the survey ratings
        total = val.scores.reduce((total, score) => parseInt(total) + parseInt(score));
        return total;
    },
 // function to add a new friend to the array
    newFriendAdd: function (val) { 
        // store the new person in the array
        friendsArr.friends.push(val);
    }
};
// export 
module.exports = friendsArr;