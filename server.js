const express = require('express')

const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')

// start the express app
const app = express()

// set the port for the app to listen on
const PORT = 3000

// register middleware with express using the use() method
app.use((req, res, next) => {
    // track time it takes for request to resolve
    const start = Date.now()
    // the next() function finds the endpoint to execute
    // whe that endpoint is done executing, the flow of execution returns to the middleware
    // to execute the lines immediately after next()
    next()
    const execTime = Date.now() - start
    console.log(`${req.method} ${req.url} execution time: ${execTime}ms`)
})

// using middleware to parse req.body
// without this, the req.body object will be undefined when making POST requests
app.use(express.json())

// use the router by calling use() just like any other middleware
app.use('/friends', friendsRouter)

app.use('/messages', messagesRouter)

// have the app listen on that port
// The listen() function takes a PORT and Callback that runs when the server starts
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})
