const express = require("express");
const app = express();
const router = express.Router();
const manager = require("../services/tallyManager.js");
const bodyParser = require("body-parser");


let tallyManager = new manager(__dirname + "/../json/blame-tally.json");

router.use(bodyParser.json());

router.route("/list") 
    // Get all tally lists
    .get(function(req, res) {
        res.send(tallyManager.getTallies());
    })
    // Tries to add new tally list, otherwise throws 500
    .post(function(req, res) {
        try {
            tallyManager.addTally(req.body);
            res.sendStatus(200);
        } catch(err) {
            res.sendStatus(500);
        }
    })

router.route("/list/:name")
    // Get specific tally list (as JSON object)
    .get(function(req, res) {
        res.send(tallyManager.getTally(req.params.name));
    })

    // Updates tally list content with specified content (passed as JSON object)
    .put(function(req, res) {
        res.send(tallyManager.updateTally(req.params.name, req.body));
    })

    // Deletes specified tally list entirely
    .delete(function(req, res) {
        res.send(tallyManager.removeTally(req.params.name));
    })

module.exports = router;