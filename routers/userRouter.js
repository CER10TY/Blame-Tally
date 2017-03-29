const express = require("express");
const app = express();
const router = express.Router();
const parse = require("../services/userManager.js");
const bodyParser = require("body-parser");

let userManager = new parse(__dirname + "/../json/users.json");

router.use(bodyParser.json());

router.route("/user")

    // Gets all users from users.json
    .get(function(req, res) {
        res.send(userManager.getUsers());
    })

    // Tries to create user with new id, otherwise throws 500
    .post(function(req, res) {
        try {
            userManager.createUser(req.body.name);
            res.sendStatus(200);
        } catch(err) {
            res.sendStatus(500);
        }
    })

router.route("/user/:id") 

    // Deletes user with specified id
    .delete(function(req, res) {
        res.send(userManager.deleteUser(req.params.id));
    })

module.exports = router;