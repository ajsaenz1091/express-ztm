import express from 'express'

// start the express app
const app = express()

// set the port for the app to listen on
const PORT = 3000

const friends = [
    {
        id: 0,
        name: "Sir Isaac Newton"
    },
    {
        id: 1,
        name: "Sir Alberto Gonzalez"
    },
    {
        id: 2,
        name: "Sir Adriano Fazio"
    },
    {
        id: 3,
        name: "Sir Leonardo Dorado"
    }
]

// handle routes by using request handler methods
app.get('/friends', (req, res) => {
    res.json(friends)
})
    // parameterized route with parameter => id
app.get('/friends/:id', (req, res) => {
    // extract the id comming from the request 
    const friendId = Number(req.params.id)
    // use the friendId to access the specific friend
    const friend = friends[friendId]
    // validate if friend exists
    if (friend) {
        res.json(friend)
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        })
    }
})

app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello Albert!</li></ul>')
})

app.post('/messages', (req, res) => {
    console.log('Updating messages...')
})

// have the app listen on that port
// The listen() function takes a PORT and Callback that runs when the server starts
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})
