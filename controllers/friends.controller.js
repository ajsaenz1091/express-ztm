const friends = require('../models/friends.model')
// handler functions/ controller functions
function getFriends(req, res) {
    res.json(friends)
}

function getFriend(req, res) {
    // extract the id comming from the request 
    const friendId = Number(req.params.id)
    // use the friendId to access the specific friend
    const friend = friends[friendId]
    // validate if friend exists
    if (friend) {
        res.json(friend)
    } else {
        res.status(404).json({
            error: 'Friend does not exist'
        })
    }
}

function postFriend(req, res) {
    // when using data fromm body object, it's good practice to validate data
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        })
    }
    // create new friend to add to friends list
    const newFriend = {
        id: friends.length,
        name: req.body.name
    }
    friends.push(newFriend)
    res.json(newFriend)
}

module.exports = {
    getFriends,
    getFriend,
    postFriend,
}