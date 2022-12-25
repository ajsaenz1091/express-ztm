import express from 'express'

// start the express app
const app = express()

// set the port for the app to listen on
const PORT = 3000

// handle routes by using request handler methods
app.get('/', (req, res) => {
    res.send({
        id: 1,
        name: "Sir Isaac Newton"
    })
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
