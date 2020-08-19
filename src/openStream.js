const playVideo = require("./playVideo")

function openStream() {
    $(document).ready(function() {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true })
            .then(stream => {
                playVideo(stream, 'localStream')
            })
            .catch(err => console.log(err))

    })
}

module.exports = openStream;