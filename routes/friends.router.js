const express = require('express')

const friendsController = require('../controllers/friends.controller.js')

// Router() middleware manages routes
// first create a new router then use it 
const friendsRouter =  express.Router()


// handle routes by using request handler methods
friendsRouter.get('/', friendsController.getFriends)
friendsRouter.post('/', friendsController.postFriend)
    // parameterized route with parameter => id
friendsRouter.get('/:id', friendsController.getFriend)

module.exports = friendsRouter