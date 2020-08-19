const openStream = require("./openStream");
const $ = require("jquery");
//openStream();
const Peer = require("simple-peer");
const p = new Peer({ initiator: location.hash === "#1", trickle: false });

$(document).ready(function() {
    console.log("Webpack loaded");
    p.on("signal", token => {
        $("#txtMySignal").val(JSON.stringify(token));
    });

    $("#btnConnect").click(() => {
        const friendSignal = JSON.parse($("#txtFriendSignal").val());
        p.signal(friendSignal);

    });
});