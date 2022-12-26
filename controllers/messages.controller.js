const path = require('path')

function getMessages(req, res) {
    // sendFiles handles data that is not text or json
    // sendfiles requires the absolute path of the file. path allows us to get just that 
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'))
    res.render('messages', {
        title: 'Messages to my friends!',
        friend: 'Peter Griffin',
    })
}

function postMessage(req, res) {
    console.log('Updating messages...')
    res.send("Message post endpoint successful...")
}

module.exports = {
    getMessages,
    postMessage
}