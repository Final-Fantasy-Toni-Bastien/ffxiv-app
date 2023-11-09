// route.js - route module.
const express = require("express");
const control = express.Router();

control.get('/', function (req, res) {
    res.render("index")
});

control.get('/logout', function (req, res) {

    res.clearCookie('token');
    res.redirect("/")

});

var feeding;

setInterval(function () { bl() }, 3600000)

async function bl() {
    try {
        const response = await fetch("https://lodestonenews.com/feed/fr.xml");
        if (response.ok) {
            const text = await response.text();
            feeding = text;
        } else {
            console.error("Erreur lors de la demande du flux RSS.");
            res.status(500).send("Erreur lors de la demande du flux RSS.");
        }
    } catch (error) {
        console.error("Une erreur s'est produite :", error);
        res.status(500).send("Une erreur s'est produite.");
    }
}

bl();

control.get("/refresh", function (req, res) {

    bl();

});

control.get("/feed", function (req, res) {
    res.set('Content-Type', 'text/xml');
    res.send(feeding)
})




module.exports = control;