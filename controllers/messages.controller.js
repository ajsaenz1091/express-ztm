const path = require('path')

function getMessages(req, res) {
    // sendFiles handles data that is not text or json
    // sendfiles requires the absolute path of the file. path allows us to get just that 
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'))
}

function postMessage(req, res) {
    console.log('Updating messages...')
}

module.exports = {
    getMessages,
    postMessage
}